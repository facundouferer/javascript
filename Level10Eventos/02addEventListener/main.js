let btnApretar = document.getElementById("btnApretar")
btnApretar.addEventListener("click", respuestaClick)

function respuestaClick() {
    let mensaje = document.getElementById("mensaje")
    mensaje.innerHTML = "SE PRESIONÓ EL BOTÓN"
}
