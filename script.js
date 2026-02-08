document.addEventListener('DOMContentLoaded', () => {
    // Gestion des boutons de demande d'accès
    const secureButtons = document.querySelectorAll('.btn-request');
    
    secureButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("SÉCURITÉ DGCMU : Cet élément est privé ou confidentiel. Votre demande d'accès a été transmise à Nadia Flore NAHOUNOU.");
        });
    });

    // Optionnel : Animation fluide lors du défilement
    console.log("Portfolio de Nadia Flore NAHOUNOU prêt.");
});