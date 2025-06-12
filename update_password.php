<?php
session_start();

// Debugging - remove in production
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Verify user is logged in
if (!isset($_SESSION['user_id'])) {
    $_SESSION['password_error'] = "You must be logged in";
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root"; 
    $password_db = ""; // Your database password
    $dbname = "notesfile";

    $current_password = $_POST['current_password'] ?? '';
    $new_password = $_POST['new_password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';

    // Basic validation
    if (empty($current_password) || empty($new_password) || empty($confirm_password)) {
        $_SESSION['password_error'] = "All fields are required";
        header("Location: profile.php");
        exit();
    }

    if ($new_password !== $confirm_password) {
        $_SESSION['password_error'] = "New passwords don't match";
        header("Location: profile.php");
        exit();
    }

    if (strlen($new_password) < 8 || !preg_match("/\d/", $new_password)) {
        $_SESSION['password_error'] = "Password must be 8+ chars with a number";
        header("Location: profile.php");
        exit();
    }

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password_db);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // 1. Verify current password
        $stmt = $conn->prepare("SELECT password FROM users WHERE id = :user_id");
        $stmt->bindParam(':user_id', $_SESSION['user_id']);
        $stmt->execute();
        
        if ($stmt->rowCount() === 1) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (password_verify($current_password, $user['password'])) {
                // 2. Update password
                $new_hash = password_hash($new_password, PASSWORD_DEFAULT);
                $update = $conn->prepare("UPDATE users SET password = :pass WHERE id = :user_id");
                $update->bindParam(':pass', $new_hash);
                $update->bindParam(':user_id', $_SESSION['user_id']);
                
                if ($update->execute()) {
                    $_SESSION['password_success'] = "Password updated successfully!";
                } else {
                    $_SESSION['password_error'] = "Update failed. Please try again.";
                }
            } else {
                $_SESSION['password_error'] = "Current password is incorrect";
            }
        } else {
            $_SESSION['password_error'] = "User not found";
        }
    } catch(PDOException $e) {
        $_SESSION['password_error'] = "Database error: " . $e->getMessage();
    } finally {
        $conn = null;
    }

    $bio = $_POST['bio'] ?? '';
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password_db);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("UPDATE users SET bio = :bio WHERE id = :user_id");
        $stmt->bindParam(':bio', $bio);
        $stmt->bindParam(':user_id', $_SESSION['user_id']);
        
        if ($stmt->execute()) {
            $_SESSION['profile_success'] = "Bio updated successfully!";
        } else {
            $_SESSION['profile_error'] = "Error updating bio.";
        }
    } catch(PDOException $e) {
        $_SESSION['profile_error'] = "Database error: " . $e->getMessage();
    }
}

header("Location: profile.php");
exit();
?>