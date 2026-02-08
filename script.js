const projects = {
    journey: {
        title: "My Dev Journey",
        desc: "Plateforme interactive retraçant mon évolution technique et mes premiers pas de développeuse.",
        link: "https://nadiaflorenahounou-lab.github.io/devjourney/"
    },
    ecommerce: {
        title: "Delaroche Fashion",
        desc: "Site e-commerce moderne avec catalogue dynamique, réalisé avec une attention particulière à l'UI/UX.",
        link: "https://nadiaflorenahounou-lab.github.io/Ecommerce_vetements/"
    },
    wordpress: {
        title: "Niangon ma Fierté",
        desc: "Site communautaire vitrine réalisé sur WordPress pour la valorisation du patrimoine de la commune.",
        link: "#"
    },
    archive: {
        title: "DGCMU Hub Flow",
        desc: "Solution d'archivage numérique sécurisée pour la gestion des flux documentaires institutionnels (En développement).",
        link: "https://github.com/nadiaflorenahounou-lab"
    },
    cmu: {
        title: "CMU SMART - DGCMU",
        desc: "Application mobile facilitant l'accès aux soins par la géolocalisation des centres de santé (En développement).",
        isMobile: true,
        link: "https://github.com/nadiaflorenahounou-lab"
    }
};

function openModal(id) {
    const p = projects[id];
    const modalBody = document.getElementById('modal-body');
    
    let html = `
        <h2 style="color:white; margin-bottom:15px;">${p.title}</h2>
        <p style="color:#94a3b8; margin-bottom:20px; font-size:1.1rem;">${p.desc}</p>
        <div class="modal-actions">
            ${p.link !== "#" ? `<a href="${p.link}" target="_blank" class="btn-link">🔗 Voir le projet en ligne</a>` : ''}
            ${p.isMobile ? `<a href="#" class="btn-apk">📲 Télécharger l'APK (Phase Bêta)</a>` : ''}
        </div>
    `;
    
    modalBody.innerHTML = html;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    const m = document.getElementById('modal');
    if (event.target == m) closeModal();
}