const diaCard = document.getElementById('dia');
const noiteCard = document.getElementById('noite');

// Hover no botão Dia
diaCard.addEventListener('mouseover', () => {
    document.body.classList.add('hover-dia');
});

diaCard.addEventListener('mouseout', () => {
    document.body.classList.remove('hover-dia');
});

// Clique no botão Dia
diaCard.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(to bottom, #87CEFA, #FFA500)'; // Fundo claro para dia ensolarado
});

// Hover no botão Noite
noiteCard.addEventListener('mouseover', () => {
    document.body.classList.add('hover-noite');
});

noiteCard.addEventListener('mouseout', () => {
    document.body.classList.remove('hover-noite');
});

// Clique no botão Noite
noiteCard.addEventListener('click', () => {
    document.body.style.background = 'url("https://source.unsplash.com/1600x900/?moon,stars") no-repeat center center/cover'; // Fundo estrelado para noite
});