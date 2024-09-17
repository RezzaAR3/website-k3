// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll smoothly to the target section
        const target = document.querySelector(this.getAttribute('href'));

        // Check if the target exists
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,  // Adjust for any fixed header
                behavior: 'smooth'
            });
        } else {
            console.error('Target not found for: ', this.getAttribute('href'));
        }
    });
});

// Form submission and alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('Kelompok 3').value;
    const email = document.getElementById('nbsar3@gmail.com').value;

    // Check if name and email are filled
    if (name && email) {
        alert('Terima kasih, ${name}! Kami akan menghubungi Anda melalui e-mail ${email}.');
        this.reset(); // Reset the form after submission
    } else {
        alert('Silakan lengkapi semua bidang.');
    }
});

// Show/hide header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#0073e6';  // Background color on scroll
    } else {
        header.style.backgroundColor = 'transparent';  // Transparent when at top
    }
});

// Function to load images lazily (optional enhancement)
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
        });
    }
});