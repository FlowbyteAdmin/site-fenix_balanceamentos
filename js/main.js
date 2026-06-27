/* =========================================================
   Fênix Balanceamentos Industriais — Interatividade
   Sem dependências externas (JavaScript puro)
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Ano atual no footer ---------- */
  var anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------- Navbar: fundo sólido ao rolar ---------- */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu hambúrguer (mobile) ---------- */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  var overlay = document.getElementById("nav-overlay");

  function closeMenu() {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  function openMenu() {
    menu.classList.add("open");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    if (overlay) overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (menu.classList.contains("open")) closeMenu();
      else openMenu();
    });

    // Fecha o menu ao clicar em um link
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Fecha ao tocar fora do menu (overlay)
    if (overlay) overlay.addEventListener("click", closeMenu);

    // Fecha com ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Animação de revelação ao rolar ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Lightbox da galeria ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxContent = document.getElementById("lightbox-content");
  var lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(node) {
    lightboxContent.innerHTML = "";
    lightboxContent.appendChild(node);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxContent.innerHTML = "";
    document.body.style.overflow = "";
  }

  if (lightbox) {
    document.querySelectorAll(".gallery__item").forEach(function (item) {
      item.addEventListener("click", function () {
        var clone;
        var img = item.querySelector("img");
        if (img) {
          // Quando houver foto real, mostra a imagem ampliada
          clone = document.createElement("img");
          clone.src = img.src;
          clone.alt = img.alt || "";
        } else {
          // Placeholder: mostra uma versão maior do bloco
          clone = document.createElement("div");
          clone.className = "media-placeholder";
          clone.setAttribute("data-label", item.getAttribute("data-label") || "Foto");
        }
        openLightbox(clone);
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }
})();
