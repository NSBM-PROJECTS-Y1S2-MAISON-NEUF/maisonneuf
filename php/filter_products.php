<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maisonneuf";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get filter parameters
$category = $_GET['category'] ?? '';
$subcategory = $_GET['subcategory'] ?? '';
$price = $_GET['price'] ?? '';
$tags = $_GET['tags'] ?? '';

// Construct the SQL query
$sql = "SELECT * FROM products WHERE 1=1";

if (!empty($category)) {
    $sql .= " AND category = '" . $conn->real_escape_string($category) . "'";
}

if (!empty($subcategory)) {
    $sql .= " AND subcategory = '" . $conn->real_escape_string($subcategory) . "'";
}

if (!empty($price)) {
    $sql .= " AND price <= " . $conn->real_escape_string($price);
}

if (!empty($tags)) {
    $sql .= " AND tags LIKE '%" . $conn->real_escape_string($tags) . "%'";
}

$result = $conn->query($sql);

$products = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($products);
?>
