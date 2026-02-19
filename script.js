// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Carrossel
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev
