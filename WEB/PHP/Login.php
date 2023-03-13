<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Polar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$usuario = $_POST["Usuario"];
$passwd = sha1($_POST["Passwd"]);

$sqlComprovacion = "SELECT * FROM Users WHERE Username = '$usuario' AND Password = '$passwd'";
$auth = $conn->query($sqlComprovacion);

if ($auth->num_rows >= 1){
    setcookie("UserLogged", $usuario, time() + 3600, "/");
    header("Location: ../HTML/Index.html");
    exit;
} else {
    echo "Usuario o contraseña incorrectos";
}

$conn->close();
?>
