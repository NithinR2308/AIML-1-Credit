// ========== Mobile Menu Toggle ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========== Active Nav Link Highlighting ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== Scroll Animation ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill cards
const cards = document.querySelectorAll('.project-card, .skill-card, .stat');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========== Form Submission ==========
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showNotification('Please fill in all fields!', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email!', 'error');
            return;
        }

        // Simulate sending (in real scenario, this would send to a server)
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;

        setTimeout(() => {
            showNotification('Thank you! I\'ll get back to you soon!', 'success');
            contactForm.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    });
}

// ========== Notification Function ==========
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        ${type === 'success' 
            ? 'background: #10b981; color: white;' 
            : 'background: #ef4444; color: white;'
        }
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== Smooth Scroll for Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== Button Hover Effects ==========
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ========== Counter Animation ==========
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    const observerCounter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;
                const increment = Math.ceil(finalValue / 30);

                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        target.textContent = currentValue;
                    }
                }, 30);

                observerCounter.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observerCounter.observe(stat));
}

// Start counter animation when page loads
window.addEventListener('load', animateCounters);

// ========== Progress Bar Animation ==========
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fillBar 1s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

window.addEventListener('load', animateProgressBars);

// ========== Dark Mode Toggle (Optional) ==========
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function updateColorScheme(isDark) {
    const root = document.documentElement;
    if (isDark) {
        root.style.setProperty('--dark-bg', '#0f172a');
        root.style.setProperty('--text-dark', '#f8fafc');
        root.style.setProperty('--text-light', '#cbd5e1');
        root.style.setProperty('--white', '#1e293b');
        root.style.setProperty('--light-bg', '#334155');
    }
}

// Check system preference
if (prefersDark.matches) {
    // updateColorScheme(true); // Uncomment to enable dark mode by default
}

// Listen for changes
prefersDark.addEventListener('change', (e) => {
    // updateColorScheme(e.matches); // Uncomment to enable dark mode switching
});

// ========== Page Load Animation ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ========== Console Message ==========
console.log('%cWelcome to my Portfolio! 🚀', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cFeeling inspired? Let\'s work together!', 'font-size: 14px; color: #64748b;');
