document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // 🔥 força estado inicial correto
  handleScroll();
});
