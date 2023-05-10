<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Polar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sqlGetID = "SELECT Id FROM Users WHERE Username = '" . $_COOKIE["UserLogged"] . "'";
$compr = $conn->query($sqlGetID);
if ($compr->num_rows >= 1) {
    $user = mysqli_fetch_assoc($compr);

    $SqlCheckAdminUser = "SELECT AdminUser FROM Users WHERE Id = '{$user['Id']}'";
    $compr2 = $conn->query($SqlCheckAdminUser);
    if ($compr2->num_rows >= 1) {
        $AdminCheck = mysqli_fetch_assoc($compr2);

        if (isset($user) && $AdminCheck['AdminUser'] == 1) {
            $SqlCheat = "UPDATE Users SET Balance = Balance+1000 WHERE Id = '{$user['Id']}'";
            $conn->query($SqlCheat);
        } else {
            echo "NOT ADMIN";
        }
    }
} else {
    echo "NOT ADMIN";
}
?>
