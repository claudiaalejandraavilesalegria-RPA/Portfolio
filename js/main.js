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

    // Language Switcher Logic
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;

    // Check saved preference
    const savedLang = localStorage.getItem('site-lang') || 'en';
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = body.classList.contains('lang-de') ? 'de' : 'en';
        const newLang = currentLang === 'en' ? 'de' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        if (lang === 'de') {
            body.classList.add('lang-de');
            body.classList.remove('lang-en');
            updateToggleUI('de');
        } else {
            body.classList.add('lang-en');
            body.classList.remove('lang-de');
            updateToggleUI('en');
        }
        localStorage.setItem('site-lang', lang);
    }

    function updateToggleUI(lang) {
        const opts = document.querySelectorAll('.lang-opt');
        opts.forEach(opt => opt.classList.remove('active'));
        // 0 is EN, 1 is DE based on HTML order
        if (lang === 'en') opts[0].classList.add('active');
        else opts[1].classList.add('active');
    }
});

// Modal Logic
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
// Lightbox Logic
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        // If no other modal is open, restore overflow
        if (!document.querySelector('.modal-overlay.active')) {
            document.body.style.overflow = 'auto';
        }
    }
}
