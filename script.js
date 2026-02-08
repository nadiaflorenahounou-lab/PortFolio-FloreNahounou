document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            card.style.opacity = '1';
        }, i * 150);
    });
    const requestButtons = document.querySelectorAll('.btn-request, .btn-outline');
    requestButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href') === '#') {
                e.preventDefault();
                alert("Demande envoyée à Nadia Flore. Une réponse vous sera adressée par email après validation de vos accès.");
            }
        });
    });
});