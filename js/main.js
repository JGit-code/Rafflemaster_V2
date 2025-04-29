// Main JavaScript file for Raffle Master

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    initMobileNavigation();
    
    // Header scroll effect
    initHeaderScrollEffect();
    
    // Countdown timers
    initCountdownTimers();
    
    // Update cart count from localStorage
    updateCartCount();
    
    // Accordion functionality for FAQs
    initAccordions();
    
    // Prize card tilt effect
    initPrizeCardEffects();
    
    // Lazy load images
    initLazyLoading();
    
    // Scroll animations
    initScrollAnimations();
    
    // Filter functionality for raffles page
    initRaffleFilters();
    
    // Newsletter form
    initNewsletterForm();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
});

/**
 * Initialize mobile navigation menu
 */
function initMobileNavigation() {
    const burgerButton = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.close-menu');
    
    if (burgerButton && mobileNav) {
        burgerButton.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
        
        closeMenu.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileNav.classList.contains('active') && 
                !mobileNav.contains(e.target) && 
                e.target !== burgerButton) {
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Initialize header scroll effect
 */
function initHeaderScrollEffect() {
    const header = document.querySelector('.site-header');
    if (header) {
        // Apply class immediately if page is already scrolled
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        }
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

/**
 * Initialize countdown timers
 */
function initCountdownTimers() {
    const countdownElements = document.querySelectorAll('.countdown-timer');
    if (countdownElements.length > 0) {
        countdownElements.forEach(element => {
            const endTime = element.dataset.endTime || '2025-04-20T20:00:00Z';
            startCountdown(element, endTime);
        });
    }
}

/**
 * Update cart count in header
 */
function updateCartCount() {
    const cartCountEl = document.querySelector('.cart-count');
    if (cartCountEl) {
        const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
        cartCountEl.textContent = cart.length;
        
        // Add animation if cart count changes
        if (cart.length > 0) {
            cartCountEl.classList.add('pulse');
            setTimeout(() => {
                cartCountEl.classList.remove('pulse');
            }, 1000);
        }
    }
}

/**
 * Initialize accordions for FAQs
 */
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                this.classList.toggle('active');
                
                const content = this.nextElementSibling;
                const icon = this.querySelector('.accordion-icon');
                
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    if (icon) icon.textContent = '+';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) icon.textContent = '−';
                }
                
                // Close other accordions
                accordionHeaders.forEach(otherHeader => {
                    if (otherHeader !== header && otherHeader.classList.contains('active')) {
                        otherHeader.classList.remove('active');
                        const otherContent = otherHeader.nextElementSibling;
                        const otherIcon = otherHeader.querySelector('.accordion-icon');
                        
                        if (otherContent.style.maxHeight) {
                            otherContent.style.maxHeight = null;
                            if (otherIcon) otherIcon.textContent = '+';
                        }
                    }
                });
            });
        });
        
        // Open first accordion by default
        if (accordionHeaders.length > 0 && window.location.hash === '') {
            accordionHeaders[0].click();
        }
        
        // Open accordion based on URL hash
        if (window.location.hash) {
            const targetAccordion = document.querySelector(window.location.hash);
            if (targetAccordion && targetAccordion.classList.contains('accordion-header')) {
                targetAccordion.click();
                
                // Scroll to the accordion
                setTimeout(() => {
                    targetAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }
}

/**
 * Initialize prize card hover effects
 */
function initPrizeCardEffects() {
    const prizeCards = document.querySelectorAll('.prize-card.tilt');
    
    if (prizeCards.length > 0) {
        prizeCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element
                const y = e.clientY - rect.top;  // y position within the element
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / centerX * 8; // Max 8 degrees rotation
                const deltaY = (centerY - y) / centerY * 8;
                
                card.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${deltaY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
            });
            
            // Touch events for mobile
            card.addEventListener('touchstart', () => {
                card.style.transform = 'perspective(1000px) scale3d(1.02, 1.02, 1.02)';
            }, { passive: true });
            
            card.addEventListener('touchend', () => {
                card.style.transform = 'perspective(1000px) scale3d(1, 1, 1)';
            }, { passive: true });
        });
    }
}

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
    // Check if IntersectionObserver is available
    if ('IntersectionObserver' in window) {
        const imgOptions = {
            rootMargin: '0px 0px 50px 0px',
            threshold: 0.1
        };
        
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                        img.classList.add('loaded');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, imgOptions);
        
        // Find all images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            imgObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    // Check if IntersectionObserver is available
    if ('IntersectionObserver' in window) {
        const animOptions = {
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };
        
        const animObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, animOptions);
        
        // Observe elements with animate-on-scroll class
        const animElements = document.querySelectorAll('.animate-on-scroll');
        animElements.forEach(el => {
            animObserver.observe(el);
        });
        
        // Add animation classes to common elements if they don't have animate-on-scroll
        const sections = document.querySelectorAll('section:not(.animate-on-scroll)');
        sections.forEach((section, index) => {
            section.classList.add('animate-on-scroll');
            section.style.animationDelay = `${index * 0.1}s`;
            animObserver.observe(section);
        });
    }
}

