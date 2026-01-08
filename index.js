// Initialize Icons
lucide.createIcons();

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close mobile menu on click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial Carousel Logic
const testimonials = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}, 5000);