"use strict";

// Configuration GSAP et ScrollTrigger
gsap.registerPlugin(ScrollTrigger); // barre de navigation

var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('#navbar a'); // Sélection des sections

var sections = document.querySelectorAll(".section1,section2");
var navLinks = document.querySelectorAll("#navbar ul li a");
var backToTopButton = document.getElementById("back-to-top");
var inactivityBubble = document.getElementById("inactivity-bubble");

window.onload = function () {
  window.scrollTo(0, 0); // Défilement vers le haut
}; // Animation des sections


sections.forEach(function (section1, index) {
  ScrollTrigger.create({
    trigger: section1,
    start: "top top",
    // Fixe la section quand elle arrive au sommet de l'écran
    end: "bottom top",
    // Libère la section dès que le bas de la section touche le haut de l'écran
    pin: true,
    // Fige la section en haut de l'écran
    pinSpacing: true,
    // Ajoute de l'espace après la section pour éviter que la page se chevauche
    scrub: false,
    // Pas d'effet de transition progressive
    snap: {
      snapTo: 1,
      // Scrolle automatiquement d'une section à l'autre
      duration: 0.5,
      // Durée du snap
      ease: "power2.in"
    },
    onEnter: function onEnter() {
      navLinks.forEach(function (section1) {
        return section1.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    },
    onLeaveBack: function onLeaveBack() {
      navLinks.forEach(function (section1) {
        return section1.classList.remove("active");
      });

      if (index > 0) {
        navLinks[index - 1].classList.add("active");
      }
    }
  });
}); // Navigation via les liens

navLinks.forEach(function (link, index) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    sections[index].scrollIntoView({
      behavior: "smooth"
    });
  });
}); // Bouton pour remonter en haut

backToTopButton.addEventListener("click", function () {
  sections[0].scrollIntoView({
    behavior: "smooth"
  });
}); // Afficher/cacher le bouton "back-to-top"

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});
//# sourceMappingURL=script.dev.js.map
