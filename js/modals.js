// Handle modal functionality for Raffle Master

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modals
    initTicketModal();
    initProductDetailModal();
    initGlobalModalHandlers();
});

/**
 * Initialize ticket purchase modal
 */
function initTicketModal() {
    const ticketModal = document.getElementById('ticket-modal');
    if (!ticketModal) return;
    
    const modalClose = ticketModal.querySelector('.modal-close');
    const ticketButtons = ticketModal.querySelectorAll('.ticket-btn');
    const customTicketInput = document.getElementById('custom-ticket-amount');
    const ticketTotal = ticketModal.querySelector('.ticket-total');
    const addToCartBtn = ticketModal.querySelector('.add-to-cart-btn');
    
    // Modal open triggers
    const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModal = document.getElementById(trigger.dataset.target.replace('#', ''));
            if (targetModal) {
                openModal(targetModal);
                
                // Update product info in modal
                const productTitle = targetModal.querySelector('.modal-product-title');
                const productDesc = targetModal.querySelector('.modal-product-desc');
                
                if (productTitle && trigger.dataset.product) {
                    let productName = '';
                    let productPrice = 15; // Default price
                    let description = '';
                    
                    // Set product details based on data-product attribute
                    switch(trigger.dataset.product) {
                        case 'iphone15':
                            productName = 'iPhone 15 Pro';
                            productPrice = 10;
                            description = 'Win the latest Apple iPhone 15 Pro';
                            break;
                        case 'macbook':
                            productName = 'MacBook Pro';
                            productPrice = 20;
                            description = 'Win a brand new MacBook Pro';
                            break;
                        case 'gaming':
                            productName = 'PlayStation 5 Bundle';
                            productPrice = 12.50;
                            description = 'Win a PS5 console with games and accessories';
                            break;
                        case 'holiday-crypto':
                            productName = 'Luxury Holiday';
                            productPrice = 15;
                            description = 'Win a dream vacation for two';
                            break;
                        case 'home-makeover':
                            productName = 'Home Renovation Package';
                            productPrice = 25;
                            description = 'Transform your living space with this renovation package';
                            break;
                        case 'polo':
                            productName = 'VW Polo Car';
                            productPrice = 0.90;
                            description = 'Win a brand new VW Polo';
                            break;
                        default:
                            productName = 'Raffle Entry';
                            description = 'Enter to win amazing prizes';
                    }
                    
                    // Animated text change
                    if (productTitle.textContent !== productName) {
                        productTitle.classList.add('fade-out');
                        
                        setTimeout(() => {
                            productTitle.textContent = productName;
                            productTitle.classList.remove('fade-out');
                            productTitle.classList.add('fade-in');
                            
                            setTimeout(() => {
                                productTitle.classList.remove('fade-in');
                            }, 300);
                        }, 300);
                    } else {
                        productTitle.textContent = productName;
                    }
                    
                    if (productDesc) {
                        productDesc.textContent = description;
                    }
                    
                    // Update ticket price with animation
                    if (ticketTotal) {
                        const currentQuantity = parseInt(document.querySelector('.ticket-btn.active')?.dataset.quantity || 1);
                        
                        ticketTotal.classList.add('price-update');
                        setTimeout(() => {
                            ticketTotal.textContent = `R${(productPrice * currentQuantity).toFixed(2)}`;
                            ticketTotal.classList.remove('price-update');
                        }, 300);
                    }
                    
                    // Set product data for add to cart
                    if (addToCartBtn) {
                        addToCartBtn.dataset.product = trigger.dataset.product;
                        addToCartBtn.dataset.price = productPrice;
                        addToCartBtn.dataset.name = productName;
                    }
                }
            }
        });
    });
    
    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            closeModal(ticketModal);
        });
    }
    
    // Ticket quantity buttons
    if (ticketButtons.length > 0) {
        ticketButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                ticketButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update total price with animation
                if (ticketTotal && addToCartBtn) {
                    const quantity = parseInt(button.dataset.quantity);
                    const price = parseFloat(addToCartBtn.dataset.price || 15);
                    
                    ticketTotal.classList.add('price-update');
                    setTimeout(() => {
                        ticketTotal.textContent = `R${(price * quantity).toFixed(2)}`;
                        ticketTotal.classList.remove('price-update');
                    }, 300);
                }
            });
        });
        
        // Set first button as active by default
        ticketButtons[0].classList.add('active');
    }
    
    // Custom ticket input
    if (customTicketInput && ticketTotal && addToCartBtn) {
        customTicketInput.addEventListener('input', () => {
            // Remove active class from all buttons
            ticketButtons.forEach(btn => btn.classList.remove('active'));
            
            const quantity = parseInt(customTicketInput.value) || 1;
            const price = parseFloat(addToCartBtn.dataset.price || 15);
            
            // Limit input to sensible values
            if (quantity > 100) {
                customTicketInput.value = 100;
            } else if (quantity < 1) {
                customTicketInput.value = 1;
            }
            
            // Update price with animation
            ticketTotal.classList.add('price-update');
            setTimeout(() => {
                ticketTotal.textContent = `R${(price * quantity).toFixed(2)}`;
                ticketTotal.classList.remove('price-update');
            }, 300);
        });
    }
    
    // Add to cart functionality
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const productId = addToCartBtn.dataset.product || 'default';
            const productName = addToCartBtn.dataset.name || 'Raffle Entry';
            const price = parseFloat(addToCartBtn.dataset.price || 15);
            let quantity = 1;
            
            const activeButton = document.querySelector('.ticket-btn.active');
            if (activeButton) {
                quantity = parseInt(activeButton.dataset.quantity);
            } else if (customTicketInput && customTicketInput.value) {
                quantity = parseInt(customTicketInput.value) || 1;
            }
            
            // Get existing cart from localStorage
            const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
            
            // Check if product already exists in cart
            const existingItemIndex = cart.findIndex(item => 
                item.productId === productId
            );
            
            if (existingItemIndex !== -1) {
                // Update existing item quantity
                cart[existingItemIndex].quantity += quantity;
                cart[existingItemIndex].total = cart[existingItemIndex].price * cart[existingItemIndex].quantity;
            } else {
                // Add new item to cart
                cart.push({
                    productId: productId,
                    name: productName,
                    price: price,
                    quantity: quantity,
                    total: price * quantity,
                    timestamp: new Date().toISOString()
                });
            }
            
            // Save updated cart to localStorage
            localStorage.setItem('raffle-cart', JSON.stringify(cart));
            
            // Update cart count in header with animation
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                cartCount.textContent = cart.length;
                cartCount.classList.add('pulse');
                setTimeout(() => {
                    cartCount.classList.remove('pulse');
                }, 1000);
            }
            
            // Show success notification
            showCartNotification(productName, quantity);
            
            // Close modal
            closeModal(ticketModal);
        });
    }
}

