


// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Toggle meniu mobil
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('show');
    });

    // Închide meniul la click în afară
    document.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });

    // Logout functionality
    document.querySelector('.logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = 'login.html';
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Afișare email utilizator
        const userEmail = localStorage.getItem('userEmail');
        if(userEmail) {
            document.getElementById('user-email').textContent = userEmail;
        }
    
        // Logout
        document.querySelectorAll('.logout-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.clear();
                window.location.href = 'login.html';
            });
        });
    
        // Galerie Lightbox
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeLightbox = document.querySelector('.close-lightbox');
    
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                lightbox.style.display = 'block';
                lightboxImg.src = imgSrc;
            });
        });
    
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    
        // Meniu mobil
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const navList = document.querySelector('.nav-list');
    
        mobileMenuButton.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    });
    
    // script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const dropdown = document.querySelector('.dropdown-menu');
    
    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Închide meniul la click în afară
    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });

    // Logout functionality
    document.querySelector('.logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = 'login.html';
    });
    // script.js actualizat
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const dropdown = document.querySelector('.dropdown-content');
    
    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        dropdown.classList.toggle('show');
    });

    // Închide meniul la click în afară
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hamburger-menu')) {
            hamburger.classList.remove('active');
            dropdown.classList.remove('show');
        }
    });

    // Logout functionality
    document.querySelector('.logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = 'login.html';
    });
    // gallery.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('h3').textContent;
            
            lightbox.style.display = 'flex';
            lightboxImg.src = imgSrc;
            document.querySelector('.caption-text').textContent = caption;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if(e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
});
});
});