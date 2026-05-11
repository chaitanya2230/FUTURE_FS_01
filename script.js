// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('data-lucide', 'menu');
    } else {
        menuIcon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Navbar Scroll Effect & Scroll Spy
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Navbar background
    if (window.scrollY > 50) {
        navbar.classList.add('glass-nav', 'py-3');
        navbar.classList.remove('bg-transparent', 'py-5');
    } else {
        navbar.classList.remove('glass-nav', 'py-3');
        navbar.classList.add('bg-transparent', 'py-5');
    }

    // Scroll Spy
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-gray-400');
        const indicator = link.querySelector('span');
        if(indicator) indicator.classList.remove('w-full');
        
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.remove('text-gray-400');
            link.classList.add('text-white');
            if(indicator) indicator.classList.add('w-full');
        }
    });
});



// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
// Check once on load
checkReveal();

// Contact Form Simulation
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnIcon = document.getElementById('btn-icon');
const successMsg = document.getElementById('success-msg');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
        btnText.textContent = "Sending...";
        btnIcon.setAttribute('data-lucide', 'loader-2');
        btnIcon.classList.add('animate-spin');
        lucide.createIcons();

        // Simulate API
        setTimeout(() => {
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
            btnText.textContent = "Send Message";
            btnIcon.setAttribute('data-lucide', 'send');
            btnIcon.classList.remove('animate-spin');
            lucide.createIcons();
            
            successMsg.classList.remove('hidden');
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        }, 1500);
    });
}
