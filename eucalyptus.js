// document.addEventListener("DOMContentLoaded", function () {
//             const currentYear = new Date().getFullYear();
//             const footer = document.querySelector("footer .container");
//             footer.innerHTML = `
//                 <p class="text-sm">&copy; ${currentYear} Designed & Developed by RHYTMELO DESIGNS</p>
//                 <p class="text-sm mt-2">Empowering businesses with innovative solutions for a better tomorrow.</p>
//             `;

//             // Smooth scroll for anchor links
//             document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//                 anchor.addEventListener('click', function (e) {
//                     e.preventDefault();
//                     document.querySelector(this.getAttribute('href')).scrollIntoView({
//                         behavior: 'smooth'
//                     });
//                 });
//             });

//             // Disable right-click and copying
//             document.addEventListener('contextmenu', event => event.preventDefault());
//             document.addEventListener('keydown', event => {
//                 if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'p' || event.key === 'a' || event.key === 'c')) {
//                     event.preventDefault();
//                 }
//             });
//         });

//         // Additional security measures
//         window.addEventListener('load', () => {
//             if (window.self !== window.top) {
//                 window.top.location = window.self.location;
//             }
//         });




document.addEventListener("DOMContentLoaded", function () {
            const currentYear = new Date().getFullYear();
            const footer = document.querySelector("footer .container");
            footer.innerHTML = `
                <p class="text-sm">&copy; ${currentYear} Designed & Developed by RHYTMELO DESIGNS</p>
                <p class="text-sm mt-2">Empowering businesses with innovative solutions for a better tomorrow.</p>
            `;

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Disable right-click and copying
            document.addEventListener('contextmenu', event => event.preventDefault());
            document.addEventListener('keydown', event => {
                if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'p' || event.key === 'a' || event.key === 'c')) {
                    event.preventDefault();
                }
            });
        });

        // Additional security measures
        window.addEventListener('load', () => {
            if (window.self !== window.top) {
                window.top.location = window.self.location;
            }
        });


