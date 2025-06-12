document.addEventListener('DOMContentLoaded', function() {
    const passwordForm = document.getElementById('password-form');
    
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Client-side validation
            if (!currentPassword || !newPassword || !confirmPassword) {
                e.preventDefault();
                alert('All fields are required');
                return false;
            }
            
            if (newPassword !== confirmPassword) {
                e.preventDefault();
                alert('New passwords do not match!');
                return false;
            }
            
            if (newPassword.length < 8 || !/\d/.test(newPassword)) {
                e.preventDefault();
                alert('Password must be at least 8 characters with at least one number');
                return false;
            }
            
            return true;
        });
    }
});








// profile.js

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const editAvatarBtn = document.getElementById('edit-avatar-btn');
    const userAvatar = document.getElementById('user-avatar');
    const profileForm = document.getElementById('profile-form');
    const passwordForm = document.getElementById('password-form');
    const bioTextarea = document.getElementById('bio');
    const editModeElements = document.querySelectorAll('.edit-mode');

    // Toggle edit mode for avatar
    editAvatarBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    userAvatar.src = e.target.result;
                    // Here you would typically send the image to the server
                    // For demonstration, we'll just update the local image
                    showAlert('Avatar updated successfully!', 'success');
                };
                
                reader.readAsDataURL(this.files[0]);
            }
        });
        
        fileInput.click();
    });

    // Handle profile form submission
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the data to the server via AJAX
            // For demonstration, we'll just show a success message
            showAlert('Profile updated successfully!', 'success');
            
            // Disable the readonly fields for demo purposes
            // In a real app, you would send this to the server
            setTimeout(() => {
                bioTextarea.readOnly = true;
            }, 1000);
        });
    }

    // Handle password form submission
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Basic client-side validation
            if (newPassword !== confirmPassword) {
                showAlert('New passwords do not match!', 'error');
                return;
            }
            
            if (newPassword.length < 8 || !/\d/.test(newPassword)) {
                showAlert('Password must be at least 8 characters with at least one number', 'error');
                return;
            }
            
            // Here you would typically send the data to the server via AJAX
            // For demonstration, we'll just show a success message
            showAlert('Password updated successfully!', 'success');
            passwordForm.reset();
        });
    }

    // Toggle edit mode for bio
    bioTextarea.addEventListener('focus', function() {
        this.readOnly = false;
    });

    // Show alert messages (complements the PHP alerts)
    function showAlert(message, type) {
        // Remove any existing alerts
        const existingAlerts = document.querySelectorAll('.custom-alert');
        existingAlerts.forEach(alert => alert.remove());
        
        const alertDiv = document.createElement('div');
        alertDiv.className = `custom-alert alert-${type}`;
        alertDiv.textContent = message;
        
        // Insert after the form title
        const formTitle = document.querySelector('.profile-card h2');
        if (formTitle) {
            formTitle.parentNode.insertBefore(alertDiv, formTitle.nextSibling);
        } else {
            document.body.prepend(alertDiv);
        }
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    // Stats animation
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = +stat.textContent;
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 20);
        });
    }
    
    // Initialize animations
    animateStats();
});