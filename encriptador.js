const regex = new RegExp(/^[a-z]+$/);

//Sirve para encriptar el texto ingresado
function encriptar() {
  var textoIngresado = document.getElementById("texto-area").value;
  if (textoIngresado != "") {
    if (regex.test(textoIngresado)) {
      //Importante: No cambiar el orden de los replacesAll
      let textoEncriptado = textoIngresado
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
      document.getElementById("imagen").style.display = "none";
      document.getElementById("no-encontrado").style.visibility = "hidden";
      document.getElementById("ingrese-texto").style.visibility = "hidden";
      document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
      document.getElementById("texto-encriptado").style.visibility = "visible";
      document.getElementById("boton-copiar").style.visibility = "visible";
    } else {
      alert("Ingrese solo letras minúsculas sin acentuacion");
    }
  } else {
    alert("Ingresa una frase");
  }
}

//Funcion para desencriptar el texto
function desencriptar() {
  var textoIngresado = document.getElementById("texto-area").value;
  if (textoIngresado != "") {
    if (regex.test(textoIngresado)) {
      textoCifrado = textoIngresado
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
      document.getElementById("imagen").style.display = "none";
      document.getElementById("no-encontrado").style.visibility = "hidden";
      document.getElementById("ingrese-texto").style.visibility = "hidden";
      document.getElementById("texto-encriptado").innerHTML = textoCifrado;
      document.getElementById("texto-encriptado").style.visibility = "visible";
      document.getElementById("boton-copiar").style.visibility = "visible";
    } else {
      alert("Ingrese solo letras minúsculas sin acentuacion");
    }
  } else {
    alert("Ingresa una frase");
  }
}

//Funcion para copiar el texto encriptado y poderlo pegar en la entreda de texto
function copiarTexto() {
  let textoEncriptado;
  var content = document.getElementById("texto-encriptado");
  if (textoEncriptado == "") {
    alert("No hay mensaje que copiar");
  } else {
    content.select();
    document.execCommand("copy");
    alert("Texto Copiado");
  }
}
