let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}


function escolher(opcao) {
  localStorage.setItem("escolha3", opcao); // Armazena a escolha
  window.location.href = "tela-resultado-fem.html"; }   // Vai para a próxima tela
