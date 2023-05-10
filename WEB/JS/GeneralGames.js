// Funcions extretes de StackOverflow

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function GetBalance() {
    return new Promise(function(resolve, reject) {
      var xmlhttp = new XMLHttpRequest();
      try {
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var balance = parseInt(this.responseText);
            resolve(balance);
          }
        };
        xmlhttp.open("GET", "../PHP/ConsultBalance.php", true);
        xmlhttp.send();
      } catch {
        console.log("FALLA")
        reject(Error("Algo ha fallado")); 
      }
    });
  }

  function SetBalanceTXT() {
    GetBalance()
      .then(function(balance) {
        console.log(balance)
        document.getElementById("Balance").innerHTML = "BALANCE: " + balance;
        console.log("Actualizado")
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }

  function insertData(data) {
    var xmlhttp = new XMLHttpRequest();
    try {
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
      };
      xmlhttp.open("POST", "../PHP/InsertData.php", true);
      xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlhttp.send("data=" + encodeURIComponent(JSON.stringify(data)));
    } catch {
      console.log("Algo ha fallado");
    }
  }


  async function CaraOCruz(Juego){
    document.getElementById("CARA").style.pointerEvents = "none";
    document.getElementById("CRUZ").style.pointerEvents = "none";
    document.getElementById("CARA").style.cursor = "default";
    document.getElementById("CRUZ").style.cursor = "default";
    var apuesta = parseInt(document.getElementById("InputBalance").value);
    if (Number.isNaN(apuesta)){
        alert("Selecciona una cantidad a apostar");
        return;
    }
    try {
        var balance = await GetBalance();
        if (apuesta<=balance && !Number.isNaN(apuesta) && apuesta>0){
            console.log("TA BIEN")
            var Transformacion;
            switch (Juego) {
                case "CARA":
                    Transformacion = 0;
                    
                    break;
                case "CRUZ":
                    Transformacion = 1;
                    break;
            }
            var Resultado = Math.floor(Math.random()*2);
            switch(Resultado){
              case 0:
                document.getElementById("CaraIMG").style.display = "flex";
                break;
              case 1:
                document.getElementById("CruzIMG").style.display = "flex";
                break;
            }
            if (Resultado === Transformacion){
                var data ={
                    bet: apuesta,
                    result: 1 
                } 
                await insertData(data)
                document.getElementById("WinTXT").style.display = "flex";
                await SetBalanceTXT()
                await sleep(5000)
            }else{
                var data ={
                    bet: apuesta,
                    result: 0
                }
                await insertData(data);
                document.getElementById("LoseTXT").style.display = "flex";
                await SetBalanceTXT()
                await sleep(5000)
            }   
            
        }else {
            alert("OYE, APUESTA ALGO CON SENTIDO");
        }
    } catch (error) {
        console.log(error.message);
        alert("Ha ocurrido un error al procesar la apuesta");
    }
    document.getElementById("WinTXT").style.display = "none";
    document.getElementById("LoseTXT").style.display = "none";
    document.getElementById("CARA").style.pointerEvents = "auto";
    document.getElementById("CRUZ").style.pointerEvents = "auto";
    document.getElementById("CARA").style.cursor = "pointer";
    document.getElementById("CRUZ").style.cursor = "pointer";
    document.getElementById("CaraIMG").style.display = "none";
    document.getElementById("CruzIMG").style.display = "none";
}

function CheatBalance(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', '../PHP/Cheat.php',true);
  xmlhttp.onload = function(){
    if (this.status === 200){
      if (this.responseText != "NOT ADMIN"){
        console.log("Cheaty Cheaty jejejeje")
      }
    }else{
      console.log("Not Working :(")
    }
  };
  xmlhttp.send();
  SetBalanceTXT();
}