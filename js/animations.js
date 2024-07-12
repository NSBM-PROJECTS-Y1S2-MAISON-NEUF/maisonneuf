document.addEventListener("DOMContentLoaded", function() {
    // Add fade in animation to hero section
    const heroSection = document.querySelector('#hero');
    heroSection.classList.add('fadeIn');

    // Add slide in animation to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('slideIn');
    });

    // Add hover effect to images in About Us section
    const images = document.querySelectorAll('.img-fluid');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => {
            element.classList.add('animated');
        });
    });
});      
