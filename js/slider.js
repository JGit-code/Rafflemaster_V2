/**
 * Slider functionality for Raffle Master
 * Handles hero slider and testimonial carousel
 */

document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    initHeroSlider();
    
    // Testimonial Carousel
    initTestimonialCarousel();
    
    // Winners Carousel
    initWinnersCarousel();
});

/**
 * Initialize Hero Slider with automatic and manual navigation
 */
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    if (!heroSlider) return;
    
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    let slideInterval;
    
    // Create dots based on number of slides
    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
            resetInterval();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
            resetInterval();
        });
    }
    
    // Touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    heroSlider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    heroSlider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left, go to next slide
            goToSlide(currentSlide + 1);
            resetInterval();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right, go to previous slide
            goToSlide(currentSlide - 1);
            resetInterval();
        }
    }
    
    // Auto-advance slides
    startInterval();
    
    // Add pause on hover
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        startInterval();
    });
    
    function goToSlide(index) {
        // Normalize index (loop back to start or end)
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // Hide all slides first
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.setAttribute('aria-hidden', 'true');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        slides[index].setAttribute('aria-hidden', 'false');
        
        // Update dots
        const dots = dotsContainer?.querySelectorAll('.slider-dot');
        if (dots) {
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                    dot.setAttribute('aria-current', 'true');
                } else {
                    dot.classList.remove('active');
                    dot.removeAttribute('aria-current');
                }
            });
        }
        
        currentSlide = index;
    }
    
    function startInterval() {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000); // Change slide every 5 seconds
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
}

/**
 * Initialize Testimonial Carousel
 */
function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.testimonial-slide');
    if (slides.length <= 1) return; // Don't initialize for single slide
    
    // Create navigation elements
    const nav = document.createElement('div');
    nav.className = 'carousel-nav';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-prev';
    prevBtn.innerHTML = '❮';
    prevBtn.setAttribute('aria-label', 'Previous testimonial');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-next';
    nextBtn.innerHTML = '❯';
    nextBtn.setAttribute('aria-label', 'Next testimonial');
    
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    carousel.parentNode.insertBefore(nav, carousel.nextSibling);
    
    let currentSlide = 0;
    
    // Initialize first slide
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
            slide.setAttribute('aria-hidden', 'false');
        } else {
            slide.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    function goToSlide(index) {
        // Normalize index (loop back to start or end)
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // Fade out current slide
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].setAttribute('aria-hidden', 'true');
        
        // Fade in new slide
        slides[index].classList.add('active');
        slides[index].setAttribute('aria-hidden', 'false');
        
        currentSlide = index;
    }
    
    // Auto-advance slides
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 7000); // Change testimonial every 7 seconds
}

/**
 * Initialize Winners Carousel
 */
function initWinnersCarousel() {
    const carousel = document.querySelector('.winners-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.winner-card');
    if (slides.length <= 1) return; // Don't initialize for single slide
    
    // Create navigation elements
    const nav = document.createElement('div');
    nav.className = 'carousel-nav winners-nav';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-prev';
    prevBtn.innerHTML = '❮';
    prevBtn.setAttribute('aria-label', 'Previous winner');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-next';
    nextBtn.innerHTML = '❯';
    nextBtn.setAttribute('aria-label', 'Next winner');
    
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    carousel.parentNode.insertBefore(nav, carousel.nextSibling);
    
    let currentSlide = 0;
    
    // Initialize first slide
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
            slide.setAttribute('aria-hidden', 'false');
        } else {
            slide.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    function goToSlide(index) {
        // Normalize index (loop back to start or end)
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // Fade out current slide
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].setAttribute('aria-hidden', 'true');
        
        // Fade in new slide
        slides[index].classList.add('active');
        slides[index].setAttribute('aria-hidden', 'false');
        
        currentSlide = index;
    }
    
    // Auto-advance slides
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 6000); // Change winner every 6 seconds
} 