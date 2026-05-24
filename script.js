document.addEventListener("DOMContentLoaded", function () {
    // Configuration de l'Intersection Observer pour l'apparition au scroll
    const observerOptions = {
        root: null, // utilise le viewport du navigateur
        rootMargin: "0px",
        threshold: 0.12 // Déclenche l'animation dès que 12% de la section est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optionnel : on désobserve une fois l'élément apparu pour figer l'état
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Cibler tous les éléments avec la classe .reveal
    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach(el => observer.observe(el));
});