// Animation au survol des cartes
const cards = document.querySelectorAll('.card, .impact-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(56, 189, 248, 0.2)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});