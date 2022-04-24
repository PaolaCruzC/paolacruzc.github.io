/* VARIABLES */
var nombre = document.getElementsByName("nombre")[0];
var telefono = document.getElementsByName("telefono")[0];
var email = document.getElementsByName("email")[0];
var mensaje = document.getElementsByName("mensaje")[0];

/* EXEC */
emailjs.init("VZKokmU53l0VGhVHx");
listenToInputChanges();

/* FUNCTION */
function listenToInputChanges() {
  var inputs = [nombre, telefono, email, mensaje];
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", (e) => {
      toggleSendButtonIfNeeded();
    });
  }
}

function areInputValid() {
  // nombre
  var isNombreValid = nombre.value.length > 0;
  // telefono
  var isTelefonoValid = telefono.value.match("[0-9]+");
  // email
  var isEmailValid = email.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");;
  // mensaje
  var isMensajeValid = mensaje.value.length > 0;

  return isNombreValid && isTelefonoValid && isEmailValid && isMensajeValid;
}

function toggleSendButtonIfNeeded() {
  var sendButtonClassList = document.getElementById("contactoEnviarAnchor").classList;

  if (areInputValid()) {
    sendButtonClassList.remove("disabled");
  } else {
    sendButtonClassList.add("disabled");
  }
}

function enviarContacto() {
  emailjs.send("service_0koaf7p","template_xgflfyq",{
    nombre: nombre.value,
    email: email.value,
    telefono: telefono.value,
    mensaje: mensaje.value
  });

  var contactoSection = document.getElementById("contactoSection");
  contactoSection.classList.add("sent");
}
