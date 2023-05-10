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
if($compr->num_rows >= 1){
    $user = mysqli_fetch_assoc($compr);
}

if(isset($user)){
    $sqlQuery = "SELECT Balance FROM Users WHERE ID = '$user[Id]'";
    $auth = $conn->query($sqlQuery);
    if ($auth->num_rows >= 1){
        $row = mysqli_fetch_assoc($auth);
        echo $row["Balance"];
    } else {
        echo "Error: No se encontraron resultados.";
    }
} else {
    echo "ERROR";
}
exit;
?>