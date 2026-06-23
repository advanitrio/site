document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector("header");

  const updateHeader = () => {
    const scrolled = window.scrollY > 30;
    header.classList.toggle("scrolled", scrolled);
  };

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateHeader();

  /* MENU MOBILE */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

});
