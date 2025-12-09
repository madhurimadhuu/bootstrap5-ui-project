// ============================================
// Bootstrap 5 UI Project - Main Script
// ============================================

// Document Ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully');
    
    // Initialize form validation
    initializeFormValidation();
    
    // Add smooth scrolling
    initializeSmoothScrolling();
});

// ============================================
// Form Validation
// ============================================
function initializeFormValidation() {
    // Get all forms that need validation
    const forms = document.querySelectorAll('form[novalidate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Prevent default submission
            event.preventDefault();
            
            // Check if form is valid
            if (form.checkValidity() === false) {
                event.stopPropagation();
                alert('Please fill out all required fields correctly.');
            } else {
                // Form is valid - handle submission
                handleFormSubmit(form);
            }
            
            // Add Bootstrap validation styles
            form.classList.add('was-validated');
        });
    });
}

// ============================================
// Handle Form Submission (Contact Form)
// ============================================
function handleFormSubmit(form) {
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    console.log('Form submitted with data:', data);
    
    // Show success message (you can replace this with actual backend submission)
    showSuccessMessage(form);
}

// ============================================
// Show Success Message
// ============================================
function showSuccessMessage(form) {
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        <strong>Success!</strong> Your message has been sent successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert alert after form
    form.parentNode.insertBefore(alertDiv, form.nextSibling);
    
    // Reset form
    form.reset();
    form.classList.remove('was-validated');
    
    // Remove alert after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Optional: Add Active Link Highlighting
// ============================================
function highlightActiveLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('nav a.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', highlightActiveLink);

// ============================================
// Optional: Dark Mode Toggle (Nice Addition)
// ============================================
function initializeDarkModeToggle() {
    // Check if dark mode is already enabled
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#ffffff';
    localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#333';
    localStorage.setItem('darkMode', 'false');
}

// Initialize dark mode on load
document.addEventListener('DOMContentLoaded', initializeDarkModeToggle);
