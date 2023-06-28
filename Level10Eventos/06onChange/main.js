let texto = document.getElementById("texto")
let mensaje = document.getElementById("mensaje")

texto.onchange = () => {
    mensaje.innerHTML = "CAMBIO"
}

texto.addEventListener("input", () => {
    mensaje.innerHTML = "escribiendo..."
})