let texto = document.getElementById("texto")
let mensaje = document.getElementById("mensaje")

texto.onkeyup = () => {
    mensaje.innerHTML = "SE SOLTÓ"
}

texto.onkeydown = () => {
    mensaje.innerHTML = "SE PRESIONÓ"
}
