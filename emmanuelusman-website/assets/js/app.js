// This file contains the main JavaScript logic for the website, handling navigation and general interactivity.

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle navigation menu on burger menu click
    burgerMenu.addEventListener('click', () => {
        document.querySelector('.navigation').classList.toggle('active');
    });

    // Close navigation menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.navigation').classList.remove('active');
        });
    });

    // Scroll to top functionality
    const scrollUpButton = document.getElementById('scroll-up');
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});