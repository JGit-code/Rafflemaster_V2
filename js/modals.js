/**
 * Modal functionality for Raffle Master
 * Handles all modal interactions including:
 * - Ticket purchase modals
 * - Product detail modals
 * - Authentication modals
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modals
    initModals();
    
    // Initialize ticket selector functionality
    initTicketSelector();
    
    // Initialize product detail modal
    initProductDetailModal();
});

/**
 * Initialize modal functionality
 */
function initModals() {
    // Modal open buttons
    const modalOpenButtons = document.querySelectorAll('[data-toggle="modal"]');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const modalContainers = document.querySelectorAll('.modal-container');
    
    // Open modal when trigger is clicked
    modalOpenButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetModal = document.querySelector(button.dataset.target);
            if (targetModal) {
                openModal(targetModal, button);
            }
        });
    });
    
    // Close modal when close button is clicked
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalContainer = button.closest('.modal-container');
            if (modalContainer) {
                closeModal(modalContainer);
            }
        });
    });
    
    // Close modal when clicking outside modal content
    modalContainers.forEach(container => {
        container.addEventListener('click', (e) => {
            if (e.target === container) {
                closeModal(container);
            }
        });
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-container.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

/**
 * Open modal and handle specific modal logic
 * @param {HTMLElement} modalContainer - The modal container element
 * @param {HTMLElement} trigger - The element that triggered the modal
 */
function openModal(modalContainer, trigger) {
    // Get product info from trigger if available
    if (trigger.dataset.product && modalContainer.id === 'ticket-modal') {
        updateTicketModal(trigger.dataset.product);
    }
    
    // Add active class to show modal with animation
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Trap focus inside modal
    trapFocus(modalContainer);
    
    // Trigger custom event
    const event = new CustomEvent('modalOpened', {
        detail: { modalId: modalContainer.id }
    });
    document.dispatchEvent(event);
}

/**
 * Close modal
 * @param {HTMLElement} modalContainer - The modal container element
 */
function closeModal(modalContainer) {
    modalContainer.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
    
    // Trigger custom event
    const event = new CustomEvent('modalClosed', {
        detail: { modalId: modalContainer.id }
    });
    document.dispatchEvent(event);
}

/**
 * Trap focus inside modal for accessibility
 * @param {HTMLElement} modalContainer - The modal container element
 */
function trapFocus(modalContainer) {
    const focusableElements = modalContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        // Focus the first element
        setTimeout(() => { firstElement.focus(); }, 100);
        
        // Trap focus in a loop
        modalContainer.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }
}

/**
 * Initialize ticket selector functionality
 */
function initTicketSelector() {
    const ticketModal = document.getElementById('ticket-modal');
    if (!ticketModal) return;
    
    const ticketButtons = ticketModal.querySelectorAll('.ticket-btn');
    const customInput = ticketModal.querySelector('#custom-ticket-amount');
    const ticketTotal = ticketModal.querySelector('.ticket-total');
    const addToCartBtn = ticketModal.querySelector('.add-to-cart-btn');
    
    let currentProduct = null;
    let ticketPrice = 0;
    let selectedQuantity = 1;
    
    // Select ticket quantity
    ticketButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            ticketButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update selected quantity
            selectedQuantity = parseInt(button.dataset.quantity);
            
            // Update custom input to match
            if (customInput) {
                customInput.value = selectedQuantity;
            }
            
            // Update total price
            updateTotal();
        });
    });
    
    // Update total when custom quantity changes
    if (customInput) {
        customInput.addEventListener('input', () => {
            // Remove active class from all buttons
            ticketButtons.forEach(btn => btn.classList.remove('active'));
            
            // Get value and enforce min/max
            let value = parseInt(customInput.value) || 0;
            const min = parseInt(customInput.min) || 1;
            const max = parseInt(customInput.max) || 100;
            
            value = Math.max(min, Math.min(value, max));
            customInput.value = value;
            
            // Update selected quantity
            selectedQuantity = value;
            
            // Update total price
            updateTotal();
        });
    }
    
    // Add to cart button
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (currentProduct && selectedQuantity > 0) {
                // Add to cart
                addToCart(currentProduct, selectedQuantity, ticketPrice);
                
                // Close modal
                closeModal(ticketModal);
                
                // Show confirmation message
                showNotification('Tickets added to cart!', 'success');
            }
        });
    }
    
    // Update ticket modal content based on product
    window.updateTicketModal = function(productId) {
        currentProduct = productId;
        
        // Reset quantity to 1
        selectedQuantity = 1;
        ticketButtons.forEach(btn => btn.classList.remove('active'));
        if (ticketButtons.length > 0) ticketButtons[0].classList.add('active');
        if (customInput) customInput.value = 1;
        
        // Set product details (title, price, description)
        const productTitle = ticketModal.querySelector('.modal-product-title');
        const productDesc = ticketModal.querySelector('.modal-product-desc');
        
        // Fetch product details from data attributes or API
        let title = 'Select Tickets';
        let description = '';
        let price = 10; // Default price
        
        // Get price from trigger element if available
        const trigger = document.querySelector(`[data-product="${productId}"]`);
        if (trigger) {
            title = trigger.dataset.title || trigger.textContent || title;
            description = trigger.dataset.description || '';
            price = parseFloat(trigger.dataset.price) || price;
        }
        
        // Update modal content
        if (productTitle) productTitle.textContent = title;
        if (productDesc) productDesc.textContent = description;
        
        // Set ticket price
        ticketPrice = price;
        
        // Update total
        updateTotal();
    };
    
    // Update total price display
    function updateTotal() {
        if (ticketTotal) {
            const total = (ticketPrice * selectedQuantity).toFixed(2);
            ticketTotal.textContent = `R${total}`;
        }
    }
    
    // Add item to cart
    function addToCart(productId, quantity, price) {
        // Get current cart or initialize empty array
        let cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
        
        // Check if product already in cart
        const existingItemIndex = cart.findIndex(item => item.id === productId);
        
        if (existingItemIndex >= 0) {
            // Update existing item
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item
            cart.push({
                id: productId,
                quantity: quantity,
                price: price,
                timestamp: new Date().toISOString()
            });
        }
        
        // Save cart to localStorage
        localStorage.setItem('raffle-cart', JSON.stringify(cart));
        
        // Update cart count in header
        updateCartCount();
    }
}

