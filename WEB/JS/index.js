function ClickNav(id_clicada) { // Funcio botons del nav
  switch (id_clicada) {
    case "Inicio":
      NavInicio();
      break;
    case "Juegos":
      NavJuegos();
      break;
    case "Login-register":
      console.log("CLICK");
      NavLoginRegister();
      break;
  }
}

function NavInicio() {
  window.location.replace("../HTML/Index.html"); // redirecciona a l'index.html
}
function NavJuegos() {
  var id = document.getElementById("BarraJuegos"); 
  if (id.style.display === "none" || id.style.display === "") { // si l'estil display equival a none o a "" (per la primera vegada que visitres la pag ) cambia l'estat a flex
    id.style.display = "flex";
  } else { // si el diplay es flex el cambia a none
    id.style.display = "none";
  }
}

function NavLoginRegister() {
  window.location.replace("../HTML/Register.html"); // Redireccionem a l'html de registre
}
