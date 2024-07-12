<?php

session_start();

include 'db.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $_SESSION['username'] = $username;


    $sql = "SELECT * FROM users WHERE Email='$username' AND Password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "success";
    } else {
        echo "Invalid username or password.";
    }

    $conn->close();
}

?>
