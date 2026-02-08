document.addEventListener('DOMContentLoaded', () => {
    const secureButtons = document.querySelectorAll('.btn-request');
    secureButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le lien de faire sa fonction par défaut
            alert("SÉCURITÉ DGCMU : Cet élément est privé ou confidentiel. Votre demande d'accès a été transmise à Nadia Flore NAHOUNOU.");
        });
    });
});