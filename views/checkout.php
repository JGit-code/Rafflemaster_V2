<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Raffle Master</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/root.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/modal.css">
    <link rel="stylesheet" href="../css/animations.css">
</head>
<body class="checkout-page">
    <?php include '../assets/includes/header.php'; ?>

    <main>
        <!-- Checkout Section -->
        <section class="checkout-section animate-on-scroll">
            <div class="container">
                <div class="checkout-grid">
                    <!-- Checkout Form -->
                    <div class="checkout-form">
                        <h1>Checkout</h1>
                        
                        <!-- Progress Bar -->
                        <div class="checkout-progress">
                            <div class="progress-step active">
                                <div class="step-number">1</div>
                                <div class="step-label">Customer Info</div>
                            </div>
                            <div class="progress-bar"></div>
                            <div class="progress-step">
                                <div class="step-number">2</div>
                                <div class="step-label">Payment</div>
                            </div>
                            <div class="progress-bar"></div>
                            <div class="progress-step">
                                <div class="step-number">3</div>
                                <div class="step-label">Confirmation</div>
                            </div>
                        </div>
                        
                        <form id="checkout-form">
                            <!-- Customer Information -->
                            <div class="form-section active" id="customer-info">
                                <h2>Customer Information</h2>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="first-name">First Name</label>
                                        <input type="text" id="first-name" name="first-name" required autocomplete="given-name">
                                    </div>
                                    <div class="form-group">
                                        <label for="last-name">Last Name</label>
                                        <input type="text" id="last-name" name="last-name" required autocomplete="family-name">
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" name="email" required autocomplete="email">
                                </div>
                                
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" required autocomplete="tel">
                                </div>
                                
                                <div class="form-actions">
                                    <button type="button" class="back-btn" id="back-to-cart">Back to Cart</button>
                                    <button type="button" class="next-btn" id="to-payment">Continue to Payment</button>
                                </div>
                            </div>
                            
                            <!-- Payment Information -->
                            <div class="form-section" id="payment-info">
                                <h2>Payment Information</h2>
                                
                                <div class="form-group">
                                    <label for="card-number">Card Number</label>
                                    <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required maxlength="19" autocomplete="cc-number">
                                </div>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="expiry-date">Expiry Date</label>
                                        <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required maxlength="5" autocomplete="cc-exp">
                                    </div>
                                    <div class="form-group">
                                        <label for="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="123" required maxlength="4" autocomplete="cc-csc">
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="card-name">Name on Card</label>
                                    <input type="text" id="card-name" name="card-name" required autocomplete="cc-name">
                                </div>
                                
                                <div class="payment-icons">
                                    <img src="../assets/img/icons/visa.svg" alt="Visa">
                                    <img src="../assets/img/icons/mastercard.svg" alt="Mastercard">
                                    <img src="../assets/img/icons/amex.svg" alt="American Express">
                                </div>
                                
                                <div class="form-actions">
                                    <button type="button" class="back-btn" id="back-to-customer">Back</button>
                                    <button type="button" class="next-btn" id="to-review">Review Order</button>
                                </div>
                            </div>
                            
                            <!-- Order Review -->
                            <div class="form-section" id="order-review">
                                <h2>Review Your Order</h2>
                                
                                <div class="review-info">
                                    <h3>Customer Information</h3>
                                    <p id="review-name"></p>
                                    <p id="review-email"></p>
                                    <p id="review-phone"></p>
                                </div>
                                
                                <div class="review-info">
                                    <h3>Payment Method</h3>
                                    <p id="review-payment"></p>
                                </div>
                                
                                <div class="review-items">
                                    <h3>Order Items</h3>
                                    <div id="review-items-list">
                                        <!-- Will be filled by JavaScript -->
                                    </div>
                                </div>
                                
                                <div class="form-actions">
                                    <button type="button" class="back-btn" id="back-to-payment">Back</button>
                                    <button type="submit" class="submit-btn">Complete Purchase</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <!-- Order Summary -->
                    <div class="order-summary animate-on-scroll">
                        <h2>Order Summary</h2>
                        <div id="cart-items">
                            <!-- Will be populated by JavaScript -->
                        </div>
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
                        <div class="secure-checkout">
                            <img src="../assets/img/icons/lock.svg" alt="Secure Checkout">
                            <p>Your data is encrypted and secure</p>
                        </div>
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
                        <p>Secure Payment</p>
                    </div>
                    <div class="badge">
                        <img src="../assets/img/icons/ticket.svg" alt="Instant Ticket Delivery">
                        <p>Instant Delivery</p>
                    </div>
                    <div class="badge">
                        <img src="../assets/img/icons/lock.svg" alt="SSL Encrypted">
                        <p>SSL Protected</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include '../assets/includes/footer.php'; ?>

    <script src="../js/main.js"></script>
    <script src="../js/modals.js"></script>
    <script src="../js/cart.js"></script>
</body>
</html>
