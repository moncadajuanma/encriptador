// Expresion regular que valida solo letras minusculas y el caracter espacio
const regex = new RegExp(/^[a-z\s]+$/);

//Sirve para encriptar el texto ingresado
function encriptar() {
  var textoIngresado = document.getElementById("textarea-entrada").value;
  if (textoIngresado != "") {
    if (regex.test(textoIngresado)) {
      //Importante: No cambiar el orden de los replacesAll
      let textoEncriptado = textoIngresado
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
      document.getElementById("imagen-texto").style.display = "none";
      document.getElementById("textarea-encriptado").textContent = textoEncriptado;
      document.getElementById("textarea-boton").style.display = "flex";
      document.getElementById("textarea-entrada").value = "";
    } else {
      // Notificacion sweetAlert2
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ingrese solo letras minúsculas sin acentuacion',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } else {
    // Notificacion sweetAlert2
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Ingresa una frase',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

//Funcion para desencriptar el texto
function desencriptar() {
  var textoIngresado = document.getElementById("textarea-entrada").value;
  if (textoIngresado != "") {
    if (regex.test(textoIngresado)) {
      textoCifrado = textoIngresado
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
        document.getElementById("imagen-texto").style.display = "none";
        document.getElementById("textarea-encriptado").textContent = textoCifrado;
        document.getElementById("textarea-boton").style.display = "flex";
        document.getElementById("textarea-entrada").value = "";
    } else {
      // Notificacion sweetAlert2
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ingrese solo letras minúsculas sin acentuacion',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } else {
    // Notificacion sweetAlert2
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Ingresa una frase',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

//Funcion para copiar el texto encriptado y poderlo pegar en la entrada de texto
function copiarTexto() {
  var textoEncriptado = document.getElementById("textarea-encriptado");
  if (textoEncriptado.value == "") {
    // Notificacion sweetAlert2
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'No hay mensaje que copiar',
      showConfirmButton: false,
      timer: 1500
    })
  } else {
    textoEncriptado.select();
    document.execCommand("copy");
    // Notificacion sweetAlert2
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Texto copiado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
