<?php
session_start();

if(isset($_SESSION['user'])) {
    echo json_encode(array('loggedIn' => true, 'user' => $_SESSION['user']));
} else {
    echo json_encode(array('loggedIn' => false));
}
?>