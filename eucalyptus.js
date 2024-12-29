document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector("footer .container");

    footer.innerHTML = `
        <p class="text-sm">&copy; ${currentYear} Designed & Developed by RHYTMELO DESIGNS</p>
        <p class="text-sm mt-2">Empowering businesses with innovative solutions for a better tomorrow.</p>
    `;

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Disable right-click and copying
    const disallowedKeys = ['u', 's', 'p', 'a', 'c'];
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && disallowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    });

    // Additional security: prevent iframe embedding
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
});

// Toggle drawer visibility
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    drawer.classList.toggle('-translate-x-full');
}
