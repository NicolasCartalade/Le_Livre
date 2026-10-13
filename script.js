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

  let items = [];     // éléments DOM des photos réelles
  let visible = [];   // photos actuellement affichées (pour la navigation)
  let current = 0;

  function build() {
    gallery.innerHTML = "";

    if (!PHOTOS.length) {
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

    PHOTOS.forEach((p, i) => {
      const fig = document.createElement("figure");
      fig.className = "item";
      fig.dataset.category = p.category || "";
      if (p.ratio) fig.style.aspectRatio = p.ratio;
      fig.innerHTML = `<img src="${p.src}" alt="${p.title || "Photographie de Nicolas Cartalade"}" loading="lazy" decoding="async">` +
        (p.title ? `<figcaption class="cap">${p.title}</figcaption>` : "");
      fig.addEventListener("click", () => open(fig));
      gallery.appendChild(fig);
      io.observe(fig);
      fig._photo = p;
      items.push(fig);
    });
    visible = items.slice();

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
          items.forEach((el) => el.classList.toggle("hidden", idx !== 0 && el.dataset.category !== c));
          visible = items.filter((el) => !el.classList.contains("hidden"));
        });
        filtersEl.appendChild(b);
      });
    }
  }

  // Lightbox
  function show(i) {
    current = (i + visible.length) % visible.length;
    const p = visible[current]._photo;
    lbImg.src = p.src;
    lbImg.alt = p.title || "";
    lbCaption.textContent = p.title || "";
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

  build();
})();
