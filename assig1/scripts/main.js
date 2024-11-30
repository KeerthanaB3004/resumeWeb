// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Welcome Alert on Home Page
    if (window.location.pathname.includes("index.html")) {
        alert("Welcome to My Portfolio!");
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = e.target.getAttribute('href');
            if (target.startsWith('#') || target.endsWith('.html')) {
                e.preventDefault();
                document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Highlight the Active Navigation Link
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.borderBottom = '2px solid white';
        }
    });

    // Card Hover Effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.3)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
