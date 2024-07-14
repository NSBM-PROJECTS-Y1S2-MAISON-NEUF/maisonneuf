<?php
include 'php/db.php';

echo $_SESSION['username'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users (Username, email, password) VALUES ('$email', '$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        $_SESSSION['user'] = $email;
        header("Location: login.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Register - Maison Neuf</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">Maison Neuf</a>
            </div>
        </nav>
    </header>
    <main class="d-flex justify-content-center align-items-center" style="height: 80vh;">
        <div class="card" style="width: 400px;">
            <div class="card-body">
                <h2 class="card-title text-center">Register</h2>
                <form method="POST" action="register.php">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn btn-custom w-100">Register</button>
                </form>
                <p class="mt-3 text-center">Already have an account? <a href="login.html">Login here</a></p>
            </div>
        </div>
    </main>
    <footer class="py-4">
        <div class="container text-center">
            <p class="mb


        
