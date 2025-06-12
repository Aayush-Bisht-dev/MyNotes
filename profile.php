<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile - EduLibraries</title>
    <link rel="stylesheet" href="profile.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="home.html">EduLibraries</a>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="library.html">Library</a></li>
                    <li><a href="profile.html" class="active">Profile</a></li>
                    <li><a href="index.html">Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="profile-container">
        <div class="container">
            <div class="profile-header">
                <div class="avatar">
                    <img src="Aayush.jpeg" alt="User Avatar" id="user-avatar">
                    <button class="edit-avatar-btn" id="edit-avatar-btn">
                        <i class="fas fa-camera"></i>
                    </button>
                </div>
                <h1 id="user-name">John Doe</h1>
                <p id="user-email">john.doe@example.com</p>
                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-number" id="books-read">24</span>
                        <span class="stat-label">Books Read</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="notes-taken">156</span>
                        <span class="stat-label">Notes Taken</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="joined-date">2023</span>
                        <span class="stat-label">Member Since</span>
                    </div>
                </div>
            </div>

            <div class="profile-content">
                <div class="profile-card">
                    <h2><i class="fas fa-user-edit"></i> Personal Information</h2>
                    <form id="profile-form">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" value="john.doe@example.com" readonly>
                        </div>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" value="johndoe" readonly>
                        </div>
                        <div class="form-group">
                        <label for="bio">Bio</label>
                            <textarea id="bio" name="bio" rows="3">Book lover and knowledge seeker</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Bio</button>
                        <?php
if (isset($_SESSION['profile_error'])) {
    echo '<div class="alert alert-danger">'.$_SESSION['profile_error'].'</div>';
    unset($_SESSION['profile_error']);
}
if (isset($_SESSION['profile_success'])) {
    echo '<div class="alert alert-success">'.$_SESSION['profile_success'].'</div>';
    unset($_SESSION['profile_success']);
}
?>
                    </form>
                </div>
                <div class="profile-card">
                    <h2><i class="fas fa-lock"></i> Change Password</h2>
                    <form id="password-form" method="POST" action="update_password.php">
                        <div class="form-group">
                            <label for="current-password">Current Password</label>
                            <input type="password" id="current-password" name="current_password" required>
                        </div>
                        <div class="form-group">
                            <label for="new-password">New Password</label>
                            <input type="password" id="new-password" name="new_password" required>
                            <small>Minimum 8 characters with at least one number</small>
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirm New Password</label>
                            <input type="password" id="confirm-password" name="confirm_password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Update Password</button>
                    </form>
                    <?php
                        if (isset($_SESSION['password_error'])) {
                             echo '<div class="alert alert-danger">'.$_SESSION['password_error'].'</div>';
                             unset($_SESSION['password_error']);
                         }
                         if (isset($_SESSION['password_success'])) {
                         echo '<div class="alert alert-success">'.$_SESSION['password_success'].'</div>';
                         unset($_SESSION['password_success']);
                        }
                        ?>
                </div>
            </div>
        </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>EduLibraries</h3>
                    <p>Your gateway to knowledge and learning resources.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="library.html">Library</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Connect With Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 EduLibraries. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="profile.js"></script>
   
</body>

</html>