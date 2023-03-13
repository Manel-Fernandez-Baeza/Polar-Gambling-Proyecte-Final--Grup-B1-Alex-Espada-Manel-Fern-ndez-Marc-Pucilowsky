function ClickNav(id_clicada) {
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
  window.location.replace("../HTML/Index.html");
}
function NavJuegos() {
  var id = document.getElementById("BarraJuegos");
  if (id.style.display === "none" || id.style.display === "") {
    id.style.display = "flex";
  } else {
    id.style.display = "none";
  }
}

function NavLoginRegister() {
  console.log("Hola");
  window.location.replace("../HTML/Register.html");
}
