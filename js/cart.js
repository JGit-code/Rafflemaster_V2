/**
 * Shopping Cart functionality for Raffle Master
 * Handles cart operations, persistence, and display
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart display
    updateCartDisplay();
    
    // Initialize cart event listeners
    initCartListeners();
    
    // Update cart count in header
    updateCartCount();
});

/**
 * Initialize cart listeners
 */
function initCartListeners() {
    // Event delegation for cart item removal
    const cartContainer = document.querySelector('.cart-items');
    if (cartContainer) {
        cartContainer.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-item');
            if (removeBtn) {
                const cartItem = removeBtn.closest('.cart-item');
                const itemId = cartItem?.dataset.itemId;
                
                if (itemId) {
                    removeFromCart(itemId);
                    updateCartDisplay();
                    
                    // Show notification
                    showNotification('Item removed from cart', 'info');
                }
            }
        });
    }
    
    // Quantity update handlers
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const quantityInput = item.querySelector('.item-quantity');
        const decreaseBtn = item.querySelector('.quantity-decrease');
        const increaseBtn = item.querySelector('.quantity-increase');
        
        if (quantityInput) {
            // Update quantity when input changes
            quantityInput.addEventListener('change', () => {
                const itemId = item.dataset.itemId;
                const newQuantity = parseInt(quantityInput.value) || 1;
                
                updateCartItemQuantity(itemId, newQuantity);
                updateCartDisplay();
            });
        }
        
        // Decrease quantity button
        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => {
                const itemId = item.dataset.itemId;
                const currentQuantity = parseInt(quantityInput.value) || 1;
                const newQuantity = Math.max(1, currentQuantity - 1);
                
                quantityInput.value = newQuantity;
                updateCartItemQuantity(itemId, newQuantity);
                updateCartDisplay();
            });
        }
        
        // Increase quantity button
        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => {
                const itemId = item.dataset.itemId;
                const currentQuantity = parseInt(quantityInput.value) || 1;
                const newQuantity = currentQuantity + 1;
                
                quantityInput.value = newQuantity;
                updateCartItemQuantity(itemId, newQuantity);
                updateCartDisplay();
            });
        }
    });
    
    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-button');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // In a real application, this would redirect to checkout
            // For this demo, just show a notification
            showNotification('Proceeding to checkout...', 'success');
            
            // Optional: Clear cart after checkout
            // clearCart();
            // updateCartDisplay();
        });
    }
    
    // Clear cart button
    const clearCartBtn = document.querySelector('.clear-cart-button');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your cart?')) {
                clearCart();
                updateCartDisplay();
                showNotification('Cart cleared', 'info');
            }
        });
    }
}

/**
 * Update the cart display
 */
function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const cartActions = document.querySelector('.cart-actions');
    
    if (!cartContainer) return;
    
    // Get cart data
    const cart = getCart();
    
    // Show/hide empty cart message
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        if (cartActions) cartActions.style.display = 'none';
        cartContainer.innerHTML = '';
        return;
    } else {
        if (emptyCartMessage) emptyCartMessage.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'block';
        if (cartActions) cartActions.style.display = 'flex';
    }
    
    // Build cart item HTML
    let cartHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="item-image">
                    <img src="assets/img/${item.id}.jpg" alt="${item.id}" onerror="this.src='assets/img/placeholder.jpg'">
                </div>
                <div class="item-details">
                    <h3>${formatProductName(item.id)}</h3>
                    <p class="item-price">R${item.price.toFixed(2)} per ticket</p>
                    <div class="item-quantity-container">
                        <button class="quantity-decrease" aria-label="Decrease quantity">-</button>
                        <input type="number" class="item-quantity" value="${item.quantity}" min="1" max="100">
                        <button class="quantity-increase" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <div class="item-total">
                    <p>R${itemTotal.toFixed(2)}</p>
                    <button class="remove-item" aria-label="Remove item">&times;</button>
                </div>
            </div>
        `;
    });
    
    // Update cart container
    cartContainer.innerHTML = cartHTML;
    
    // Update summary values
    if (cartSummary) {
        const subtotalElement = cartSummary.querySelector('.subtotal-value');
        const taxElement = cartSummary.querySelector('.tax-value');
        const totalElement = cartSummary.querySelector('.total-value');
        
        // Calculate values
        const tax = subtotal * 0.15; // Assuming 15% tax
        const total = subtotal + tax;
        
        // Update display
        if (subtotalElement) subtotalElement.textContent = `R${subtotal.toFixed(2)}`;
        if (taxElement) taxElement.textContent = `R${tax.toFixed(2)}`;
        if (totalElement) totalElement.textContent = `R${total.toFixed(2)}`;
    }
    
    // Reinitialize cart listeners for new elements
    initCartListeners();
}

/**
 * Get cart data from localStorage
 * @returns {Array} Array of cart items
 */
function getCart() {
    return JSON.parse(localStorage.getItem('raffle-cart') || '[]');
}

/**
 * Save cart data to localStorage
 * @param {Array} cart - Array of cart items
 */
function saveCart(cart) {
    localStorage.setItem('raffle-cart', JSON.stringify(cart));
}

/**
 * Update cart count in header
 */
function updateCartCount() {
    const cart = getCart();
    const cartCountElement = document.querySelector('.cart-count');
    
    if (cartCountElement) {
        let itemCount = 0;
        
        // Count total items (sum of quantities)
        cart.forEach(item => {
            itemCount += item.quantity;
        });
        
        cartCountElement.textContent = itemCount;
        
        // Show/hide based on count
        if (itemCount > 0) {
            cartCountElement.classList.add('active');
        } else {
            cartCountElement.classList.remove('active');
        }
    }
}

/**
 * Remove item from cart
 * @param {string} itemId - The ID of the item to remove
 */
function removeFromCart(itemId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== itemId);
    saveCart(updatedCart);
    updateCartCount();
}

/**
 * Update cart item quantity
 * @param {string} itemId - The ID of the item to update
 * @param {number} quantity - The new quantity
 */
function updateCartItemQuantity(itemId, quantity) {
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        // Ensure quantity is valid
        cart[itemIndex].quantity = Math.max(1, Math.min(100, quantity));
        saveCart(cart);
        updateCartCount();
    }
}

/**
 * Clear entire cart
 */
function clearCart() {
    saveCart([]);
    updateCartCount();
}

/**
 * Format product name from ID
 * @param {string} productId - The product ID
 * @returns {string} Formatted product name
 */
function formatProductName(productId) {
    // Map of product IDs to display names
    const productNames = {
        'iphone15': 'iPhone 15 Pro',
        'macbook': 'MacBook Pro M3 Max',
        'holiday': 'Luxury Holiday Package',
        'gaming': 'PlayStation 5 Bundle',
        'home-makeover': 'Home Renovation Package',
        'polo': 'VW Polo Car'
    };
    
    // Return mapped name or capitalize the ID
    return productNames[productId] || 
        productId.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
} 