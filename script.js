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
  // Ajusta índice para não sair do limite
  if (i < 0) {
    index = totalSlides - 1;
  } else if (i >= totalSlides) {
    index = 0;
  } else {
    index = i;
  }
  // Move o container de slides
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Botão próximo
document.querySelector('.next').addEventListener('click', () => {
  showSlide(index + 1);
});

// Botão anterior
document.querySelector('.prev').addEventListener('click', () => {
  showSlide(index - 1);
});

// ===== AUTO-PLAY (opcional) =====
// Se quiser que o carrossel troque sozinho a cada 5 segundos:
setInterval(() => {
  showSlide(index + 1);
}, 5000);
