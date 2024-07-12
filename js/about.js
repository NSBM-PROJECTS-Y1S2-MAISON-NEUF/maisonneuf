document.addEventListener("DOMContentLoaded", function() {
    // Testimonials fade-in effect
    const testimonials = document.querySelectorAll('.testimonial-box');
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.opacity = 1;
            testimonial.style.transform = 'translateY(0)';
        }, index * 300);
    });

    // Smooth scroll for timeline events
    const timelineEvents = document.querySelectorAll('.timeline-event');
    window.addEventListener('scroll', () => {
        timelineEvents.forEach(event => {
            const rect = event.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                event.style.opacity = 1;
                event.style.transform = 'translateX(0)';
            }
        });
    });
});
