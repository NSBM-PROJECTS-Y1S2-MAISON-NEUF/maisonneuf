document.addEventListener("DOMContentLoaded", function() {
    const fadeIns = document.querySelectorAll('.fade-in');
    const slideUps = document.querySelectorAll('.slide-up');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });

    slideUps.forEach(slideUp => {
        observer.observe(slideUp);
    });

    // General script logic here
    console.log('Page loaded');
    
    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial');
    let testimonialIndex = 0;

    function showNextTestimonial() {
        testimonials[testimonialIndex].classList.remove('fade-in');
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        testimonials[testimonialIndex].classList.add('fade-in');
    }

    setInterval(showNextTestimonial, 5000);

    // Team members hover effect
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.05)';
            member.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
        });
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1)';
            member.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
