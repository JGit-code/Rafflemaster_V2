<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Past Winners - Raffle Master</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/root.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="css/components/animation.css">
</head>
<body>
    <?php include '../assets/includes/header.php'; ?>

    <main>
        <!-- Winners Hero Section -->
        <section class="winners-hero">
            <div class="container text-center">
                <h1>Our Lucky Winners</h1>
                <p class="hero-subtitle">Real people, real prizes. See who's won with Raffle Master!</p>
            </div>
        </section>
        
        <!-- Winners Timeline -->
        <section class="winners-timeline">
            <div class="container">
                <div class="timeline fade-in-grid">
                    <!-- Winner Item -->
                    <div class="timeline-item">
                        <div class="timeline-date">April 2023</div>
                        <div class="timeline-content">
                            <div class="winner-card">
                                <img src="../assets/img/winner1.jpg" alt="John D.">
                                <div class="winner-info">
                                    <h3>John D. from London</h3>
                                    <h4>Tesla Model S</h4>
                                    <p>"I never thought I'd actually win! The Tesla is amazing and the whole process was so smooth."</p>
                                    <div class="ticket-number">Winning ticket: #45892</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Winner Item -->
                    <div class="timeline-item">
                        <div class="timeline-date">March 2023</div>
                        <div class="timeline-content">
                            <div class="winner-card">
                                <img src="../assets/img/winner2.jpg" alt="Sarah M.">
                                <div class="winner-info">
                                    <h3>Sarah M. from Manchester</h3>
                                    <h4>MacBook Pro 16"</h4>
                                    <p>"I've entered many raffles before but never won anything big. Raffle Master changed that! The MacBook is perfect for my design work."</p>
                                    <div class="ticket-number">Winning ticket: #12385</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Winner Item -->
                    <div class="timeline-item">
                        <div class="timeline-date">February 2023</div>
                        <div class="timeline-content">
                            <div class="winner-card">
                                <img src="../assets/img/winner3.jpg" alt="Mike T.">
                                <div class="winner-info">
                                    <h3>Mike T. from Birmingham</h3>
                                    <h4>PlayStation 5 Bundle</h4>
                                    <p>"The delivery was so fast! I got my prize within 3 days of the draw. My kids are over the moon with the PlayStation."</p>
                                    <div class="ticket-number">Winning ticket: #78340</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Add more winner items here -->
                    <div class="timeline-item">
                        <div class="timeline-date">January 2023</div>
                        <div class="timeline-content">
                            <div class="winner-card">
                                <img src="../assets/img/winner1.jpg" alt="Emma P.">
                                <div class="winner-info">
                                    <h3>Emma P. from Bristol</h3>
                                    <h4>iPhone 14 Pro</h4>
                                    <p>"I only bought one ticket! I couldn't believe my luck when I got the email saying I'd won."</p>
                                    <div class="ticket-number">Winning ticket: #23941</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Testimonial Video Section -->
        <section class="video-testimonials bg-surface">
            <div class="container text-center">
                <h2>Winner Stories</h2>
                <p>Watch our winners share their experiences</p>
                
                <div class="video-grid">
                    <!-- Video Testimonial -->
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <img src="../assets/img/winner1.jpg" alt="John's Tesla Win">
                            <div class="play-button"></div>
                        </div>
                        <h3>John's Tesla Win</h3>
                    </div>
                    
                    <!-- Video Testimonial -->
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <img src="../assets/img/winner2.jpg" alt="Sarah's MacBook Story">
                            <div class="play-button"></div>
                        </div>
                        <h3>Sarah's MacBook Story</h3>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- CTA Section -->
        <section class="cta-section text-center">
            <div class="container">
                <h2>You Could Be Next!</h2>
                <p>Enter our latest raffles for your chance to win amazing prizes.</p>
                <a href="../index.php" class="cta-button pulse-animation">Enter Now</a>
            </div>
        </section>
    </main>

    <?php include '../assets/includes/footer.php'; ?>

    <!-- Scripts -->
    <script src="../js/main.js"></script>
    <script src="../js/modals.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Video thumbnail click handlers
            const videoThumbnails = document.querySelectorAll('.video-thumbnail');
            
            videoThumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', () => {
                    // In a real implementation, this would open a modal with an embedded video
                    alert('Video would play in a modal here. This is a placeholder for the scaffold.');
                });
            });
            
            // Update cart count from localStorage
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
                cartCount.textContent = cart.length;
            }
        });
    </script>
</body>
</html>
