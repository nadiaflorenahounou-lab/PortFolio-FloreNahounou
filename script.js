document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            card.style.opacity = '1';
        }, i * 120);
    });

    const secureButtons = document.querySelectorAll('.btn-request, .btn-green');
    secureButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("SÉCURITÉ INSTITUTIONNELLE :\n\nCet élément contient des données confidentielles ou privées. Votre demande a été transmise à Nadia Flore NAHOUNOU pour validation.");
        });
    });
});