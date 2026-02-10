// Sélectionne la barre de progression
const fill = document.querySelector('.progress-fill');

// Anime la barre de 0 à 85%
setTimeout(() => {
    fill.style.width = '85%';
}, 500);