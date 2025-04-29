/**
 * Cart functionality for Raffle Master
 * Handles cart page, checkout process, and cart operations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart page
    initCartPage();
    
    // Initialize checkout page
    initCheckoutPage();
});

/**
 * Initialize cart page functionality
 */
function initCartPage() {
    // Get cart elements
    const emptyCartEl = document.getElementById('empty-cart');
    const cartItemsEl = document.getElementById('cart-items');
    const cartSummaryEl = document.getElementById('cart-summary');
    const subtotalEl = document.getElementById('cart-subtotal');
    const feeEl = document.getElementById('cart-fee');
    const totalEl = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    
    // Exit if not on cart page
    if (!emptyCartEl || !cartItemsEl) return;
    
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
    
    // Update cart count
    updateCartCount();
    
    // If cart is empty, show empty state
    if (cart.length === 0) {
        emptyCartEl.style.display = 'flex';
        cartItemsEl.style.display = 'none';
        if (cartSummaryEl) cartSummaryEl.style.display = 'none';
        if (checkoutButton) checkoutButton.style.display = 'none';
        return;
    }
    
    // Otherwise, hide empty state and show cart
    emptyCartEl.style.display = 'none';
    cartItemsEl.style.display = 'block';
    if (cartSummaryEl) cartSummaryEl.style.display = 'block';
    
    // Populate cart items
    let subtotal = 0;
    
    // Sort cart by most recently added
    cart.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
    
    cart.forEach((item, index) => {
        const itemTotal = item.quantity * item.price;
        subtotal += itemTotal;
        
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item animate-on-scroll';
        cartItemEl.style.animationDelay = `${index * 0.1}s`;
        
        cartItemEl.innerHTML = `
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.quantity} ticket${item.quantity > 1 ? 's' : ''} @ R${item.price.toFixed(2)} each</p>
                <div class="item-actions">
                    <button class="quantity-btn quantity-decrease" data-index="${index}">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="quantity-btn quantity-increase" data-index="${index}">+</button>
                </div>
            </div>
            <div class="item-price">R${itemTotal.toFixed(2)}</div>
            <button class="remove-item" data-index="${index}" aria-label="Remove item">&times;</button>
        `;
        
        cartItemsEl.appendChild(cartItemEl);
        
        // Add animation class
        setTimeout(() => {
            cartItemEl.classList.add('animated');
        }, 10);
    });
    
    // Calculate fees and total
    const fee = Math.max(1, Math.round(subtotal * 0.05 * 100) / 100); // 5% processing fee, minimum R1
    const total = subtotal + fee;
    
    // Update summary
    if (subtotalEl) subtotalEl.textContent = `R${subtotal.toFixed(2)}`;
    if (feeEl) feeEl.textContent = `R${fee.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `R${total.toFixed(2)}`;
    
    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index);
            
            // Animate item removal
            const cartItem = button.closest('.cart-item');
            cartItem.classList.add('removing');
            
            setTimeout(() => {
                // Remove item from cart
                cart.splice(index, 1);
                
                // Update localStorage
                localStorage.setItem('raffle-cart', JSON.stringify(cart));
                
                // Reload page to reflect changes
                window.location.reload();
            }, 300);
        });
    });
    
    // Add event listeners to quantity buttons
    const decreaseButtons = document.querySelectorAll('.quantity-decrease');
    const increaseButtons = document.querySelectorAll('.quantity-increase');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index);
            const quantityEl = button.parentNode.querySelector('.item-quantity');
            
            // Decrease quantity (minimum 1)
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                cart[index].total = cart[index].quantity * cart[index].price;
                
                // Update display
                quantityEl.textContent = cart[index].quantity;
                
                // Update item total
                const itemTotalEl = button.closest('.cart-item').querySelector('.item-price');
                itemTotalEl.textContent = `R${cart[index].total.toFixed(2)}`;
                
                // Update localStorage
                localStorage.setItem('raffle-cart', JSON.stringify(cart));
                
                // Update summary totals
                updateCartTotals();
            }
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index);
            const quantityEl = button.parentNode.querySelector('.item-quantity');
            
            // Increase quantity (maximum 100)
            if (cart[index].quantity < 100) {
                cart[index].quantity++;
                cart[index].total = cart[index].quantity * cart[index].price;
                
                // Update display
                quantityEl.textContent = cart[index].quantity;
                
                // Update item total
                const itemTotalEl = button.closest('.cart-item').querySelector('.item-price');
                itemTotalEl.textContent = `R${cart[index].total.toFixed(2)}`;
                
                // Update localStorage
                localStorage.setItem('raffle-cart', JSON.stringify(cart));
                
                // Update summary totals
                updateCartTotals();
            }
        });
    });
    
    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your cart?')) {
                localStorage.removeItem('raffle-cart');
                window.location.reload();
            }
        });
    }
    
    /**
     * Update cart totals
     */
    function updateCartTotals() {
        let newSubtotal = 0;
        
        cart.forEach(item => {
            newSubtotal += item.quantity * item.price;
        });
        
        const newFee = Math.max(1, Math.round(newSubtotal * 0.05 * 100) / 100);
        const newTotal = newSubtotal + newFee;
        
        // Update summary with animation
        if (subtotalEl) {
            subtotalEl.classList.add('price-update');
            setTimeout(() => {
                subtotalEl.textContent = `R${newSubtotal.toFixed(2)}`;
                subtotalEl.classList.remove('price-update');
            }, 300);
        }
        
        if (feeEl) {
            feeEl.classList.add('price-update');
            setTimeout(() => {
                feeEl.textContent = `R${newFee.toFixed(2)}`;
                feeEl.classList.remove('price-update');
            }, 300);
        }
        
        if (totalEl) {
            totalEl.classList.add('price-update');
            setTimeout(() => {
                totalEl.textContent = `R${newTotal.toFixed(2)}`;
                totalEl.classList.remove('price-update');
            }, 300);
        }
    }
}

/**
 * Initialize checkout page functionality
 */
function initCheckoutPage() {
    // Get form sections
    const customerSection = document.getElementById('customer-info');
    const paymentSection = document.getElementById('payment-info');
    const reviewSection = document.getElementById('order-review');
    
    // Exit if not on checkout page
    if (!customerSection) return;
    
    // Get buttons
    const backToCartBtn = document.getElementById('back-to-cart');
    const toPaymentBtn = document.getElementById('to-payment');
    const backToCustomerBtn = document.getElementById('back-to-customer');
    const toReviewBtn = document.getElementById('to-review');
    const backToPaymentBtn = document.getElementById('back-to-payment');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Get progress steps
    const progressSteps = document.querySelectorAll('.progress-step');
    
    // Get cart elements
    const cartItemsEl = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');
    const feeEl = document.getElementById('cart-fee');
    const totalEl = document.getElementById('cart-total');
    const reviewItemsList = document.getElementById('review-items-list');
    
    // Event listeners for buttons
    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', () => {
            window.location.href = 'cart.php';
        });
    }
    
    if (toPaymentBtn) {
        toPaymentBtn.addEventListener('click', () => {
            // Validate customer info form
            const firstName = document.getElementById('first-name');
            const lastName = document.getElementById('last-name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            
            let valid = true;
            const fields = [firstName, lastName, email, phone];
            
            fields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    valid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Validate email format
            if (email.value.trim() && !isValidEmail(email.value)) {
                email.classList.add('error');
                valid = false;
            }
            
            if (!valid) {
                showFormError('Please fill in all required fields correctly.');
                return;
            }
            
            // Proceed to payment section
            customerSection.classList.remove('active');
            paymentSection.classList.add('active');
            progressSteps[1].classList.add('active');
            
            // Scroll to top of form
            document.querySelector('.checkout-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    if (backToCustomerBtn) {
        backToCustomerBtn.addEventListener('click', () => {
            paymentSection.classList.remove('active');
            customerSection.classList.add('active');
            progressSteps[1].classList.remove('active');
        });
    }
    
    if (toReviewBtn) {
        toReviewBtn.addEventListener('click', () => {
            // Validate payment info form
            const cardNumber = document.getElementById('card-number');
            const expiryDate = document.getElementById('expiry-date');
            const cvv = document.getElementById('cvv');
            const cardName = document.getElementById('card-name');
            
            let valid = true;
            const fields = [cardNumber, expiryDate, cvv, cardName];
            
            fields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    valid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Basic format validation
            if (cardNumber.value.trim() && (cardNumber.value.length < 13 || cardNumber.value.length > 19)) {
                cardNumber.classList.add('error');
                valid = false;
            }
            
            if (expiryDate.value.trim() && !isValidExpiryDate(expiryDate.value)) {
                expiryDate.classList.add('error');
                valid = false;
            }
            
            if (cvv.value.trim() && (cvv.value.length < 3 || cvv.value.length > 4)) {
                cvv.classList.add('error');
                valid = false;
            }
            
            if (!valid) {
                showFormError('Please fill in all payment details correctly.');
                return;
            }
            
            // Populate review information
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const cardNumberValue = cardNumber.value;
            
            document.getElementById('review-name').textContent = `${firstName} ${lastName}`;
            document.getElementById('review-email').textContent = email;
            document.getElementById('review-phone').textContent = phone;
            document.getElementById('review-payment').textContent = `Credit Card ending in ${cardNumberValue.slice(-4)}`;
            
            // Populate review items
            if (reviewItemsList) {
                const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
                let reviewItemsHTML = '';
                
                cart.forEach(item => {
                    reviewItemsHTML += `
                        <div class="review-item">
                            <div class="item-name">${item.name} (${item.quantity} ticket${item.quantity > 1 ? 's' : ''})</div>
                            <div class="item-price">R${(item.quantity * item.price).toFixed(2)}</div>
                        </div>
                    `;
                });
                
                reviewItemsList.innerHTML = reviewItemsHTML;
            }
            
            // Go to review section
            paymentSection.classList.remove('active');
            reviewSection.classList.add('active');
            progressSteps[2].classList.add('active');
            
            // Scroll to top of form
            document.querySelector('.checkout-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    if (backToPaymentBtn) {
        backToPaymentBtn.addEventListener('click', () => {
            reviewSection.classList.remove('active');
            paymentSection.classList.add('active');
            progressSteps[2].classList.remove('active');
        });
    }
    
    // Form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
            }
            
            // In a real implementation, you would send the form data to your server here
            // For this demo, we'll just simulate processing and redirect to confirmation
            setTimeout(() => {
                // Clear the cart
                localStorage.removeItem('raffle-cart');
                
                // Redirect to confirmation page
                window.location.href = 'confirmation.php';
            }, 2000);
        });
    }
    
    // Format credit card number with spaces
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', (e) => {
            // Remove any non-digit characters
            let value = e.target.value.replace(/\D/g, '');
            
            // Add spaces every 4 digits
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            
            // Update input value
            e.target.value = value;
        });
    }
    
    // Format expiry date as MM/YY
    const expiryInput = document.getElementById('expiry-date');
    if (expiryInput) {
        expiryInput.addEventListener('input', (e) => {
            // Remove any non-digit characters
            let value = e.target.value.replace(/\D/g, '');
            
            // Add slash after 2 digits
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            
            // Update input value
            e.target.value = value;
        });
    }
    
    // Populate cart summary
    if (cartItemsEl && subtotalEl && feeEl && totalEl) {
        const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
        
        // If cart is empty, redirect to cart page
        if (cart.length === 0) {
            window.location.href = 'cart.php';
            return;
        }
        
        let subtotal = 0;
        let cartItemsHTML = '';
        
        cart.forEach(item => {
            subtotal += item.quantity * item.price;
            
            cartItemsHTML += `
                <div class="summary-item">
                    <div class="item-name">${item.name} (${item.quantity})</div>
                    <div class="item-price">R${(item.quantity * item.price).toFixed(2)}</div>
                </div>
            `;
        });
        
        cartItemsEl.innerHTML = cartItemsHTML;
        
        // Calculate fees and total
        const fee = Math.max(1, Math.round(subtotal * 0.05 * 100) / 100);
        const total = subtotal + fee;
        
        // Update summary
        subtotalEl.textContent = `R${subtotal.toFixed(2)}`;
        feeEl.textContent = `R${fee.toFixed(2)}`;
        totalEl.textContent = `R${total.toFixed(2)}`;
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
    }
}

/**
 * Show form error message
 */
function showFormError(message) {
    // Check if error message already exists
    let errorEl = document.querySelector('.form-error');
    
    if (!errorEl) {
        // Create error element
        errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        
        // Insert at top of active form section
        const activeSection = document.querySelector('.form-section.active');
        if (activeSection) {
            activeSection.insertBefore(errorEl, activeSection.firstChild);
        }
    }
    
    // Set message
    errorEl.textContent = message;
    
    // Add animation
    errorEl.classList.add('shake');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        errorEl.classList.remove('shake');
    }, 500);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        errorEl.classList.add('fade-out');
        
        setTimeout(() => {
            errorEl.remove();
        }, 300);
    }, 5000);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Validate expiry date format (MM/YY)
 */
function isValidExpiryDate(expiry) {
    // Check format
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        return false;
    }
    
    // Extract month and year
    const [month, year] = expiry.split('/');
    const currentYear = new Date().getFullYear() % 100; // Get last 2 digits of year
    const currentMonth = new Date().getMonth() + 1; // 1-12
    
    // Convert to numbers
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    
    // Check month is 1-12
    if (monthNum < 1 || monthNum > 12) {
        return false;
    }
    
    // Check date is not in the past
    if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
        return false;
    }
    
    return true;
} 