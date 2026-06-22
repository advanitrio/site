document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // 🔥 FORÇA estado LIMPO ANTES DE QUALQUER COISA VISUAL
  header.classList.remove("scrolled");

  // 🔥 espera 1 frame do navegador (resolve o flash azul)
  requestAnimationFrame(() => {
    updateHeader();
  });

  // scroll normal
  window.addEventListener("scroll", updateHeader);
});
