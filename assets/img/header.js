console.log('--- js/header.js loaded and parsed ---');

console.log('[DEBUG] js/header.js file loaded'); // LOG 0: Script file check

/* REMOVED old DOMContentLoaded listener for .menu-toggle */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.mobile-nav .close-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const body = document.body;

    if (burgerMenu && mobileNav && closeMenu) {
        const openMobileMenu = () => {
            mobileNav.classList.add('open');
            burgerMenu.classList.add('open');
            burgerMenu.setAttribute('aria-expanded', 'true');
            body.style.overflow = 'hidden';
        };

        const closeMobileMenu = () => {
            mobileNav.classList.remove('open');
            burgerMenu.classList.remove('open');
            burgerMenu.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        };

        // Burger Menu click handler
        burgerMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            if (mobileNav.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Close button click handler
        closeMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu();
        });

        // Nav links click handler - close menu when a link is clicked
        mobileNavLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('open')) {
                    closeMobileMenu();
                }
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (event) => {
            if (mobileNav.classList.contains('open') && 
                !mobileNav.contains(event.target) && 
                !burgerMenu.contains(event.target)) {
                closeMobileMenu();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mobileNav.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }
}); 