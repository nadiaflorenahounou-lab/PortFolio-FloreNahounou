/**
 * Portfolio Interactive Script
 * Nadia Flore NAHOUNOU - 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Animation d'entrée des cartes de projets ---
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        // État initial (caché et légèrement décalé vers le bas)
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        // Apparition en cascade (délai progressif)
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });

    // --- 2. Gestion des demandes d'accès sécurisées ---
    const secureButtons = document.querySelectorAll('.btn-green, .btn-outline');

    secureButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const link = btn.getAttribute('href');
            
            // Si le lien est vide ou un simple ancrage, on affiche l'alerte
            if (link === '#' || link === '') {
                e.preventDefault();
                
                const projectName = btn.closest('.project-card').querySelector('h3').innerText;
                
                alert(`DEMANDE D'ACCÈS : ${projectName}\n\nVotre demande a été transmise à Nadia Flore NAHOUNOU.\nPour des raisons de confidentialité institutionnelle (DGCMU), l'accès est soumis à validation.\n\nVous recevrez une réponse par email.`);
            }
        });
    });

    // --- 3. Effet de survol sur la photo de profil ---
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.05) rotate(2deg)';
            profileImg.style.transition = 'transform 0.3s ease';
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});