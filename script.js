(function () {
  const gallery = document.getElementById("gallery");
  const filtersEl = document.getElementById("filters");
  const header = document.getElementById("header");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");

  document.getElementById("year").textContent = new Date().getFullYear();

  // Hero
  if (HERO_IMAGE) {
    document.getElementById("heroBg").style.backgroundImage = `url("${HERO_IMAGE}")`;
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

  let items = [];       // éléments DOM des photos
  let visible = [];     // photos actuellement affichées (ordre de la visionneuse)
  let current = 0;
  let activeCat = "Tout";
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
    visible = items.filter((el) => activeCat === "Tout" || el.dataset.category === activeCat);
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
        d.textContent = "Photo à venir";
        gallery.appendChild(d);
        io.observe(d);
      });
      return;
    }

    PHOTOS.forEach((p) => {
      const fig = document.createElement("figure");
      fig.className = "item";
      fig.dataset.category = p.category || "";
      if (p.ratio) fig.style.aspectRatio = p.ratio;
      const [rw, rh] = String(p.ratio || "3/2").split("/").map(Number);
      fig._ratio = rw / (rh || 1) || 1.5;
      fig.innerHTML = `<img src="${p.thumb || p.src}" alt="${p.title || "Photographie de Nicolas Cartalade"}" loading="lazy" decoding="async">` +
        (p.title ? `<figcaption class="cap">${p.title}</figcaption>` : "");
      fig.addEventListener("click", () => open(fig));
      io.observe(fig);
      fig._photo = p;
      items.push(fig);
    });

    // Filtres
    const cats = [...new Set(PHOTOS.map((p) => p.category).filter(Boolean))];
    if (cats.length > 1) {
      ["Tout", ...cats].forEach((c, idx) => {
        const b = document.createElement("button");
        b.textContent = c;
        if (idx === 0) b.classList.add("active");
        b.addEventListener("click", () => {
          filtersEl.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
          b.classList.add("active");
          activeCat = c;
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
    if (el) { const im = new Image(); im.src = el._photo.src; }
  }
  function show(i) {
    current = (i + visible.length) % visible.length;
    const p = visible[current]._photo;
    lbImg.src = p.src;
    lbImg.alt = p.title || "";
    lbCaption.textContent = (p.title ? p.title + "  ·  " : "") + (current + 1) + " / " + visible.length;
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
  const vid = document.querySelector(".about-video video");
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
