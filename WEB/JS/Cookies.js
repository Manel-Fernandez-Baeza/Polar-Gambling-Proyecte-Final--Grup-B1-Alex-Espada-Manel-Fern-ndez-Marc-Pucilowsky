
// Funció extreta de W3Schools: https://www.w3schools.com/js/js_cookies.asp 
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = document.cookie;
    let ca = decodedCookie.split(';');
    console.log(document.cookie)
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log(c.substring(name.length, c.length));
        return c.substring(name.length, c.length);
      }
    }
    console.log("No existe");
    return "";
  }
  
  function LoginAuth(){
    if (getCookie("UserLogged") != ""){
        boton = document.getElementById("Login-register")
        boton.innerHTML=getCookie("UserLogged"); 
        
    }else{
        console.log("No User Logged")
    }
  }

  function GameLoginChecker(){
   if (getCookie("UserLogged") == ""){
    window.location.replace("../HTML/Register.html");
   } 
}

function StartGames(){
  LoginAuth()
  GameLoginChecker()
}