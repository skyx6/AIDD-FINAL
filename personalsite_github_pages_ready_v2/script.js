// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error messages
            clearErrorMessages();
            
            // Validate form
            let isValid = true;
            
            // Validate First Name
            const firstName = document.getElementById('firstName');
            if (!firstName.value.trim()) {
                showError('firstNameError', 'First name is required');
                isValid = false;
            }
            
            // Validate Last Name
            const lastName = document.getElementById('lastName');
            if (!lastName.value.trim()) {
                showError('lastNameError', 'Last name is required');
                isValid = false;
            }
            
            // Validate Email
            const email = document.getElementById('email');
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (!email.value.trim()) {
                showError('emailError', 'Email address is required');
                isValid = false;
            } else if (!emailPattern.test(email.value)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate Password
            const password = document.getElementById('password');
            if (!password.value) {
                showError('passwordError', 'Password is required');
                isValid = false;
            } else if (password.value.length < 8) {
                showError('passwordError', 'Password must be at least 8 characters long');
                isValid = false;
            }
            
            // Validate Confirm Password
            const confirmPassword = document.getElementById('confirmPassword');
            if (!confirmPassword.value) {
                showError('confirmPasswordError', 'Please confirm your password');
                isValid = false;
            } else if (password.value !== confirmPassword.value) {
                showError('confirmPasswordError', 'Passwords do not match');
                isValid = false;
            }
            
            // If form is valid, redirect to thank you page
            if (isValid) {
                // Store form data in sessionStorage for thank you page
                const formData = {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value
                };
                sessionStorage.setItem('formData', JSON.stringify(formData));
                
                // Redirect to thank you page
                window.location.href="thankyou.html";
            }
        });
    }
});

// Helper function to show error messages
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Helper function to clear error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
}

// Real-time validation for better UX
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error message when user starts typing
            const errorId = this.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        });
    });
});

// Field-specific validation
function validateField(field) {
    const fieldId = field.id;
    const errorId = fieldId + 'Error';
    const errorElement = document.getElementById(errorId);
    
    if (!errorElement) return;
    
    let isValid = true;
    let errorMessage = '';
    
    switch (fieldId) {
        case 'firstName':
        case 'lastName':
            if (!field.value.trim()) {
                isValid = false;
                errorMessage = fieldId === 'firstName' ? 'First name is required' : 'Last name is required';
            }
            break;
            
        case 'email':
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (!field.value.trim()) {
                isValid = false;
                errorMessage = 'Email address is required';
            } else if (!emailPattern.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
            
        case 'password':
            if (!field.value) {
                isValid = false;
                errorMessage = 'Password is required';
            } else if (field.value.length < 8) {
                isValid = false;
                errorMessage = 'Password must be at least 8 characters long';
            }
            break;
            
        case 'confirmPassword':
            const password = document.getElementById('password');
            if (!field.value) {
                isValid = false;
                errorMessage = 'Please confirm your password';
            } else if (password.value !== field.value) {
                isValid = false;
                errorMessage = 'Passwords do not match';
            }
            break;
    }
    
    if (!isValid) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
        field.style.borderColor = '#dc3545';
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        field.style.borderColor = '#28a745';
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading state to form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        contactForm.addEventListener('submit', function() {
            if (submitButton) {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
            }
        });
    }
});

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navMenu = document.querySelector('.nav-links');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});

// Add animation classes for scroll effects
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.highlight-card, .project-card, .interest-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .highlight-card,
    .project-card,
    .interest-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .highlight-card.animate-in,
    .project-card.animate-in,
    .interest-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
