document.addEventListener('DOMContentLoaded', () => {
    const secureButtons = document.querySelectorAll('.btn-request');
    secureButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("SÉCURITÉ DGCMU : Cet élément est privé ou confidentiel. Votre demande d'accès a été transmise à Nadia Flore NAHOUNOU.");
        });
    });
});