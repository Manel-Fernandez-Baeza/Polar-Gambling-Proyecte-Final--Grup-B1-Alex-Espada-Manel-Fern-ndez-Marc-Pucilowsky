<?php
$servername = "localhost";
$username = "PolarAdmin01";
$password = "Admin01";
$dbname = "Polar";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
$conn->close();
?>