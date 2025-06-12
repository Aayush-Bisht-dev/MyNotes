<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - EduLibraries</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    
    <header class="header">
        <div class="container header-container">
            <a href="index.html" class="logo">EduLibraries</a>
            
            <div class="nav-buttons">
                <a href="login.php" class="btn btn-secondary">Login</a>
            </div>
            
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <section class="auth-container">
        <div class="auth-form">
            <h2>Create Your Account</h2>
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "notesfile";
                
                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);
                
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                
                // Get form data
                $full_name = trim($_POST['full_name']);
                $email = trim($_POST['email']);
                $password_input = $_POST['password'];
                $confirm_password = $_POST['confirm_password'];
                
                // Validate inputs
                $errors = [];
                
                if (empty($full_name)) {
                    $errors[] = "Full name is required";
                }
                
                if (empty($email)) {
                    $errors[] = "Email is required";
                } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $errors[] = "Invalid email format";
                }
                
                if (empty($password_input)) {
                    $errors[] = "Password is required";
                } elseif (strlen($password_input) < 8 || !preg_match("/\d/", $password_input)) {
                    $errors[] = "Password must be at least 8 characters with at least one number";
                }
                
                if ($password_input !== $confirm_password) {
                    $errors[] = "Passwords do not match";
                }
                
                // Check if email already exists
                $check_email = $conn->prepare("SELECT email FROM users WHERE email = ?");
                $check_email->bind_param("s", $email);
                $check_email->execute();
                $check_email->store_result();
                
                if ($check_email->num_rows > 0) {
                    $errors[] = "Email already registered";
                }
                $check_email->close();
                
                // If no errors, proceed with registration
                if (empty($errors)) {
                    $password_hash = password_hash($password_input, PASSWORD_DEFAULT);
                    
                    $stmt = $conn->prepare("INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)");
                    $stmt->bind_param("sss", $full_name, $email, $password_hash);
                    
                    if ($stmt->execute()) {
                        echo '<div class="alert alert-success">Registration successful! Redirecting to login...</div>';
                        header("Refresh: 3; url=login.php");
                        exit();
                    } else {
                        $errors[] = "Database error: " . $stmt->error;
                    }
                    
                    $stmt->close();
                }
                
                // Display errors if any
                if (!empty($errors)) {
                    echo '<div class="alert alert-danger">';
                    foreach ($errors as $error) {
                        echo '<p>' . htmlspecialchars($error) . '</p>';
                    }
                    echo '</div>';
                }
                
                $conn->close();
            }
            ?>
            
            <form id="registerForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <div class="form-group">
                    <label for="register-name">Full Name</label>
                    <input type="text" id="register-name" name="full_name" required 
                           value="<?php echo isset($_POST['full_name']) ? htmlspecialchars($_POST['full_name']) : ''; ?>">
                </div>
                <div class="form-group">
                    <label for="register-email">Email Address</label>
                    <input type="email" id="register-email" name="email" required
                           value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
                </div>
                <div class="form-group">
                    <label for="register-password">Password</label>
                    <input type="password" id="register-password" name="password" required>
                    <small style="color: var(--text-light); display: block; margin-top: 5px;">Minimum 8 characters with at least one number</small>
                </div>
                <div class="form-group">
                    <label for="register-confirm">Confirm Password</label>
                    <input type="password" id="register-confirm" name="confirm_password" required>
                </div>
                
                <div style="margin: 15px 0;">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">I agree to the <a href="terms.html" style="color: var(--primary-color);">Terms of Service</a> and <a href="privacy.html" style="color: var(--primary-color);">Privacy Policy</a></label>
                </div>
                
                <div class="form-actions">
                    <button type="submit" name="register_btn" class="btn btn-primary" style="width: 100%; padding: 12px; font-size: 16px;">
                        <i class="fas fa-save" style="margin-right: 8px;"></i> Save & Register
                    </button>
                </div>
                
                <div style="text-align: center; margin: 20px 0; position: relative;">
                    <div style="height: 1px; background-color: #eee; width: 100%; position: absolute; top: 50%;"></div>
                    <span style="background-color: white; padding: 0 15px; position: relative; z-index: 1; color: var(--text-light);">or sign up with</span>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <button type="button" style="padding: 12px; border: 1px solid #ddd; border-radius: 5px; background-color: white; cursor: pointer;">
                        <i class="fab fa-google" style="color: #DB4437;"></i> Google
                    </button>
                    <button type="button" style="padding: 12px; border: 1px solid #ddd; border-radius: 5px; background-color: white; cursor: pointer;">
                        <i class="fab fa-facebook-f" style="color: #4267B2;"></i> Facebook
                    </button>
                </div>
            </form>
            
            <div class="form-footer">
                <p>Already have an account? <a href="login.php" style="color: var(--primary-color); font-weight: 500;">Login here</a></p>
            </div>
        </div>
    </section>

    <!-- Keep the same footer section -->
    <footer class="footer">
        <!-- Same footer as index.html -->
    </footer>

    <script>
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm').value;
            const termsChecked = document.getElementById('terms').checked;
            
            // Client-side validation
            if (!termsChecked) {
                e.preventDefault();
                alert('You must agree to the Terms of Service and Privacy Policy');
                return false;
            }
            
            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match!');
                return false;
            }
            
            if (password.length < 8 || !/\d/.test(password)) {
                e.preventDefault();
                alert('Password must be at least 8 characters long and contain at least one number');
                return false;
            }
        });
    </script>
</body>
</html>