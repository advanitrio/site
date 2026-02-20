// Seleciona elementos
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Adiciona evento de clique
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
