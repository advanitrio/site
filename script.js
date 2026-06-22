document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // 🔥 garante estado correto imediatamente ao carregar
  updateHeader();

  // scroll normal
  window.addEventListener("scroll", updateHeader);
});
