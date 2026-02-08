// Défilement fluide pour les ancres (Accueil, Projets, Contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Message de bienvenue dans la console (pour les recruteurs curieux)
console.log("%c Portfolio de Nadia Flore NAHOUNOU v2.0 - Certifié DGCMU ", "color: #e67e22; font-weight: bold; font-size: 14px;");