const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const itemsToShow = 3; // Número de itens visíveis
const totalItems = 5;  // Total de itens
const gap = 20;        // Espaçamento entre os itens

// Atualizar a posição do carrossel
function updateCarousel(index) {
    const itemWidth = carousel.children[0].offsetWidth + gap;
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Navegação pelas bolinhas
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

// Arrastar com o mouse
let startX = 0;
let isDragging = false;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const moveX = e.pageX - startX;
    carousel.style.transform = `translateX(${moveX}px)`;
});

carousel.addEventListener('mouseup', (e) => {
    isDragging = false;
    carousel.style.cursor = 'grab';
    const itemWidth = carousel.children[0].offsetWidth + gap;
    currentIndex = Math.round(carousel.scrollLeft / itemWidth);
    updateCarousel(currentIndex);
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});
function escolher(opcao) {
    localStorage.setItem("escolha2", opcao); // Armazena a escolha
    window.location.href = "tela3-mas.html";    // Vai para a próxima tela
}

