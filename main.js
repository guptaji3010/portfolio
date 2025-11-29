// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add a slight delay for the outline to create a trailing effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.project-card, .timeline-item, .skills-category');

sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Add animation classes dynamically
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-in-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card.animate-in, 
        .timeline-item.animate-in, 
        .skills-category.animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
    }
});
