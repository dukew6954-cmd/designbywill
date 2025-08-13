// Website by Will - Enhanced JavaScript

console.log('🚀 Script.js loaded successfully!');

// Global Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Portfolio Data (Global Scope)
const portfolioData = [
    {
        title: "Johnson & Associates",
        description: "Professional law firm specializing in personal injury and family law. Clean, trustworthy design with case results showcase.",
        category: "Multi-Page",
        industry: "Legal",
        type: "Multi-Page",
        timeline: "14 days",
        price: "$999",
        results: "200%",
        url: "johnson-associates.com",
        demoUrl: "https://johnson-associates-demo.netlify.app",
        videoUrl: "",
        hasVideo: false,
        features: [
            "Attorney Profiles",
            "Case Results Showcase",
            "Consultation Booking",
            "Legal Blog",
            "Client Testimonials",
            "Practice Areas"
        ]
    },
    {
        title: "Bella Vista Italian",
        description: "Authentic Italian restaurant with online menu, reservation system, and food photography showcase.",
        category: "One-Page",
        industry: "Restaurant",
        type: "One-Page",
        timeline: "4 days",
        price: "FREE",
        results: "180%",
        url: "bellavista-italian.com",
        demoUrl: "https://bella-vista-demo.netlify.app",
        videoUrl: "https://res.cloudinary.com/dlwya5w5h/video/upload/v1755098014/Video-Display_Intialian_egq6cy.mp4",
        hasVideo: true,
        features: [
            "Online Menu",
            "Reservation System",
            "Food Gallery",
            "Location & Hours",
            "Contact Forms",
            "Social Media Integration"
        ]
    },
    {
        title: "Bright Smile Dental",
        description: "Family dental practice with comprehensive service pages, patient portal, and appointment scheduling system.",
        category: "Multi-Page",
        industry: "Healthcare",
        type: "Multi-Page",
        timeline: "10 days",
        price: "$699",
        results: "150%",
        url: "brightsmile-dental.com",
        demoUrl: "https://bright-smile-demo.netlify.app",
        videoUrl: "https://res.cloudinary.com/dlwya5w5h/video/upload/v1755116105/Recording_2025-08-13_131430_dlqear.mp4",
        hasVideo: true,
        features: [
            "Service Pages",
            "Patient Portal",
            "Online Booking",
            "Insurance Information",
            "Patient Forms",
            "Emergency Contact"
        ]
    },
    {
        title: "Premier Properties",
        description: "High-end real estate agency with property search, virtual tours, and agent showcase pages.",
        category: "Multi-Page",
        industry: "Real Estate",
        type: "Multi-Page",
        timeline: "16 days",
        price: "$999",
        results: "250%",
        url: "premier-properties.com",
        demoUrl: "https://premier-properties-demo.netlify.app",
        videoUrl: "",
        hasVideo: false,
        features: [
            "Property Search",
            "Virtual Tours",
            "Agent Profiles",
            "Mortgage Calculator",
            "Market Reports",
            "Contact Forms"
        ]
    },
    {
        title: "Elite Fitness Studio",
        description: "Modern fitness studio with class scheduling, trainer profiles, and online membership registration.",
        category: "One-Page",
        industry: "Fitness",
        type: "One-Page",
        timeline: "7 days",
        price: "$399",
        results: "120%",
        url: "elite-fitness.com",
        demoUrl: "https://elite-fitness-demo.netlify.app",
        videoUrl: "",
        hasVideo: false,
        features: [
            "Class Schedule",
            "Trainer Profiles",
            "Membership Signup",
            "Workout Videos",
            "Nutrition Tips",
            "Progress Tracking"
        ]
    },
    {
        title: "Urban Threads Co.",
        description: "Modern fashion e-commerce platform with advanced filtering, mobile-first design, and secure checkout.",
        category: "E-Commerce",
        industry: "Fashion",
        type: "E-Commerce",
        timeline: "20 days",
        price: "$1,499",
        results: "300%",
        url: "urban-threads.com",
        demoUrl: "https://urban-threads-demo.netlify.app",
        videoUrl: "",
        hasVideo: false,
        features: [
            "Product Catalog",
            "Advanced Filtering",
            "Shopping Cart",
            "Secure Checkout",
            "Order Tracking",
            "Customer Reviews"
        ]
    }
];

