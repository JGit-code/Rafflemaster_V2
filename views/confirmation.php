<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - Raffle Master</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/root.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/modal.css">
    <link rel="stylesheet" href="../css/animations.css">
</head>
<body class="confirmation-page">
    <?php include '../assets/includes/header.php'; ?>
    
    <main>
        <!-- Confirmation Section -->
        <section class="confirmation-section animate-on-scroll">
            <div class="container">
                <div class="confirmation-box scale-up">
                    <div class="confirmation-icon">
                        <svg viewBox="0 0 24 24" width="48" height="48">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    
                    <h1>Order Confirmed!</h1>
                    <p class="confirmation-id">Order #RM-<?php echo rand(10000, 99999); ?></p>
                    
                    <p class="confirmation-message">
                        Thank you for your purchase! Your raffle tickets have been confirmed and an email with your receipt has been sent to your email address.
                    </p>
                    
                    <div class="confirmation-details">
                        <h2>Your Tickets</h2>
                        <div class="ticket-details">
                            <div class="ticket-row">
                                <span class="ticket-label">Raffle ID:</span>
                                <span class="ticket-value">RM-<?php echo rand(1000, 9999); ?>-TKT</span>
                            </div>
                            <div class="ticket-row">
                                <span class="ticket-label">Draw Date:</span>
                                <span class="ticket-value">April 20, 2025</span>
                            </div>
                            <div class="ticket-row">
                                <span class="ticket-label">Ticket Numbers:</span>
                                <span class="ticket-value">Will be emailed to you</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="confirmation-actions slide-up">
                        <a href="../index.php" class="cta-button">Continue Shopping</a>
                        <a href="winners.php" class="secondary-button">View Past Winners</a>
                    </div>
                </div>
                
                <div class="social-share animate-on-scroll">
                    <h3>Share Your Entry</h3>
                    <p>Let your friends know about your chance to win!</p>
                    
                    <div class="social-buttons">
                        <a href="#" class="social-btn facebook">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H8.9V12h1.5v-1.3c0-1.5.9-2.3 2.3-2.3.6 0 1.3.1 1.3.1v1.4h-.7c-.7 0-1 .4-1 .9V12h1.6l-.3 2.9h-1.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/>
                            </svg>
                            <span>Facebook</span>
                        </a>
                        <a href="#" class="social-btn twitter">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                            <span>Twitter</span>
                        </a>
                        <a href="#" class="social-btn email">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- What's Next Section -->
        <section class="whats-next animate-on-scroll">
            <div class="container">
                <h2>What's Next?</h2>
                
                <div class="steps-grid">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Check Your Email</h3>
                        <p>We've sent your ticket details and receipt to your email address. Please check your inbox (and spam folder).</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Mark the Date</h3>
                        <p>The draw date is shown in your confirmation email. Make sure to mark it in your calendar!</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Watch the Draw</h3>
                        <p>All draws are conducted live on our social media channels. Winners are also notified by email.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Recommended Raffles -->
        <section class="recommended-raffles animate-on-scroll">
            <div class="container">
                <h2>More Prizes to Win</h2>
                
                <div class="raffle-grid">
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
                    
                    <!-- Prize Card Component -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="tesla" data-category="cars">
                        <img src="../assets/img/tesla.jpg" alt="Tesla Model 3">
                        <div class="prize-meta">
                            <span class="prize-tickets">125 tickets left</span>
                        </div>
                        <h3>Tesla Model 3</h3>
                        <p class="price">£25 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-10T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 90%;"></div>
                            <span class="progress-text">90% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="tesla" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                    
                    <!-- Prize Card Component -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="gaming" data-category="tech">
                        <img src="../assets/img/playstation5.jpg" alt="PlayStation 5">
                        <div class="prize-meta">
                            <span class="prize-tickets">412 tickets left</span>
                        </div>
                        <h3>PlayStation 5 Bundle</h3>
                        <p class="price">£8 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-05T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 70%;"></div>
                            <span class="progress-text">70% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="gaming" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
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

    <script src="../js/main.js"></script>
    <script src="../js/modals.js"></script>
    <script src="../js/slider.js"></script>
    <script src="../js/cart.js"></script>
    
    <script>
        // Confetti effect on confirmation page
        document.addEventListener('DOMContentLoaded', function() {
            // Create confetti elements
            const confettiContainer = document.createElement('div');
            confettiContainer.className = 'confetti-container';
            document.body.appendChild(confettiContainer);
            
            // Create confetti pieces
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.animationDelay = `${Math.random() * 5}s`;
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confettiContainer.appendChild(confetti);
            }
            
            // Remove confetti after animation
            setTimeout(() => {
                confettiContainer.style.opacity = '0';
                setTimeout(() => {
                    confettiContainer.remove();
                }, 1000);
            }, 8000);
        });
    </script>
    
    <style>
        /* Confetti animation */
        .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
            transition: opacity 1s ease;
        }
        
        .confetti {
            position: absolute;
            top: -10px;
            width: 10px;
            height: 20px;
            background-color: #f00;
            opacity: 0.8;
            animation: confetti-fall 5s linear infinite, confetti-shake 3s ease-in-out infinite;
        }
        
        @keyframes confetti-fall {
            0% {
                top: -10px;
                transform: rotate(0deg);
            }
            100% {
                top: 100vh;
                transform: rotate(360deg);
            }
        }
        
        @keyframes confetti-shake {
            0%, 100% {
                transform: translateX(0);
            }
            25% {
                transform: translateX(100px);
            }
            50% {
                transform: translateX(-100px);
            }
            75% {
                transform: translateX(50px);
            }
        }
        
        /* Enhanced confirmation styles */
        .confirmation-box {
            background-color: #fff;
            border-radius: 16px;
            padding: 3rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            margin-bottom: 3rem;
        }
        
        .confirmation-icon {
            color: var(--success-color);
            margin-bottom: 1.5rem;
        }
        
        .confirmation-id {
            color: var(--text-muted);
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
        }
        
        .confirmation-details {
            margin: 2rem 0;
            text-align: left;
            background-color: var(--surface-color);
            padding: 1.5rem;
            border-radius: 8px;
        }
        
        .ticket-details {
            margin-top: 1rem;
        }
        
        .ticket-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border-color);
        }
        
        .ticket-row:last-child {
            border-bottom: none;
        }
        
        .social-share {
            margin-top: 2rem;
            text-align: center;
        }
        
        .social-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            color: #fff;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-btn.facebook {
            background-color: #3b5998;
        }
        
        .social-btn.twitter {
            background-color: #1da1f2;
        }
        
        .social-btn.email {
            background-color: #666;
        }
        
        .social-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
    </style>
</body>
</html>

