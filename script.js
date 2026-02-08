document.addEventListener('DOMContentLoaded', () => {
    const secureButtons = document.querySelectorAll('.btn-request');
    secureButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("SÉCURITÉ DGCMU : Accès restreint. Votre demande a été transmise à Nadia Flore NAHOUNOU.");
        });
    });
});