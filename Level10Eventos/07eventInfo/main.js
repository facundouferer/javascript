let formulario = document.getElementById("formulario")
let mensaje = document.getElementById("mensaje")

formulario.addEventListener("submit", (e) => {
    /**
     * evita el comportamiento por defecto de un evento. 
     * aquí se utiliza para evitar que la página se recargue 
     * cuando se hace clic en el botón de envío.
     */
    e.preventDefault()
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    mensaje.innerHTML = `Hola ${nombre.value} ${apellido.value}`
});