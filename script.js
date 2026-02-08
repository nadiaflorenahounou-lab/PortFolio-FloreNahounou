document.addEventListener('DOMContentLoaded', () => {
    // Gestion des boutons de demande d'accès (CMU Smart & Hub Flow)
    const secureButtons = document.querySelectorAll('.btn-request');
    
    secureButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("SÉCURITÉ DGCMU : Accès restreint. Votre demande d'autorisation a été transmise à Nadia Flore NAHOUNOU.");
        });
    });

    console.log("Portfolio Nadia Flore NAHOUNOU - Version 2026 prête.");
});