<?php
include 'db.php';

$sql = "SELECT * FROM Collections";
$result = $conn->query($sql);

$collections = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $collections[] = $row;
    }
}

echo json_encode($collections);

$conn->close();
?>
