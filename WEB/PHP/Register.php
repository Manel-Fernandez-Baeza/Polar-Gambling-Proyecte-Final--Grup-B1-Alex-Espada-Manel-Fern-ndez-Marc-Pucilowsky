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

$usuario = $_POST["Usuario"];
$passwd = sha1($_POST["Passwd"]);
$verPasswd = sha1($_POST["verPasswd"]);
$mail = $_POST["mail"];
$age = $_POST["edad"];


$sqlauthUser = "SELECT Username FROM Users WHERE Username = '$usuario' OR MailAccount = '$mail'";
$auth = $conn->query($sqlauthUser);
if ($auth->num_rows == 0){
    $sqlconsult = "INSERT INTO Users(Username,Password,MailAccount,Balance,UserAge,AdminUser) VALUES('$usuario','$passwd','$mail',1000,'$age',0)";
    $resultado = $conn->query($sqlconsult);
    $Userid = $conn->query( "SELECT ID FROM Users WHERE Username = '$usuario' AND Password = '$passwd'");
    $_SESSION["USERID"]=$Userid;
    setcookie("UserLogged", $usuario, time() + 3600, "/","",false,false);
    header("Location: ../HTML/RegisterDone.html");
    exit;
} else {
    echo "Nombre de usuario o correo ya registrado"; 
    $conn->close();
}

$conn->close();
?>