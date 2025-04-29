<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raffle Master - Win Amazing Prizes</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/prize-card.css">
    <link rel="stylesheet" href="css/modal.css">
    <link rel="stylesheet" href="css/animations.css">
    <!-- Favicon -->
    <link rel="icon" href="assets/img/favicon.png" type="image/png">
    <!-- Removed non-existent animation.css and hero.css -->
</head>
<body>
    <?php include 'assets/includes/header.php'; ?>
    <main>
        <section class="hero-banner">
            <div class="hero-slider">
                <!-- Slide 1: Polo Car Giveaway -->
                <div class="hero-slide active" style="background-image: url('assets/img/polo-bg.jpg'); background-position: center center;">
                    <div class="slide-overlay"></div>
                    <!-- Text Content Area -->
                    <div class="hero-text-content"> 
                        <div class="dream-car-tag">DREAM CAR</div> 
                        <div class="hero-content">
                            <h1>DRIVE AWAY WITH A FREE £10K!</h1>
                            <p>This week only, £10,000 tax-free cash with 10 dream cars!</p>
                            <a href="#" class="enter-btn" data-product="polo" data-price="0.90" data-toggle="modal" data-target="#ticket-modal">ENTER TO WIN »</a>
                        </div>
                    </div>
                    <!-- Image Area -->
                    <div class="hero-image-area"> 
                        <div class="cars-container polo-container">
                            <img src="assets/img/red-sports-car.jpg" alt="Sports Car" class="hero-car polo-car">
                        </div>
                        <div class="hero-price-tag">
                            <span>TICKETS<br>FROM</span>
                            <strong>90P</strong>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: iPhone 15 Pro -->
                <div class="hero-slide" style="background-image: url('assets/img/tech-background.jpg');">
                    <div class="slide-overlay"></div>
                    <div class="hero-text-content">
                        <div class="dream-car-tag">TECH GIVEAWAY</div>
                        <div class="hero-content">
                            <h1>WIN THE LATEST iPHONE 15 PRO!</h1>
                            <p>Your chance to win Apple's flagship smartphone with incredible camera and performance!</p>
                            <a href="#" class="enter-btn" data-product="iphone15" data-price="10" data-toggle="modal" data-target="#ticket-modal">ENTER TO WIN »</a>
                        </div>
                    </div>
                    <div class="hero-image-area">
                        <div class="cars-container iphone-container">
                            <img src="assets/img/iphone15.jpg" alt="iPhone 15 Pro" class="hero-car iphone-car">
                        </div>
                        <div class="hero-price-tag">
                            <span>TICKETS<br>FROM</span>
                            <strong>R10</strong>
                        </div>
                    </div>
                </div>

                <!-- Slide 3: MacBook Pro -->
                <div class="hero-slide" style="background-image: url('assets/img/desk-background.jpg');">
                    <div class="slide-overlay"></div>
                    <div class="hero-text-content">
                        <div class="dream-car-tag">PRO GEAR</div>
                        <div class="hero-content">
                            <h1>MACBOOK PRO GIVEAWAY!</h1>
                            <p>Take your productivity to the next level with Apple's most powerful laptop!</p>
                            <a href="#" class="enter-btn" data-product="macbook" data-price="20" data-toggle="modal" data-target="#ticket-modal">ENTER NOW »</a>
                        </div>
                    </div>
                    <div class="hero-image-area">
                        <div class="cars-container macbook-container">
                            <img src="assets/img/macbook-pro.jpg" alt="MacBook Pro" class="hero-car macbook-car">
                        </div>
                        <div class="hero-price-tag">
                            <span>TICKETS<br>FROM</span>
                            <strong>R20</strong>
                        </div>
                    </div>
                </div>

                <!-- Slide 4: Holiday & Crypto -->
                <div class="hero-slide" style="background-image: url('assets/img/holiday1.jpg');">
                    <div class="slide-overlay"></div>
                    <div class="hero-text-content">
                        <div class="dream-car-tag">FAMILY TRIP</div>
                        <div class="hero-content">
                            <h1>LUXURY HOLIDAY</h1>
                            <p>Win a dream vacation for you and your family to a destination of your choice!</p>
                            <a href="#" class="enter-btn" data-product="holiday" data-price="15" data-toggle="modal" data-target="#ticket-modal">ENTER TO WIN »</a>
                        </div>
                    </div>
                    <div class="hero-image-area">
                        <div class="cars-container holiday-container">
                            <img src="assets/img/holiday1.jpg" alt="Luxury Holiday" class="hero-car holiday-image">
                        </div>
                        <div class="hero-price-tag">
                            <span>TICKETS<br>FROM</span>
                            <strong>R15</strong>
                        </div>
                    </div>
                </div>
                
                <!-- Slide 5: PlayStation 5 Bundle -->
                <div class="hero-slide" style="background-image: url('assets/img/gaming-background.jpg');">
                    <div class="slide-overlay"></div>
                    <div class="hero-text-content">
                        <div class="dream-car-tag">GAMING BUNDLE</div>
                        <div class="hero-content">
                            <h1>WIN A PS5 ULTIMATE BUNDLE!</h1>
                            <p>PlayStation 5 console, extra controller, headset, and 5 games of your choice!</p>
                            <a href="#" class="enter-btn" data-product="gaming" data-price="12.50" data-toggle="modal" data-target="#ticket-modal">ENTER TO WIN »</a>
                        </div>
                    </div>
                    <div class="hero-image-area">
                        <div class="cars-container gaming-container">
                            <img src="assets/img/playstation5.jpg" alt="PlayStation 5" class="hero-car ps5-car">
                        </div>
                        <div class="hero-price-tag">
                            <span>TICKETS<br>FROM</span>
                            <strong>R12.50</strong>
                        </div>
                    </div>
                </div>
                
                <!-- Slide 6: Home Renovation Package -->
                <div class="hero-slide" style="background-image: url('assets/img/home-background.jpg');">
                    <div class="slide-overlay"></div>
                    <div class="hero-text-content">
                        <div class="dream-car-tag">HOME MAKEOVER</div>
                        <div class="hero-content">
                            <h1>£25,000 HOME RENOVATION PACKAGE!</h1>
                            <p>Transform your living space with this incredible home makeover prize!</p>
                            <a href="#" class="enter-btn" data-product="home-makeover" data-price="25" data-toggle="modal" data-target="#ticket-modal">ENTER TO WIN »</a>
                        </div>
                    </div>
                    <div class="hero-image-area">
                        <div class="cars-container home-container">
                            <img src="assets/img/home-renovation.jpg" alt="Home Renovation" class="hero-car home-car">
                        </div>
                        <div class="hero-price-tag">
                            <span>TICKETS<br>FROM</span>
                            <strong>R25</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slider Navigation -->
            <div class="slider-nav">
                <button class="slider-prev" aria-label="Previous slide">❮</button>
                <div class="slider-dots"></div>
                <button class="slider-next" aria-label="Next slide">❯</button>
            </div>
        </section>

        <section class="explore-section animate-on-scroll">
            <div class="container">
                <h2>EXPLORE OUR COMPETITIONS</h2>
                <div class="stats-container">
                    <div class="stats-item">
                        <div class="stats-icon">🏆</div>
                        <div class="stats-content">
                            <div class="stats-title">Over 9.68 million</div>
                            <div class="stats-subtitle">winners</div>
                        </div>
                    </div>
                    <div class="stats-divider"></div>
                    <div class="stats-item">
                        <div class="stats-icon">🎁</div>
                        <div class="stats-content">
                            <div class="stats-title">Over £92.6 million</div>
                            <div class="stats-subtitle">in prizes won</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="live-raffles animate-on-scroll">
            <div class="container">
                <h2>Live Raffles</h2>
                <div class="raffle-grid">
                    <!-- iPhone 15 Prize Card -->
                    <div class="prize-card" data-product-id="iphone15" data-category="tech">
                        <div class="prize-card-inner">
                            <div class="prize-card-image">
                                <img src="assets/img/iphone15.jpg" alt="iPhone 15 Pro">
                                <div class="prize-meta">
                                    <span class="prize-tickets">487 tickets left</span>
                                </div>
                            </div>
                            <div class="prize-card-content">
                                <h3>iPhone 15 Pro</h3>
                                <p class="price">R10 per ticket</p>
                                <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z">Ends in: 364 days</div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar" style="width: 60%;"></div>
                                    <span class="progress-text">60% Sold</span>
                                </div>
                                <a href="#" class="cta-button" data-product="iphone15" data-price="10" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- MacBook Pro Prize Card -->
                    <div class="prize-card" data-product-id="macbook" data-category="tech">
                        <div class="prize-card-inner">
                            <div class="prize-card-image">
                                <img src="assets/img/macbook-pro.jpg" alt="MacBook Pro">
                                <div class="prize-meta">
                                    <span class="prize-tickets">342 tickets left</span>
                                </div>
                            </div>
                            <div class="prize-card-content">
                                <h3>MacBook Pro</h3>
                                <p class="price">R20 per ticket</p>
                                <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z">Ends in: 364 days</div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar" style="width: 80%;"></div>
                                    <span class="progress-text">80% Sold</span>
                                </div>
                                <a href="#" class="cta-button" data-product="macbook" data-price="20" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Holiday Prize Card -->
                    <div class="prize-card" data-product-id="holiday" data-category="travel">
                        <div class="prize-card-inner">
                            <div class="prize-card-image">
                                <img src="assets/img/holiday1.jpg" alt="Luxury Holiday">
                                <div class="prize-meta">
                                    <span class="prize-tickets">250 tickets left</span>
                                </div>
                            </div>
                            <div class="prize-card-content">
                                <h3>Luxury Holiday</h3>
                                <p class="price">R15 per ticket</p>
                                <div class="countdown-timer" data-end-time="2025-05-15T20:00:00Z">Ends in: 389 days</div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar" style="width: 40%;"></div>
                                    <span class="progress-text">40% Sold</span>
                                </div>
                                <a href="#" class="cta-button" data-product="holiday" data-price="15" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- PlayStation 5 Prize Card -->
                    <div class="prize-card" data-product-id="gaming" data-category="tech">
                        <div class="prize-card-inner">
                            <div class="prize-card-image">
                                <img src="assets/img/playstation5.jpg" alt="PlayStation 5 Bundle">
                                <div class="prize-meta">
                                    <span class="prize-tickets">412 tickets left</span>
                                </div>
                            </div>
                            <div class="prize-card-content">
                                <h3>PlayStation 5 Bundle</h3>
                                <p class="price">R12.50 per ticket</p>
                                <div class="countdown-timer" data-end-time="2025-06-10T20:00:00Z">Ends in: 415 days</div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar" style="width: 55%;"></div>
                                    <span class="progress-text">55% Sold</span>
                                </div>
                                <a href="#" class="cta-button" data-product="gaming" data-price="12.50" data-toggle="modal" data-target="#ticket-modal">Buy Ticket</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="trust-elements animate-on-scroll">
            <div class="container">
                <h2>Why Choose Us</h2>
                <div class="trust-grid">
                    <div class="trust-item">
                        <img src="assets/img/icons/security.svg" alt="Security Icon">
                        <h3>Secure Checkout</h3>
                        <p>All transactions are SSL encrypted and processed securely.</p>
                    </div>
                    <div class="trust-item">
                        <img src="assets/img/icons/ticket.svg" alt="Fair Draw Icon">
                        <h3>Fair Draws</h3>
                        <p>Random winners selected by verified algorithm and third-party verification.</p>
                    </div>
                    <div class="trust-item">
                        <img src="assets/img/icons/trophy.svg" alt="Winners Icon">
                        <h3>Real Winners</h3>
                        <p>See our gallery of past winners and testimonials from around the world.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials animate-on-scroll">
            <div class="container">
                <h2>Hear From Our Winners</h2>
                <div class="testimonial-carousel">
                    <div class="testimonial-slide">
                        <img src="assets/img/winner1.jpg" alt="John D.">
                        <blockquote>
                            "I never thought I'd actually win! The Tesla is amazing and the whole process was so smooth. From the moment I got the call to the delivery, everything was perfect."
                        </blockquote>
                        <cite>— John D., London</cite>
                    </div>
                    <div class="testimonial-slide">
                        <img src="assets/img/winner2.jpg" alt="Sarah M.">
                        <blockquote>
                            "Winning the iPhone 15 Pro made my year! Raffle Master is definitely legit, I recommend them to everyone who wants a chance at premium prizes."
                        </blockquote>
                        <cite>— Sarah M., Manchester</cite>
                    </div>
                    <div class="testimonial-slide">
                        <img src="assets/img/winner3.jpg" alt="David P.">
                        <blockquote>
                            "When I got the call that I won the cash prize, I couldn't believe it. Thank you Raffle Master for changing my life and making dreams come true!"
                        </blockquote>
                        <cite>— David P., Edinburgh</cite>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="newsletter-section animate-on-scroll">
            <div class="container">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for exclusive offers and new prize announcements</p>
                
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" required>
                    <button type="submit" class="cta-button">Subscribe</button>
                </form>
            </div>
        </section>
    </main>

    <?php include 'assets/includes/footer.php'; ?>

    <!-- Ticket Purchase Modal -->
    <div class="modal-container" id="ticket-modal">
        <div class="modal">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <h2 class="modal-product-title">Select Tickets</h2>
            <p class="modal-product-desc"></p>
            <div class="ticket-selector">
                <button class="ticket-btn active" data-quantity="1">1</button>
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

    <!-- JavaScript files -->
    <script src="js/main.js"></script>
    <script src="js/modals.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/cart.js"></script>
</body>
</html>

