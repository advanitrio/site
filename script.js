// ===== MENU HAMBÚRGUER =====
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ===== CARROSSEL =====
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(i) {
  if (i < 0) {
    index = totalSlides - 1;
  } else if (i >= totalSlides) {
    index = 0;
  } else {
    index = i;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(index + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(index - 1);
});

// Auto-play (opcional)
setInterval(() => {
  showSlide(index + 1);
}, 5000);