/**
 * Initialize raffle filters on raffles page
 */
function initRaffleFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.querySelector('.sort-select');
    const raffleGrid = document.querySelector('.raffle-grid');
    const resultCount = document.getElementById('result-count');
    
    if (filterButtons.length > 0 && raffleGrid) {
        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const category = button.dataset.category;
                const prizeCards = raffleGrid.querySelectorAll('.prize-card');
                
                // Filter cards
                let visibleCount = 0;
                
                prizeCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'flex';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Update result count
                if (resultCount) {
                    resultCount.textContent = visibleCount;
                }
            });
        });
        
        // Sort functionality
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                const sortValue = sortSelect.value;
                const prizeCards = Array.from(raffleGrid.querySelectorAll('.prize-card:not([style*="display: none"])'));
                
                // Sort cards based on selected option
                prizeCards.sort((a, b) => {
                    switch (sortValue) {
                        case 'ending-soon':
                            const timeA = a.querySelector('.countdown-timer')?.dataset.endTime || '';
                            const timeB = b.querySelector('.countdown-timer')?.dataset.endTime || '';
                            return new Date(timeA) - new Date(timeB);
                        
                        case 'price-low':
                            const priceA = parseFloat(a.querySelector('.price')?.textContent.match(/\d+(\.\d+)?/)?.[0] || 0);
                            const priceB = parseFloat(b.querySelector('.price')?.textContent.match(/\d+(\.\d+)?/)?.[0] || 0);
                            return priceA - priceB;
                        
                        case 'price-high':
                            const priceHighA = parseFloat(a.querySelector('.price')?.textContent.match(/\d+(\.\d+)?/)?.[0] || 0);
                            const priceHighB = parseFloat(b.querySelector('.price')?.textContent.match(/\d+(\.\d+)?/)?.[0] || 0);
                            return priceHighB - priceHighA;
                        
                        case 'popularity':
                            const soldA = parseInt(a.querySelector('.progress-bar')?.style.width || '0%');
                            const soldB = parseInt(b.querySelector('.progress-bar')?.style.width || '0%');
                            return soldB - soldA;
                        
                        default:
                            return 0;
                    }
                });
                
                // Reorder cards in the DOM
                prizeCards.forEach(card => {
                    raffleGrid.appendChild(card);
                });
            });
        }
    }
}

/**
 * Initialize newsletter form with validation
 */
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            
            if (emailInput && emailInput.value) {
                // Show loading state
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<span class="spinner"></span> Subscribing...';
                }
                
                // Simulate API call
                setTimeout(() => {
                    // Show success message
                    newsletterForm.innerHTML = `
                        <div class="newsletter-success">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z"></path>
                            </svg>
                            <p>Thank you for subscribing!</p>
                        </div>
                    `;
                }, 1500);
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Countdown function
function startCountdown(element, endTimeStr) {
    const endTime = new Date(endTimeStr).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        
        if (timeLeft <= 0) {
            element.innerHTML = '<span class="expired">Expired</span>';
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Animation effect when seconds change
        const currentSeconds = element.querySelector('.countdown-item:last-child .countdown-number')?.textContent;
        let secondsClass = '';
        
        if (currentSeconds !== undefined && currentSeconds !== String(seconds)) {
            secondsClass = 'countdown-update';
        }
        
        element.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">hrs</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">mins</span>
            </div>
            <div class="countdown-item ${secondsClass}">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">secs</span>
            </div>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
