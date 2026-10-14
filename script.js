(function () {
  const gallery = document.getElementById("gallery");
  const filtersEl = document.getElementById("filters");
  const header = document.getElementById("header");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");

  // Langue de la page (<html lang="fr|en">) et dossier de base des fichiers
  // (la page anglaise est dans /en/, donc elle va chercher les images un niveau plus haut).
  const LANG = document.documentElement.lang === "en" ? "en" : "fr";
  const BASE = document.documentElement.getAttribute("data-base") || "";
  const url = (u) => BASE + u;
  const titleOf = (p) => (LANG === "en" && p.title_en) || p.title || "";
  const ALL = "Tout"; // clé interne du filtre « tout »
  const catLabel = (c) => {
    if (c === ALL) return LANG === "en" ? "All" : "Tout";
    if (LANG === "en" && typeof CATEGORY_EN !== "undefined" && CATEGORY_EN[c]) return CATEGORY_EN[c];
    return c;
  };

  document.getElementById("year").textContent = new Date().getFullYear();

  // Hero
  if (HERO_IMAGE) {
    const heroBg = document.getElementById("heroBg");
    const pre = new Image();
    // On lance le zoom arrière seulement quand l'image est chargée et décodée (sinon il saccade).
    const start = () => { heroBg.style.backgroundImage = `url("${url(HERO_IMAGE)}")`; requestAnimationFrame(() => heroBg.classList.add("ready")); };
    pre.onload = () => { (pre.decode ? pre.decode().catch(() => {}) : Promise.resolve()).then(start); };
    pre.onerror = start;
    pre.src = url(HERO_IMAGE);
  }

  // Header au scroll
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Révélation à l'apparition
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  // Chargement des miniatures : un peu avant leur arrivée à l'écran, avec une nouvelle
  // tentative en cas d'échec (plus fiable que loading="lazy" dans une grille réorganisée).
  function loadImg(img, tries) {
    img.onload = () => img.classList.add("loaded");
    img.onerror = () => {
      if (tries < 3) setTimeout(() => { img.src = img.dataset.src + "?r=" + tries; loadImg(img, tries + 1); }, 800 * tries);
      else img.classList.add("loaded");
    };
    img.src = img.dataset.src;
    if (img.complete && img.naturalWidth) img.classList.add("loaded");
  }
  const imgIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const img = e.target.querySelector("img");
      if (img && !img.src) loadImg(img, 1);
      imgIO.unobserve(e.target);
    });
  }, { rootMargin: "1500px 0px" });

  // Ordre aléatoire (Fisher-Yates) : change à chaque visite et à chaque changement de catégorie.
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const k = Math.floor(Math.random() * (i + 1));
      [a[i], a[k]] = [a[k], a[i]];
    }
    return a;
  }

  let items = [];       // éléments DOM des photos
  let visible = [];     // photos actuellement affichées (ordre de la visionneuse)
  let current = 0;
  let activeCat = ALL;
  let colsNow = 0;

  const colCount = () => (window.innerWidth <= 560 ? 1 : window.innerWidth <= 900 ? 2 : 3);

  // Répartit les photos dans les colonnes : ordre de lecture de gauche à droite,
  // chaque photo va dans la colonne la moins haute.
  function layout(force) {
    const n = colCount();
    if (!force && n === colsNow) return;
    colsNow = n;
    gallery.innerHTML = "";
    gallery.style.setProperty("--cols", n);
    const cols = Array.from({ length: n }, () => {
      const el = document.createElement("div");
      el.className = "col";
      gallery.appendChild(el);
      return { el, h: 0 };
    });
    visible = items.filter((el) => activeCat === ALL || el._cats.includes(activeCat));
    visible.forEach((el) => {
      const target = cols.reduce((a, b) => (b.h < a.h ? b : a));
      target.el.appendChild(el);
      target.h += 1 / el._ratio + 0.04;
    });
  }

  function build() {
    gallery.innerHTML = "";

    if (!PHOTOS.length) {
      gallery.style.setProperty("--cols", colCount());
      PLACEHOLDER_RATIOS.forEach((r) => {
        const d = document.createElement("div");
        d.className = "item placeholder";
        d.style.aspectRatio = r;
        d.textContent = LANG === "en" ? "Photo coming soon" : "Photo à venir";
        gallery.appendChild(d);
        io.observe(d);
      });
      return;
    }

    PHOTOS.forEach((p) => {
      const fig = document.createElement("figure");
      fig.className = "item";
      fig._cats = [].concat(p.category || []);
      if (p.ratio) fig.style.aspectRatio = p.ratio;
      const [rw, rh] = String(p.ratio || "3/2").split("/").map(Number);
      fig._ratio = rw / (rh || 1) || 1.5;
      const title = titleOf(p);
      const fallbackAlt = LANG === "en" ? "Photograph by Nicolas Cartalade" : "Photographie de Nicolas Cartalade";
      fig.innerHTML = `<img data-src="${url(p.thumb || p.src)}" alt="${title || fallbackAlt}" decoding="async">` +
        (title ? `<figcaption class="cap">${title}</figcaption>` : "");
      fig.addEventListener("click", () => open(fig));
      io.observe(fig);
      imgIO.observe(fig);
      fig._photo = p;
      items.push(fig);
    });

    shuffle(items);

    // Filtres
    const cats = [...new Set(PHOTOS.flatMap((p) => [].concat(p.category || [])))];
    if (cats.length > 1) {
      [ALL, ...cats].forEach((c, idx) => {
        const b = document.createElement("button");
        b.textContent = catLabel(c);
        if (idx === 0) b.classList.add("active");
        b.addEventListener("click", () => {
          filtersEl.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
          b.classList.add("active");
          activeCat = c;
          shuffle(items);
          layout(true);
        });
        filtersEl.appendChild(b);
      });
    }

    layout(true);

    let t;
    window.addEventListener("resize", () => {
      clearTimeout(t);
      t = setTimeout(() => layout(false), 150);
    });
  }

  // Lightbox
  function preload(i) {
    const el = visible[(i + visible.length) % visible.length];
    if (el) { const im = new Image(); im.src = url(el._photo.src); }
  }
  function show(i) {
    current = (i + visible.length) % visible.length;
    const p = visible[current]._photo;
    const title = titleOf(p);
    lbImg.src = url(p.src);
    lbImg.alt = title;
    lbCaption.textContent = (title ? title + "  ·  " : "") + (current + 1) + " / " + visible.length;
    preload(current + 1);
    preload(current - 1);
  }
  function open(el) {
    current = visible.indexOf(el);
    show(current);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", () => show(current - 1));
  document.getElementById("lbNext").addEventListener("click", () => show(current + 1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // Swipe mobile
  let sx = 0;
  lightbox.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
  });

  // Vidéo d'ambiance (À propos) : lue seulement quand elle est visible,
  // et laissée à l'arrêt si le visiteur a demandé de réduire les animations.
  const vid = document.querySelector(".about-media video");
  if (vid) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      vid.removeAttribute("autoplay");
      vid.pause();
    } else {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const p = vid.play();
            if (p && p.catch) p.catch(() => {});
          } else {
            vid.pause();
          }
        });
      }, { threshold: 0.25 }).observe(vid);
    }
  }

  build();
})();