/**
 * Initialize product detail modal
 */
function initProductDetailModal() {
    const productModal = document.getElementById('product-detail-modal');
    if (!productModal) return;
    
    // Product detail modal functionality
    document.addEventListener('click', (e) => {
        // Check if clicked element is a product detail link
        const productLink = e.target.closest('.prize-card a');
        
        if (productLink && !productLink.classList.contains('cta-button')) {
            e.preventDefault();
            
            const card = productLink.closest('.prize-card');
            if (card) {
                const productId = card.dataset.productId;
                if (productId) {
                    openProductDetail(productId);
                }
            }
        }
    });
    
    /**
     * Open product detail modal
     * @param {string} productId - The product ID to display
     */
    function openProductDetail(productId) {
        // Show loading state
        const modalContent = productModal.querySelector('.product-modal-content');
        if (modalContent) {
            modalContent.innerHTML = `
                <div class="product-modal-loading">
                    <div class="spinner"></div>
                    <span>Loading product details...</span>
                </div>
            `;
        }
        
        // Open modal
        openModal(productModal);
        
        // Fetch product details (in a real implementation, this would be an AJAX call)
        setTimeout(() => {
            // For demo purposes, we're simulating an API response
            const productDetails = getProductDetails(productId);
            
            // Update modal content
            if (modalContent && productDetails) {
                modalContent.innerHTML = `
                    <div class="product-detail">
                        <div class="product-images">
                            <div class="product-main-image">
                                <img src="${productDetails.image}" alt="${productDetails.title}">
                            </div>
                        </div>
                        <div class="product-info">
                            <h2>${productDetails.title}</h2>
                            <div class="product-meta">
                                <span class="product-id">ID: ${productId}</span>
                                <span class="product-status ${productDetails.status.toLowerCase()}">${productDetails.status}</span>
                            </div>
                            <div class="product-price">R${productDetails.price} per ticket</div>
                            <div class="product-description">${productDetails.description}</div>
                            
                            <div class="product-stats">
                                <div class="stat">
                                    <span class="stat-label">Entries</span>
                                    <span class="stat-value">${productDetails.entries}</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-label">Remaining</span>
                                    <span class="stat-value">${productDetails.remaining}</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-label">End Date</span>
                                    <span class="stat-value">${productDetails.endDate}</span>
                                </div>
                            </div>
                            
                            <div class="progress-bar-container">
                                <div class="progress-bar" style="width: ${productDetails.progressPercent}%;"></div>
                                <span class="progress-text">${productDetails.progressPercent}% Sold</span>
                            </div>
                            
                            <div class="product-cta">
                                <button class="cta-button add-to-cart-btn" data-product="${productId}" data-price="${productDetails.price}">Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                `;
                
                // Add event listener to Buy Tickets button
                const buyButton = modalContent.querySelector('.add-to-cart-btn');
                if (buyButton) {
                    buyButton.addEventListener('click', () => {
                        // Close product modal
                        closeModal(productModal);
                        
                        // Open ticket modal
                        const ticketModal = document.getElementById('ticket-modal');
                        if (ticketModal) {
                            openModal(ticketModal, buyButton);
                        }
                    });
                }
            }
        }, 500); // Simulate API delay
    }
    
    /**
     * Get product details (mock implementation)
     * @param {string} productId - The product ID
     * @returns {Object|null} - Product details or null if not found
     */
    function getProductDetails(productId) {
        // In a real application, this would fetch data from an API
        const products = {
            'iphone15': {
                title: 'iPhone 15 Pro',
                description: 'Win the latest iPhone 15 Pro with an incredible camera system, A17 Pro chip for exceptional performance, and stunning Super Retina XDR display. This flagship smartphone delivers unmatched performance in a beautiful titanium design.',
                price: 10,
                image: 'assets/img/iphone15.jpg',
                status: 'Active',
                entries: 4513,
                remaining: 487,
                endDate: 'April 20, 2025',
                progressPercent: 60
            },
            'macbook': {
                title: 'MacBook Pro M3 Max',
                description: 'Take your productivity to the next level with Apple\'s most powerful laptop featuring the groundbreaking M3 Max chip. Enjoy exceptional performance, stunning Liquid Retina XDR display, and all-day battery life in a sleek, premium design.',
                price: 20,
                image: 'assets/img/macbook-pro.jpg',
                status: 'Active',
                entries: 3658,
                remaining: 342,
                endDate: 'April 20, 2025',
                progressPercent: 80
            },
            'holiday': {
                title: 'Luxury Holiday Package',
                description: 'Win a dream vacation for two to a luxury destination of your choice. Package includes return flights, 7 nights in a 5-star resort, daily breakfast, and exclusive experiences. Create memories that will last a lifetime with this incredible prize.',
                price: 15,
                image: 'assets/img/holiday1.jpg',
                status: 'Active',
                entries: 750,
                remaining: 250,
                endDate: 'May 15, 2025',
                progressPercent: 40
            }
        };
        
        return products[productId] || null;
    }
}

/**
 * Show notification message
 * @param {string} message - The message to display
 * @param {string} type - The notification type (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    }
    
    // Auto remove after delay
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}
