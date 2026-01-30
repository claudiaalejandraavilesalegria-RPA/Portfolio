// Main JS
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Accordion Icon Rotation
    const details = document.querySelectorAll('details');
    details.forEach(detail => {
        detail.addEventListener('toggle', (e) => {
            const icon = detail.querySelector('i');
            if (detail.open) {
                icon.style.transform = 'rotate(180deg)';
                icon.style.transition = 'transform 0.3s ease';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    console.log("RPA Portfolio Loaded - Animations Ready");
});
