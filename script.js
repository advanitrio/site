document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // estado inicial garantido
  header.classList.remove("scrolled");
  updateHeader();

  window.addEventListener("scroll", updateHeader);
});
