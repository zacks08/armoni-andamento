let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
