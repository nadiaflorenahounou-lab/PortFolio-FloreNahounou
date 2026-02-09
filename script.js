document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .career-box, .cert-box');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "all 0.5s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100 * index);
    });
});