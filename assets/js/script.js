//Tooltip de Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Alert de mensaje envíado del formulario
let send = document.getElementById('botonEnviar');
send.onclick = e => alert("Mensaje enviado exitosamente");