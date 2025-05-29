document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelector(".forms");
    const pwShowHide = document.querySelectorAll(".eye-icon");
    const links = document.querySelectorAll(".link");
    
    // Funcționalitate eye icon
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
            
            pwFields.forEach(password => {
                if(password.type === "password") {
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            });
        });
    });

    // Comutare între formulare
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            forms.classList.toggle("show-signup");
        });
    });

    // Login form
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if(email === 'demo@example.com' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            window.location.href = 'index.html';
        } else {
            document.getElementById('login-error').style.display = 'block';
        }
    });

    // Signup form
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        
        if(password !== confirmPassword) {
            alert('Parolele nu coincid!');
            return;
        }
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        alert('Înregistrare reușită!');
        window.location.href = 'index.html';
    });

    // Verificare autentificare
    if(window.location.pathname.includes('index.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if(!isLoggedIn) window.location.href = 'login.html';
    }
});