// Analytics Tracking
function trackEvent(eventName, properties = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, properties);
    }
    
    // Console logging for development
    console.log('Event tracked:', eventName, properties);
}

// Portfolio Modal Functions (Global Scope)
function openPortfolioModal(index) {
    const modal = document.getElementById('portfolio-modal');
    const modalContent = document.getElementById('modal-content');
    const project = portfolioData[index];
    
    if (!project) return;
    
    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-industry').textContent = project.industry;
    document.getElementById('modal-type').textContent = project.type;
    document.getElementById('modal-timeline').textContent = project.timeline;
    document.getElementById('modal-price').textContent = project.price;
    document.getElementById('modal-results').textContent = project.results;
    document.getElementById('modal-url').textContent = project.url;
    
    // Handle video functionality
    const videoToggleBtn = document.getElementById('video-toggle-btn');
    const videoBtnText = document.getElementById('video-btn-text');
    const modalVideo = document.getElementById('modal-video');
    const modalScreenshotPlaceholder = document.getElementById('modal-screenshot-placeholder');
    const videoIframe = document.getElementById('video-iframe');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    
    if (project.hasVideo && project.videoUrl) {
        // Show video toggle button
        videoToggleBtn.classList.remove('hidden');
        videoBtnText.textContent = 'Show Screenshot';
        
        // Auto-play video for any project with video
        modalVideo.classList.remove('hidden');
        modalScreenshotPlaceholder.classList.add('hidden');
        
        // Load and play video
        if (project.videoUrl.includes('youtube.com')) {
            // YouTube - use iframe
            videoIframe.style.display = 'block';
            videoPlayer.style.display = 'none';
            const videoId = project.videoUrl.split('v=')[1]?.split('&')[0];
            if (videoId) {
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            }
        } else if (project.videoUrl.includes('vimeo.com')) {
            // Vimeo - use iframe
            videoIframe.style.display = 'block';
            videoPlayer.style.display = 'none';
            const videoId = project.videoUrl.split('vimeo.com/')[1]?.split('?')[0];
            if (videoId) {
                videoIframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
            }
        } else if (project.videoUrl.includes('player.cloudinary.com')) {
            // Cloudinary embed player - use iframe
            videoIframe.style.display = 'block';
            videoPlayer.style.display = 'none';
            videoIframe.src = project.videoUrl;
        } else {
            // Direct video URL - use video element
            videoIframe.style.display = 'none';
            videoPlayer.style.display = 'block';
            videoSource.src = project.videoUrl;
            videoPlayer.load();
            videoPlayer.play().then(() => {
                // Auto-request fullscreen for Bright Smile Dental project
                if (project.title === "Bright Smile Dental") {
                    setTimeout(() => {
                        if (videoPlayer.requestFullscreen) {
                            videoPlayer.requestFullscreen().catch(e => console.log('Fullscreen request failed:', e));
                        } else if (videoPlayer.webkitRequestFullscreen) {
                            videoPlayer.webkitRequestFullscreen().catch(e => console.log('Fullscreen request failed:', e));
                        } else if (videoPlayer.msRequestFullscreen) {
                            videoPlayer.msRequestFullscreen().catch(e => console.log('Fullscreen request failed:', e));
                        }
                    }, 1000); // Wait 1 second after video starts
                }
            }).catch(e => console.log('Video autoplay prevented:', e));
        }
    } else {
        // Hide video toggle button and show screenshot for projects without video
        videoToggleBtn.classList.add('hidden');
        modalVideo.classList.add('hidden');
        modalScreenshotPlaceholder.classList.remove('hidden');
    }
    
    // Update features
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = '';
    project.features.forEach((feature, i) => {
        const colors = ['bg-primary', 'bg-secondary', 'bg-accent'];
        const color = colors[i % colors.length];
        featuresContainer.innerHTML += `
            <div class="flex items-center gap-3">
                <div class="w-2 h-2 ${color} rounded-full"></div>
                <span class="text-gray-300">${feature}</span>
            </div>
        `;
    });
    
    // Show modal with animation
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Animate modal content
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 10);
    
    // Add entrance animation to modal elements
    const modalElements = modalContent.querySelectorAll('*');
    modalElements.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.05}s`;
        el.classList.add('animate-slide-up');
    });
    
    // Auto-fullscreen for Bright Smile Dental video
    if (project.title === "Bright Smile Dental" && project.hasVideo) {
        setTimeout(() => {
            const videoPlayer = document.getElementById('video-player');
            if (videoPlayer && !videoPlayer.paused) {
                requestVideoFullscreen(videoPlayer);
            }
        }, 1500); // Wait for modal animation and video to load
    }
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolio-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Animate modal content out
    modalContent.style.transform = 'scale(0.95)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function openLiveDemo() {
    // Get the current project from the modal
    const modalTitle = document.getElementById('modal-title').textContent;
    const project = portfolioData.find(p => p.title === modalTitle);
    
    if (project && project.demoUrl) {
        // Open the live demo in a new tab
        window.open(project.demoUrl, '_blank');
        showNotification('Opening live demo in new tab! 🚀', 'success');
    } else {
        showNotification('Live demo coming soon! 🚀', 'success');
    }
}

function openCaseStudy() {
    // Placeholder for case study functionality
    showNotification('Case study coming soon! 📊', 'success');
}

function toggleVideo() {
    const modalTitle = document.getElementById('modal-title').textContent;
    const project = portfolioData.find(p => p.title === modalTitle);
    const videoToggleBtn = document.getElementById('video-toggle-btn');
    const videoBtnText = document.getElementById('video-btn-text');
    const modalVideo = document.getElementById('modal-video');
    const modalScreenshotPlaceholder = document.getElementById('modal-screenshot-placeholder');
    const videoIframe = document.getElementById('video-iframe');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    
    if (!project || !project.hasVideo || !project.videoUrl) {
        return;
    }
    
    if (modalVideo.classList.contains('hidden')) {
        // Show video
        modalVideo.classList.remove('hidden');
        modalScreenshotPlaceholder.classList.add('hidden');
        videoBtnText.textContent = 'Show Screenshot';
        
        // Load and play video
        if (project.videoUrl.includes('youtube.com')) {
            videoIframe.style.display = 'block';
            videoPlayer.style.display = 'none';
            const videoId = project.videoUrl.split('v=')[1]?.split('&')[0];
            if (videoId) {
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            }
        } else if (project.videoUrl.includes('vimeo.com')) {
            videoIframe.style.display = 'block';
            videoPlayer.style.display = 'none';
            const videoId = project.videoUrl.split('vimeo.com/')[1]?.split('?')[0];
            if (videoId) {
                videoIframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
            }
        } else if (project.videoUrl.includes('player.cloudinary.com')) {
            videoIframe.style.display = 'block';
            videoPlayer.style.display = 'none';
            videoIframe.src = project.videoUrl;
        } else {
            videoIframe.style.display = 'none';
            videoPlayer.style.display = 'block';
            videoSource.src = project.videoUrl;
            videoPlayer.load();
            videoPlayer.play();
        }
    } else {
        // Show screenshot
        modalVideo.classList.add('hidden');
        modalScreenshotPlaceholder.classList.remove('hidden');
        videoBtnText.textContent = 'Show Video';
    }
}

// Auto-fullscreen function for specific projects
function requestVideoFullscreen(videoElement) {
    setTimeout(() => {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen().catch(e => console.log('Fullscreen request failed:', e));
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen().catch(e => console.log('Fullscreen request failed:', e));
        } else if (videoElement.msRequestFullscreen) {
            videoElement.msRequestFullscreen().catch(e => console.log('Fullscreen request failed:', e));
        }
    }, 1000);
}

     // Portfolio Grid functionality

// Video functionality for portfolio cards
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 DOMContentLoaded event fired!');
    console.log('🔍 Checking if portfolio section exists...');
    const portfolioSection = document.getElementById('portfolio');
    console.log('Portfolio section found:', portfolioSection);
    
    // Test if functions exist immediately
    console.log('🔍 Testing function availability...');
    console.log('initializePortfolioSlideshow exists:', typeof initializePortfolioSlideshow);
    console.log('initializeScrollTriggeredSlideshow exists:', typeof initializeScrollTriggeredSlideshow);
    console.log('goToSlide exists:', typeof goToSlide);
    console.log('updateProjectCounter exists:', typeof updateProjectCounter);
    
    // Test if portfolio section has the right structure
    if (portfolioSection) {
        const slides = portfolioSection.querySelectorAll('.portfolio-slide');
        const track = portfolioSection.querySelector('#portfolio-track');
        console.log('Portfolio slides found:', slides.length);
        console.log('Portfolio track found:', track);
        
        // Test if scroll indicator exists
        const scrollIndicator = portfolioSection.querySelector('#scroll-indicator');
        console.log('Scroll indicator found:', scrollIndicator);
        
        // Test if project counter exists
        const projectCounter = portfolioSection.querySelector('#project-counter');
        console.log('Project counter found:', projectCounter);
    }
    
    // Handle video playback in portfolio cards
    const portfolioCards = document.querySelectorAll('[onclick*="openPortfolioModal"]');
    
    portfolioCards.forEach(card => {
        const video = card.querySelector('video');
        if (video) {
            // Play video on hover
            card.addEventListener('mouseenter', function() {
                if (video.paused) {
                    video.play().catch(e => console.log('Video autoplay prevented:', e));
                }
            });
            
            // Pause video when mouse leaves
            card.addEventListener('mouseleave', function() {
                if (!video.paused) {
                    video.pause();
                    video.currentTime = 0; // Reset to beginning
                }
            });
            
            // Handle video click to open modal
            video.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click
                const modalIndex = card.getAttribute('onclick').match(/\d+/)[0];
                openPortfolioModal(parseInt(modalIndex));
            });
        }
    });
    
    // Handle video controls in modal
    const modalVideo = document.getElementById('modal-video');
    if (modalVideo) {
        const videoPlayer = document.getElementById('video-player');
        if (videoPlayer) {
            // Add custom controls if needed
            videoPlayer.addEventListener('loadedmetadata', function() {
                console.log('Video loaded:', videoPlayer.duration, 'seconds');
            });
            
            videoPlayer.addEventListener('error', function(e) {
                console.error('Video error:', e);
                // Show fallback content
                const fallback = document.getElementById('modal-screenshot-placeholder');
                if (fallback) {
                    fallback.classList.remove('hidden');
                }
            });
        }
    }
    
    
    
         
    
         // Portfolio View Toggle
     let portfolioExpanded = false;
     
     function togglePortfolioView() {
         const viewMoreBtn = document.getElementById('view-more-btn');
         const viewMoreText = document.getElementById('view-more-text');
         const viewMoreIcon = document.getElementById('view-more-icon');
         
         if (!portfolioExpanded) {
             // Show additional portfolio items
             const portfolioItems = document.querySelectorAll('.portfolio-item');
             portfolioItems.forEach((item, index) => {
                 if (index >= 4) { // Show items 4 and 5
                     item.style.display = 'block';
                     item.style.animation = 'fadeInUp 0.6s ease-out forwards';
                 }
             });
             
             // Update button text and icon
             viewMoreText.textContent = 'Show Less';
             viewMoreIcon.style.transform = 'rotate(180deg)';
             portfolioExpanded = true;
             
             // Track analytics
             trackEvent('portfolio_view_more_clicked');
         } else {
             // Hide extra items
             const portfolioItems = document.querySelectorAll('.portfolio-item');
             portfolioItems.forEach((item, index) => {
                 if (index >= 4) {
                     item.style.animation = 'fadeOutDown 0.4s ease-out forwards';
                     setTimeout(() => {
                         item.style.display = 'none';
                         item.style.animation = '';
                     }, 400);
                 }
             });
             
             // Update button text and icon
             viewMoreText.textContent = 'View More Projects';
             viewMoreIcon.style.transform = 'rotate(0deg)';
             portfolioExpanded = false;
             
             // Track analytics
             trackEvent('portfolio_show_less_clicked');
         }
     }
    
         // Live Demo Functionality
     function openLiveDemo(projectIndex) {
         const project = portfolioData[projectIndex];
         if (project && project.demoUrl) {
             // Open the live demo in a new tab
             window.open(project.demoUrl, '_blank');
             showNotification('Opening live demo in new tab! 🚀', 'success');
             
             // Track analytics
             trackEvent('live_demo_opened', {
                 project: project.title,
                 url: project.demoUrl
             });
         } else {
             showNotification('Live demo coming soon! 🚀', 'info');
         }
     }
     
     // Initialize portfolio functionality
     console.log('Initializing portfolio grid...');
    
    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    }

    // Navigation
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let lastScrollTop = 0;

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            mobileMenuBtn.classList.toggle('open');
            
            // Animate button
            mobileMenuBtn.classList.add('animate-bounce');
            setTimeout(() => {
                mobileMenuBtn.classList.remove('animate-bounce');
            }, 1000);
        });

        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileMenuBtn.classList.remove('open');
            });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Add animation to clicked link
                link.classList.add('animate-bounce');
                setTimeout(() => {
                    link.classList.remove('animate-bounce');
                }, 1000);
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !service || !message) {
                showNotification('Please fill in all fields!', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address!', 'error');
                return;
            }
            
            // Show success message
            showNotification('Thank you! Your message has been sent. We\'ll get back to you soon! 🚀', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Track form submission
            trackEvent('contact_form_submitted', {
                service: service,
                has_message: message.length > 0
            });
        });
    }

    // Pricing toggle
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Show yearly prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                yearlyPrices.forEach(price => price.style.display = 'block');
                trackEvent('pricing_yearly_selected');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'block');
                yearlyPrices.forEach(price => price.style.display = 'none');
                trackEvent('pricing_monthly_selected');
            }
        });
    }

    // Scroll depth tracking
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScrollDepth) {
            maxScrollDepth = scrollPercent;
            
            // Track at 25%, 50%, 75%, 100%
            if (scrollPercent >= 25 && maxScrollDepth < 50) {
                trackEvent('scroll_depth', { depth: 25 });
            } else if (scrollPercent >= 50 && maxScrollDepth < 75) {
                trackEvent('scroll_depth', { depth: 50 });
            } else if (scrollPercent >= 75 && maxScrollDepth < 100) {
                trackEvent('scroll_depth', { depth: 75 });
            } else if (scrollPercent >= 100) {
                trackEvent('scroll_depth', { depth: 100 });
            }
        }
    });

    // Performance Monitoring
    window.addEventListener('load', () => {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            trackEvent('page_load', {
                load_time: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)
            });
        }
    });

    // Error Handling
    window.addEventListener('error', (e) => {
        trackEvent('javascript_error', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno
        });
    });

    // Service Worker Registration (Placeholder)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Accessibility Improvements
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        e.preventDefault();
                        firstFocusableElement.focus();
                    }
                }
            }
        });
    }

    // Apply focus trap to mobile menu
    if (mobileMenu) {
        trapFocus(mobileMenu);
    }

    // Skip Link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.id = 'main-content';
    }

    // Console Welcome Message
    console.log(`
    🚀 Website by Will - Badass Web Design Agency
    
    Welcome to our redesigned website! 
    We create stunning, conversion-focused websites that drive results.
    
    Features:
    ✅ Modern, responsive design
    ✅ Smooth animations and interactions
    ✅ Performance optimized
    ✅ Accessibility compliant
    ✅ SEO friendly
    
    Ready to start your project? Contact us today!
    `);

    // Easter Egg - Konami Code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.animation = 'wiggle 0.5s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 500);
            console.log('🎉 Konami Code activated! You found the easter egg!');
        }
    });

    // Prevent modal close when clicking inside modal content
    const modalContent = document.getElementById('modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});
