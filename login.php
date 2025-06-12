<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - EduLibraries</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header (keep same as before) -->
    <header class="header">
        <!-- ... existing header code ... -->
    </header>

    <!-- Login Page Content -->
    <section class="auth-container">
        <div class="auth-form">
            <h2>Welcome Back!</h2>
            <p style="text-align: center; color: var(--text-light); margin-bottom: 30px;">Login to access your account and resources</p>
            
            <?php
            session_start();
            
            // Display error message if login failed
            if (isset($_SESSION['login_error'])) {
                echo '<p style="color: red; text-align: center; margin-bottom: 15px;">' . $_SESSION['login_error'] . '</p>';
                unset($_SESSION['login_error']);
            }
            
            // Process login form
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $login = $_POST['login'];
                $password = $_POST['password'];
                
                // Database connection
                $servername = "localhost";
                $username = "root";
                $password_db = "";
                $dbname = "notesfile";
                
                try {
                    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password_db);
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    
                    // Prepare SQL statement to check either email or username
                    $stmt = $conn->prepare("SELECT id, full_name, email, password FROM users WHERE email = :login OR full_name = :login");
                    $stmt->bindParam(':login', $login);
                    $stmt->execute();
                    
                    if ($stmt->rowCount() == 1) {
                        $user = $stmt->fetch(PDO::FETCH_ASSOC);
                        
                        // Verify password
                        if (password_verify($password, $user['password'])) {
                            // Password is correct, start a new session
                            $_SESSION['user_id'] = $user['id'];
                            $_SESSION['user_name'] = $user['full_name'];
                            $_SESSION['user_email'] = $user['email'];
                            
                            // Remember me functionality
                            if (isset($_POST['remember_me'])) {
                                // Set cookie to expire in 30 days
                                setcookie('remember_user', $user['email'], time() + (30 * 24 * 60 * 60), "/");
                            }
                            
                            header("Location: home.html");
                            exit();
                        } else {
                            $_SESSION['login_error'] = "Invalid login credentials";
                            header("Location: login.php");
                            exit();
                        }
                    } else {
                        $_SESSION['login_error'] = "Invalid login credentials";
                        header("Location: login.php");
                        exit();
                    }
                } catch(PDOException $e) {
                    $_SESSION['login_error'] = "Database error: " . $e->getMessage();
                    header("Location: login.php");
                    exit();
                }
                
                $conn = null;
            }
            ?>
            
            <form id="loginForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <div class="form-group">
                    <label for="login-email">Email or Username</label>
                    <input type="text" id="login-email" name="login" required 
                           value="<?php echo isset($_COOKIE['remember_user']) ? htmlspecialchars($_COOKIE['remember_user']) : ''; ?>">
                </div>
                <div class="form-group">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" name="password" required>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin: 15px 0;">
                    <div>
                        <input type="checkbox" id="remember-me" name="remember_me" 
                               <?php echo isset($_COOKIE['remember_user']) ? 'checked' : ''; ?>>
                        <label for="remember-me" style="margin-left: 5px;">Remember me</label>
                    </div>
                    <a href="forgot-password.php" style="color: var(--primary-color);">Forgot password?</a>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Login</button>
                </div>
                
                <!-- Keep social login buttons same as before -->
                
            </form>
            
            <div class="form-footer">
                <p>Don't have an account? <a href="register.php" style="color: var(--primary-color); font-weight: 500;">Register here</a></p>
            </div>
        </div>
    </section>

    <!-- Footer (keep same as before) -->
    <footer class="footer">
        <!-- ... existing footer code ... -->
    </footer>

    <script src="main.js"></script>
</body>
</html>