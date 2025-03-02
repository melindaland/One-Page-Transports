// Configuration GSAP et ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// barre de navigation
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('#navbar a');

// Sélection des sections
const sections = document.querySelectorAll(".section1,section2");
const navLinks = document.querySelectorAll("#navbar ul li a");
const backToTopButton = document.getElementById("back-to-top");
const inactivityBubble = document.getElementById("inactivity-bubble");

window.onload = () => {
    window.scrollTo(0, 0); // Défilement vers le haut
};

// Animation des sections
sections.forEach((section1, index) => {
    ScrollTrigger.create({
        trigger: section1,
        start: "top top",  // Fixe la section quand elle arrive au sommet de l'écran
        end: "bottom top", // Libère la section dès que le bas de la section touche le haut de l'écran
        pin: true,         // Fige la section en haut de l'écran
        pinSpacing: true,  // Ajoute de l'espace après la section pour éviter que la page se chevauche
        scrub: false,      // Pas d'effet de transition progressive
        snap: {
            snapTo: 1,    // Scrolle automatiquement d'une section à l'autre
            duration: 0.5, // Durée du snap
            ease: "power2.in"
        },
        onEnter: () => {
            navLinks.forEach(section1 => section1.classList.remove("active"));
            navLinks[index].classList.add("active");
        },
        onLeaveBack: () => {
            navLinks.forEach(section1 => section1.classList.remove("active"));
            if (index > 0) {
                navLinks[index - 1].classList.add("active");
            }
        },
    });
});

// Navigation via les liens
navLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        sections[index].scrollIntoView({ behavior: "smooth" });
    });
});

// Bouton pour remonter en haut
backToTopButton.addEventListener("click", () => {
    sections[0].scrollIntoView({ behavior: "smooth" });
});

// Afficher/cacher le bouton "back-to-top"
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});


