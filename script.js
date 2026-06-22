document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  let lastState = false;

  function updateHeader() {
    const shouldBeScrolled = window.scrollY > 30; // 👈 mais estável que 10px

    if (shouldBeScrolled !== lastState) {
      header.classList.toggle("scrolled", shouldBeScrolled);
      lastState = shouldBeScrolled;
    }
  }

  // estado inicial
  updateHeader();

  // scroll otimizado
  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateHeader);
  }, { passive: true });
});
