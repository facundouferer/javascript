let texto = document.getElementById("texto")
let mensaje = document.getElementById("mensaje")

/**
 * mientras se escribe en un input 
 * de tipo texto no hay evento change, 
 * pero cuando se pasa a otra sección 
 * de la aplicación entonces sí ocurre.
 */
texto.onchange = () => {
    mensaje.innerHTML = "CAMBIO"
}

texto.addEventListener("input", () => {
    mensaje.innerHTML = "escribiendo..."
})