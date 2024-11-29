// Espera o DOM ser carregado para adicionar as animações de fade-in
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    faders.forEach((el, index) => {
        setTimeout(() => el.classList.add('show'), index * 300); // Delay progressivo
    });
});