/**
 * Initialize product detail modal
 */
function initProductDetailModal() {
    const productDetailModal = document.getElementById('product-detail-modal');
    if (!productDetailModal) return;
    
    const modalClose = productDetailModal.querySelector('.modal-close');
    
    // Product detail modal triggers
    const productTriggers = document.querySelectorAll('[data-product-id]');
    productTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') return; // Don't trigger if clicked on button
            
            e.preventDefault();
            openModal(productDetailModal);
            
            // In a real implementation, you would load product details from server here
            const productId = trigger.dataset.productId;
            const productCategory = trigger.dataset.category || 'tech';
            const productName = trigger.querySelector('h3')?.textContent || 'Product';
            
            const productContent = productDetailModal.querySelector('.product-modal-content');
            if (productContent) {
                productContent.innerHTML = `
                    <div class="product-loading">
                        <div class="spinner"></div>
                        <span>Loading product details...</span>
                    </div>
                `;
                
                // Simulate loading data
                setTimeout(() => {
                    productContent.innerHTML = `
                        <div class="product-modal-header">
                            <h2>${productName}</h2>
                            <span class="product-category">${productCategory}</span>
                        </div>
                        <div class="product-modal-body">
                            <div class="product-images">
                                <img src="${trigger.querySelector('img')?.src || ''}" alt="${productName}" class="product-main-image">
                                <div class="product-thumbnails">
                                    <img src="${trigger.querySelector('img')?.src || ''}" alt="${productName}" class="active">
                                    <img src="assets/img/product-angle1.jpg" alt="${productName} - Angle 1">
                                    <img src="assets/img/product-angle2.jpg" alt="${productName} - Angle 2">
                                </div>
                            </div>
                            <div class="product-info">
                                <p>This is a detailed description of the ${productName}. Enter this raffle for your chance to win!</p>
                                
                                <div class="product-features">
                                    <h3>Prize Details</h3>
                                    <ul>
                                        <li>Brand new ${productName}</li>
                                        <li>Full manufacturer warranty</li>
                                        <li>Delivered directly to your door</li>
                                        <li>Cash alternative available</li>
                                    </ul>
                                </div>
                                
                                <div class="product-meta">
                                    <div class="meta-item">
                                        <span class="meta-label">Ticket Price:</span>
                                        <span class="meta-value">${trigger.querySelector('.price')?.textContent || 'R10 per ticket'}</span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-label">Draw Date:</span>
                                        <span class="meta-value">April 20, 2025</span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-label">Tickets Remaining:</span>
                                        <span class="meta-value">${trigger.querySelector('.prize-tickets')?.textContent || '450 tickets left'}</span>
                                    </div>
                                </div>
                                
                                <div class="ticket-selector">
                                    <button class="ticket-btn" data-quantity="1">1</button>
                                    <button class="ticket-btn" data-quantity="5">5</button>
                                    <button class="ticket-btn" data-quantity="10">10</button>
                                    <button class="ticket-btn active" data-quantity="20">20</button>
                                    <button class="ticket-btn" data-quantity="50">50</button>
                                </div>
                                
                                <button class="cta-button add-to-cart-btn" data-product="${productId}">Buy Ticket</button>
                                
                                <div class="share-buttons">
                                    <p>Share this prize:</p>
                                    <div class="social-buttons">
                                        <a href="#" class="social-btn" aria-label="Share on Facebook">
                                            <svg viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H8.9V12h1.5v-1.3c0-1.5.9-2.3 2.3-2.3.6 0 1.3.1 1.3.1v1.4h-.7c-.7 0-1 .4-1 .9V12h1.6l-.3 2.9h-1.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/>
                                            </svg>
                                        </a>
                                        <a href="#" class="social-btn" aria-label="Share on Twitter">
                                            <svg viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                            </svg>
                                        </a>
                                        <a href="#" class="social-btn" aria-label="Share via Email">
                                            <svg viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    // Initialize thumbnail clicks
                    const thumbnails = productContent.querySelectorAll('.product-thumbnails img');
                    const mainImage = productContent.querySelector('.product-main-image');
                    
                    thumbnails.forEach(thumb => {
                        thumb.addEventListener('click', () => {
                            thumbnails.forEach(t => t.classList.remove('active'));
                            thumb.classList.add('active');
                            
                            if (mainImage) {
                                mainImage.classList.add('fade-out');
                                setTimeout(() => {
                                    mainImage.src = thumb.src;
                                    mainImage.classList.remove('fade-out');
                                    mainImage.classList.add('fade-in');
                                    
                                    setTimeout(() => {
                                        mainImage.classList.remove('fade-in');
                                    }, 300);
                                }, 300);
                            }
                        });
                    });
                    
                    // Initialize ticket buttons
                    const ticketBtns = productContent.querySelectorAll('.ticket-btn');
                    const addToCartBtn = productContent.querySelector('.add-to-cart-btn');
                    
                    ticketBtns.forEach(btn => {
                        btn.addEventListener('click', () => {
                            ticketBtns.forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                            
                            // Update button text with quantity
                            if (addToCartBtn) {
                                const quantity = btn.dataset.quantity;
                                const price = parseFloat(trigger.querySelector('.price')?.textContent.match(/\d+(\.\d+)?/)?.[0] || 10);
                                addToCartBtn.textContent = `Buy ${quantity} Ticket${quantity > 1 ? 's' : ''} for R${(price * quantity).toFixed(2)}`;
                            }
                        });
                    });
                    
                    // Initialize add to cart button
                    if (addToCartBtn) {
                        const activeBtn = productContent.querySelector('.ticket-btn.active');
                        const quantity = activeBtn?.dataset.quantity || 1;
                        const price = parseFloat(trigger.querySelector('.price')?.textContent.match(/\d+(\.\d+)?/)?.[0] || 10);
                        addToCartBtn.textContent = `Buy ${quantity} Ticket${quantity > 1 ? 's' : ''} for R${(price * quantity).toFixed(2)}`;
                        
                        addToCartBtn.addEventListener('click', () => {
                            const activeBtn = productContent.querySelector('.ticket-btn.active');
                            const quantity = parseInt(activeBtn?.dataset.quantity || 1);
                            const productId = trigger.dataset.productId;
                            const productName = trigger.querySelector('h3')?.textContent || 'Product';
                            const price = parseFloat(trigger.querySelector('.price')?.textContent.match(/\d+(\.\d+)?/)?.[0] || 10);
                            
                            // Get existing cart from localStorage
                            const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
                            
                            // Check if product already exists in cart
                            const existingItemIndex = cart.findIndex(item => 
                                item.productId === productId
                            );
                            
                            if (existingItemIndex !== -1) {
                                // Update existing item quantity
                                cart[existingItemIndex].quantity += quantity;
                                cart[existingItemIndex].total = cart[existingItemIndex].price * cart[existingItemIndex].quantity;
                            } else {
                                // Add new item to cart
                                cart.push({
                                    productId: productId,
                                    name: productName,
                                    price: price,
                                    quantity: quantity,
                                    total: price * quantity,
                                    timestamp: new Date().toISOString()
                                });
                            }
                            
                            // Save updated cart to localStorage
                            localStorage.setItem('raffle-cart', JSON.stringify(cart));
                            
                            // Update cart count in header with animation
                            const cartCount = document.querySelector('.cart-count');
                            if (cartCount) {
                                cartCount.textContent = cart.length;
                                cartCount.classList.add('pulse');
                                setTimeout(() => {
                                    cartCount.classList.remove('pulse');
                                }, 1000);
                            }
                            
                            // Show success notification
                            showCartNotification(productName, quantity);
                            
                            // Close modal
                            closeModal(productDetailModal);
                        });
                    }
                }, 800);
            }
        });
    });
    
    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            closeModal(productDetailModal);
        });
    }
}

/**
 * Initialize global modal handlers
 */
function initGlobalModalHandlers() {
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-container')) {
            closeModal(e.target);
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal-container.active');
            openModals.forEach(modal => closeModal(modal));
        }
    });
}

/**
 * Show cart notification
 */
function showCartNotification(productName, quantity) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.cart-notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'cart-notification';
        document.body.appendChild(notification);
    }
    
    // Set notification content
    notification.innerHTML = `
        <div class="notification-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        </div>
        <div class="notification-content">
            <h4>Added to Cart</h4>
            <p>${quantity} ticket${quantity > 1 ? 's' : ''} for ${productName}</p>
        </div>
        <a href="../views/cart.php" class="view-cart-link">View Cart</a>
        <button class="notification-close">&times;</button>
    `;
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('active');
        
        // Add close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.classList.remove('active');
                
                setTimeout(() => {
                    notification.remove();
                }, 300);
            });
        }
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('active');
            
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }, 100);
}

/**
 * Open modal with animation
 */
function openModal(modal) {
    if (!modal) return;
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    // Show modal with animation
    modal.classList.add('active');
    
    // Set focus to first focusable element for accessibility
    setTimeout(() => {
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }, 100);
    
    // Add aria attributes
    modal.setAttribute('aria-hidden', 'false');
    
    // Save last focused element to return focus when modal closes
    modal.lastFocusedElement = document.activeElement;
}

/**
 * Close modal with animation
 */
function closeModal(modal) {
    if (!modal) return;
    
    // Hide modal with animation
    modal.classList.remove('active');
    
    // Re-enable body scrolling after animation
    setTimeout(() => {
        // Only re-enable scrolling if no other modals are open
        const openModals = document.querySelectorAll('.modal-container.active');
        if (openModals.length === 0) {
            document.body.style.overflow = '';
        }
        
        // Update aria attributes
        modal.setAttribute('aria-hidden', 'true');
        
        // Return focus to element that opened the modal
        if (modal.lastFocusedElement) {
            modal.lastFocusedElement.focus();
        }
    }, 300);
}
