let texto = document.getElementById("texto")
let mensaje = document.getElementById("mensaje")

//Cuando se suelta una tecla.
texto.onkeyup = () => {
    mensaje.innerHTML = "..."
}

//Cuando se presiona.
texto.onkeydown = () => {
    mensaje.innerHTML = "escribiendo..."
}
