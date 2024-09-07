document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS.load('particles-js', 'particles.json', () => console.log('particles.js loaded - callback'));

    // Form validation
    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();
        alert('Form submitted!');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a, .logo-link').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add hover effect to sections
    document.querySelectorAll('.section').forEach(section => {
        section.addEventListener('mouseenter', () => section.style.transform = 'scale(1.05)');
        section.addEventListener('mouseleave', () => section.style.transform = 'scale(1)');
    });

    // Initialize AOS (Animate on Scroll library)
    AOS.init({ duration: 1200 });
});