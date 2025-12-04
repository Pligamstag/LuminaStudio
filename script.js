// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Navigation between pages
const navLinksElements = document.querySelectorAll('.nav-links a, .logo, .hero-buttons a');
const pages = document.querySelectorAll('.page');

navLinksElements.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hash) {
            e.preventDefault();
            
            const targetPageId = link.getAttribute('data-page');
            const targetPage = document.getElementById(targetPageId);
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            if (link.classList.contains('nav-links')) {
                link.classList.add('active');
            } else {
                const correspondingNavLink = document.querySelector(`.nav-links a[data-page="${targetPageId}"]`);
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
            
            // Hide mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Switch pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            targetPage.classList.add('active');
            
            // Scroll to top of the page
            window.scrollTo(0, 0);
        }
    });
});

// Contact form submission - DÉSACTIVÉ
const contactForm = document.getElementById('contactForm');

// Désactiver tous les champs du formulaire
const formInputs = contactForm.querySelectorAll('input, select, textarea, button');
formInputs.forEach(input => {
    input.disabled = true;
    input.style.cursor = 'not-allowed';
    input.style.opacity = '0.6';
});

// Empêcher la soumission du formulaire
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Le formulaire est temporairement désactivé. Veuillez nous contacter par email à contact.luminastudio.pro@gmail.com');
    return false;
});

// Désactiver les interactions avec le portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.style.cursor = 'not-allowed';
    
    item.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Le portfolio est temporairement désactivé. À venir très prochainement !');
        return false;
    });
});

// Désactiver le bouton "Voir plus sur Drive"
const driveButton = document.querySelector('.btn-disabled');
if (driveButton) {
    driveButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Cette fonctionnalité est temporairement désactivée. À venir très prochainement !');
        return false;
    });
}

// Particles.js configuration
document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#7A5CFF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#7A5CFF",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});

// Scroll animations
const fadeUpElements = document.querySelectorAll('.fade-up');

const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeUpElements.forEach(element => {
    fadeUpObserver.observe(element);
});
```

---

## 📂 Structure finale du projet :
```
luminastudio/
├── index.html
├── styles.css
└── script.js
