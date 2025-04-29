<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Cart - Raffle Master</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/root.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/modal.css">
    <link rel="stylesheet" href="../css/animations.css">
</head>
<body>
    <?php include '../assets/includes/header.php'; ?>
    <main>
        <!-- Cart Section -->
        <section class="cart-section animate-on-scroll">
            <div class="container">
                <h1>Your Raffle Tickets</h1>
                
                <div class="cart-content">
                    <!-- Empty Cart State -->
                    <div class="empty-cart" id="empty-cart">
                        <img src="../assets/img/icons/ticket.svg" alt="Empty Cart" class="empty-cart-icon">
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven't added any raffle tickets yet.</p>
                        <a href="../index.php" class="cta-button">Browse Raffles</a>
                    </div>
                    
                    <!-- Cart Items -->
                    <div class="cart-items" id="cart-items">
                        <!-- Cart items will be populated by JavaScript -->
                    </div>
                    
                    <!-- Cart Actions -->
                    <div class="cart-actions" id="cart-actions">
                        <button id="clear-cart" class="secondary-button">Clear Cart</button>
                        <a href="../index.php" class="text-button">Continue Shopping</a>
                    </div>
                    
                    <!-- Cart Summary -->
                    <div class="cart-summary" id="cart-summary">
                        <h3>Order Summary</h3>
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span id="cart-subtotal">£0</span>
                        </div>
                        <div class="summary-row">
                            <span>Processing Fee</span>
                            <span id="cart-fee">£0</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span id="cart-total">£0</span>
                        </div>
                        <a href="checkout.php" class="cta-button checkout-button" id="checkout-button">Proceed to Checkout</a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Trust Badges -->
        <section class="trust-badges bg-surface animate-on-scroll">
            <div class="container">
                <div class="badges-grid">
                    <div class="badge">
                        <img src="../assets/img/icons/security.svg" alt="Secure Checkout">
                        <p>Secure Checkout</p>
                    </div>
                    <div class="badge">
                        <img src="../assets/img/icons/ticket.svg" alt="Instant Ticket Delivery">
                        <p>Instant Delivery</p>
                    </div>
                    <div class="badge">
                        <img src="../assets/img/icons/security.svg" alt="SSL Encrypted">
                        <p>SSL Encrypted</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Cross-sell Section -->
        <section class="cross-sell animate-on-scroll">
            <div class="container">
                <h2>You Might Also Like</h2>
                <div class="raffle-grid">
                    <!-- Prize Card Component -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="macbook" data-category="tech">
                        <img src="../assets/img/macbook-pro.jpg" alt="MacBook Pro">
                        <div class="prize-meta">
                            <span class="prize-tickets">342 tickets left</span>
                        </div>
                        <h3>MacBook Pro</h3>
                        <p class="price">£20 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 80%;"></div>
                            <span class="progress-text">80% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="macbook" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                    
                    <!-- Prize Card Component -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="iphone15" data-category="tech">
                        <img src="../assets/img/iphone15.jpg" alt="iPhone 15 Pro">
                        <div class="prize-meta">
                            <span class="prize-tickets">487 tickets left</span>
                        </div>
                        <h3>iPhone 15 Pro</h3>
                        <p class="price">£10 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 60%;"></div>
                            <span class="progress-text">60% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="iphone15" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                    
                    <!-- Prize Card Component -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="cash" data-category="cash">
                        <img src="../assets/img/cash-stack.png" alt="£10,000 Cash">
                        <div class="prize-meta">
                            <span class="prize-tickets">750 tickets left</span>
                        </div>
                        <h3>£10,000 Cash</h3>
                        <p class="price">£5 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-06-01T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 30%;"></div>
                            <span class="progress-text">30% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="cash" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include '../assets/includes/footer.php'; ?>

    <!-- Ticket Purchase Modal -->
    <div class="modal-container" id="ticket-modal">
        <div class="modal">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <h2 class="modal-product-title">Select Tickets</h2>
            <p class="modal-product-desc"></p>
            <div class="ticket-selector">
                <button class="ticket-btn" data-quantity="1">1</button>
                <button class="ticket-btn" data-quantity="5">5</button>
                <button class="ticket-btn" data-quantity="10">10</button>
                <button class="ticket-btn" data-quantity="20">20</button>
                <button class="ticket-btn" data-quantity="50">50</button>
                <div class="custom-quantity">
                    <label for="custom-ticket-amount">Custom:</label>
                    <input type="number" id="custom-ticket-amount" min="1" max="100" value="1">
                </div>
            </div>
            <div class="ticket-summary">
                <p>Total: <span class="ticket-total">R15</span></p>
            </div>
            <button class="cta-button add-to-cart-btn">Add to Cart</button>
        </div>
    </div>

    <!-- Product Detail Modal -->
    <div class="modal-container" id="product-detail-modal">
        <div class="modal product-modal">
            <button class="modal-close" id="product-modal-close" aria-label="Close modal">&times;</button>
            
            <div class="product-modal-content">
                <!-- Product details will be dynamically loaded here -->
                <div class="product-modal-loading">
                    <div class="spinner"></div>
                    <span>Loading product details...</span>
                </div>
            </div>
        </div>
    </div>

    <script src="../js/main.js"></script>
    <script src="../js/modals.js"></script>
    <script src="../js/slider.js"></script>
    <script src="../js/cart.js"></script>
</body>
</html>
