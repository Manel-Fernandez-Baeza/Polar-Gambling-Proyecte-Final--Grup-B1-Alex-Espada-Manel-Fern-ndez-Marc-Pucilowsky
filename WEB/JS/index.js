function ClickNav(id_clicada) {
  // Funcio botons del nav
  console.log(id_clicada);
  switch (id_clicada) {
    case "Inicio":
      NavInicio();
      break;
    case "Juegos":
      CloseMenus("BarraJuegos");
      NavJuegos();
      break;
    case "Login-register":
      NavLoginRegister();
      break;
    case "QuienesSomos":
      CloseMenus("QuienesSomosMenu");
      QuienesSomos();
      break;
    case "About":
      CloseMenus("AboutMenu");
      AboutUs();
      break;
    case "Contacto":
      CloseMenus("ContactoMenu");
      Contacto();
      break;
  }
}

function ClickJuegos(id_clicada) {
  switch (id_clicada) {
    case "Ruleta":
      window.location.replace("../HTML/Ruleta.html");
      break;
    case "Cara-Cruz":
      window.location.replace("../HTML/CaraCruz.html");
      break;
    case "Slots":
      window.location.replace("../HTML/Slots.html");
      break;
    case "Crash":
      window.location.replace("../HTML/Crash.html");
      break;
  }
}

function NavInicio() {
  window.location.replace("../HTML/Index.html"); // redirecciona a l'index.html
}
function CloseMenus(element) {
  var BarraJuegos = document.getElementById("BarraJuegos");
  var QuienesSomos = document.getElementById("QuienesSomosMenu");
  var AboutUs = document.getElementById("AboutMenu");
  var Contacto = document.getElementById("ContactoMenu");
  console.log(element);
  switch (element) {
    case (element = "BarraJuegos"):
      QuienesSomos.style.display = "none";
      AboutUs.style.display = "none";
      Contacto.style.display = "none";
      break;
    case (element = "QuienesSomosMenu"):
      BarraJuegos.style.display = "none";
      AboutUs.style.display = "none";
      Contacto.style.display = "none";
      break;
    case (element = "AboutMenu"):
      QuienesSomos.style.display = "none";
      BarraJuegos.style.display = "none";
      Contacto.style.display = "none";
      break;
    case (element = "ContactoMenu"):
      QuienesSomos.style.display = "none";
      BarraJuegos.style.display = "none";
      AboutUs.style.display = "none";
      break;
  }
}

function NavJuegos() {
  var id = document.getElementById("BarraJuegos");
  if (id.style.display === "none" || id.style.display === "") {
    // si l'estil display equival a none o a "" (per la primera vegada que visitres la pag ) cambia l'estat a flex
    id.style.display = "flex";
  } else {
    // si el diplay es flex el cambia a none
    id.style.display = "none";
  }
}
function QuienesSomos() {
  var id = document.getElementById("QuienesSomosMenu");
  if (id.style.display === "none" || id.style.display === "") {
    // si l'estil display equival a none o a "" (per la primera vegada que visitres la pag ) cambia l'estat a flex
    id.style.display = "flex";
  } else {
    // si el diplay es flex el cambia a none
    id.style.display = "none";
  }
}
function AboutUs() {
  var id = document.getElementById("AboutMenu");
  if (id.style.display === "none" || id.style.display === "") {
    // si l'estil display equival a none o a "" (per la primera vegada que visitres la pag ) cambia l'estat a flex
    id.style.display = "flex";
  } else {
    // si el diplay es flex el cambia a none
    id.style.display = "none";
  }
}
function Contacto() {
  var id = document.getElementById("ContactoMenu");
  if (id.style.display === "none" || id.style.display === "") {
    // si l'estil display equival a none o a "" (per la primera vegada que visitres la pag ) cambia l'estat a flex
    id.style.display = "flex";
  } else {
    // si el diplay es flex el cambia a none
    id.style.display = "none";
  }
}

function NavLoginRegister() {
  window.location.replace("../HTML/Register.html"); // Redireccionem a l'html de registre
}
