function VerificarCampos() {
  User = document.getElementById("Usuario").value;
  Passwd = document.getElementById("Passwd").value;
  Passwd2 = document.getElementById("verPasswd").value;
  email = document.getElementById("mail").value;
  edad = document.getElementById("edad").value;

  if (Passwd != Passwd2) {
    alert("LAS CONTRASEÑAS NO COINCIDEN!!!");
    return false;
  }
  if (edad < 18) {
    alert("NO PUEDES ENTRAR SI ERES MENOR DE EDAD");
    return false;
  }
  return true;
}
