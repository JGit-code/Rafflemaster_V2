<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raffles - Raffle Master</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/root.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/prize-card.css">
    <link rel="stylesheet" href="../css/modal.css">
    <link rel="stylesheet" href="../css/raffles.css">
    <link rel="stylesheet" href="../css/animations.css">
</head>
<body>
    <?php include '../assets/includes/header.php'; ?>

    <main>
        <!-- Raffles Banner -->
        <section class="page-banner animate-on-scroll">
            <div class="container text-center">
                <h1>Current Raffles</h1>
                <p class="subtitle">Browse our selection of amazing prizes ready to be won!</p>
            </div>
        </section>
        
        <!-- Filter Section -->
        <section class="filter-section animate-on-scroll">
            <div class="container">
                <div class="filter-controls">
                    <div class="filter-group">
                        <label>Category:</label>
                        <div class="filter-options">
                            <button class="filter-btn active" data-category="all">All</button>
                            <button class="filter-btn" data-category="tech">Tech</button>
                            <button class="filter-btn" data-category="cars">Cars</button>
                            <button class="filter-btn" data-category="travel">Travel</button>
                            <button class="filter-btn" data-category="cash">Cash</button>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <label>Sort By:</label>
                        <select class="sort-select">
                            <option value="ending-soon">Ending Soon</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>
                </div>
                
                <div class="filter-info">
                    <p>Showing <span id="result-count">9</span> results</p>
                </div>
            </div>
        </section>
        
        <!-- Raffles Grid -->
        <section class="raffles-grid-section animate-on-scroll">
            <div class="container">
                <div class="raffle-grid">
                    <!-- iPhone 15 Pro Prize Card -->
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
                    
                    <!-- Tesla Model 3 Prize Card -->
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
                    
                    <!-- MacBook Pro Prize Card -->
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
                    
                    <!-- Holiday Prize Card -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="holiday" data-category="travel">
                        <img src="../assets/img/holiday1.jpg" alt="Luxury Holiday">
                        <div class="prize-meta">
                            <span class="prize-tickets">250 tickets left</span>
                        </div>
                        <h3>Luxury Holiday</h3>
                        <p class="price">£15 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-15T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 40%;"></div>
                            <span class="progress-text">40% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="holiday" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                    
                    <!-- Cash Prize Card -->
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
                    
                    <!-- Gaming Console Prize Card -->
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
                    
                    <!-- Gaming Laptop Prize Card -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="gaming-laptop" data-category="tech">
                        <img src="../assets/img/gaming-laptop.jpg" alt="Gaming Laptop">
                        <div class="prize-meta">
                            <span class="prize-tickets">328 tickets left</span>
                        </div>
                        <h3>Alienware Gaming Laptop</h3>
                        <p class="price">£15 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-20T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 50%;"></div>
                            <span class="progress-text">50% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="gaming-laptop" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                    
                    <!-- Designer Watch Prize Card -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="watch" data-category="luxury">
                        <img src="../assets/img/luxury-watch.jpg" alt="Luxury Watch">
                        <div class="prize-meta">
                            <span class="prize-tickets">180 tickets left</span>
                        </div>
                        <h3>Rolex Submariner</h3>
                        <p class="price">£20 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-06-10T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 35%;"></div>
                            <span class="progress-text">35% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="watch" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                    
                    <!-- Electric Scooter Prize Card -->
                    <div class="prize-card tilt animate-on-scroll" data-product-id="scooter" data-category="travel">
                        <img src="../assets/img/electric-scooter.jpg" alt="Electric Scooter">
                        <div class="prize-meta">
                            <span class="prize-tickets">422 tickets left</span>
                        </div>
                        <h3>Premium Electric Scooter</h3>
                        <p class="price">£5 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-25T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 25%;"></div>
                            <span class="progress-text">25% Sold</span>
                        </div>
                        <a href="#" class="cta-button" data-product="scooter" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Newsletter Section -->
        <section class="newsletter-section bg-surface animate-on-scroll">
            <div class="container text-center">
                <h2>Never Miss a Draw</h2>
                <p>Subscribe to our newsletter to get updates on new raffles and winners.</p>
                
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" required>
                    <button type="submit" class="cta-button">Subscribe</button>
                </form>
            </div>
        </section>
        
        <!-- How It Works Section -->
        <section class="how-it-works animate-on-scroll">
            <div class="container text-center">
                <h2>How It Works</h2>
                
                <div class="steps-grid">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Choose Your Prize</h3>
                        <p>Browse our selection of premium prizes. From the latest tech to luxury cars, we have something for everyone.</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Buy Your Tickets</h3>
                        <p>Select how many tickets you want to purchase. More tickets mean a higher chance of winning!</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Wait for the Draw</h3>
                        <p>Each raffle has a closing date. The draw happens either when all tickets are sold or when the timer ends.</p>
                    </div>
                </div>
                
                <a href="how-it-works.php" class="secondary-button">Learn More</a>
            </div>
        </section>
        
        <!-- Recent Winners Carousel -->
        <section class="recent-winners animate-on-scroll">
            <div class="container">
                <h2 class="text-center">Recent Winners</h2>
                
                <div class="winners-carousel">
                    <div class="winner-card">
                        <img src="../assets/img/winner1.jpg" alt="John D.">
                        <div class="winner-info">
                            <h3>John D. won Tesla Model S</h3>
                            <p>"I never thought I'd actually win! The Tesla is amazing and the whole process was so smooth."</p>
                        </div>
                    </div>
                    <div class="winner-card">
                        <img src="../assets/img/winner2.jpg" alt="Sarah M.">
                        <div class="winner-info">
                            <h3>Sarah M. won iPhone 15 Pro</h3>
                            <p>"Winning the iPhone 15 Pro made my year! Raffle Master is definitely legit, I recommend them to everyone."</p>
                        </div>
                    </div>
                    <div class="winner-card">
                        <img src="../assets/img/winner3.jpg" alt="David P.">
                        <div class="winner-info">
                            <h3>David P. won £25,000 Cash</h3>
                            <p>"When I got the call that I won the cash prize, I couldn't believe it. Thank you Raffle Master for changing my life!"</p>
                        </div>
                    </div>
                </div>
                
                <div class="text-center">
                    <a href="winners.php" class="secondary-button">View All Winners</a>
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
