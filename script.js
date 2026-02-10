// Smooth Scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation simple au survol des cartes
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 10px 30px rgba(56, 189, 248, 0.2)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "none";
    });
});