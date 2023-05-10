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

$data = json_decode($_POST['data']);
$apuesta = $data->bet;
$result = $data->result;

if ($apuesta < 0) {
    $apuestaPerdida = -$apuesta;
} else {
    $apuestaPerdida = 0;
}

$sqlGetID = "SELECT Id FROM Users WHERE Username = '" . $_COOKIE["UserLogged"] . "'";
$compr = $conn->query($sqlGetID);
if ($compr->num_rows >= 1) {
    $user = mysqli_fetch_assoc($compr);
    /* Cambio en la base de datos para actualizar el balance*/
    $SqlUpdateBalanceIDWin = "UPDATE Users SET Balance = Balance + '$apuesta' WHERE Id = '{$user['Id']}'";
    $SqlUpdateBalanceIDLose = "UPDATE Users SET Balance = Balance - '$apuesta' WHERE Id = '{$user['Id']}'";
    /* Cambio en la base de datos para actualizar el balance*/
    $SqlUpdateTableCaraCruzWin = "INSERT INTO CaraCruz_Stats(UserID,BetValue,Result,BetFinal) VALUES('{$user['Id']}','$apuesta','$result','$apuesta'*2)";
    $SqlUpdateTableCaraCruzLose = "INSERT INTO CaraCruz_Stats(UserID,BetValue,Result,BetFinal) VALUES('{$user['Id']}','$apuesta','$result','$apuestaPerdida')";
    if ($result == 1) {
        $QueryWin = $conn->query($SqlUpdateTableCaraCruzWin);
        $QueryBalance = $conn->query($SqlUpdateBalanceIDWin);
    } else {
        $QueryLose = $conn->query($SqlUpdateTableCaraCruzLose);
        $QueryBalance = $conn->query($SqlUpdateBalanceIDLose);
    }
}
?>
