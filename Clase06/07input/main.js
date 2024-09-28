let textoIngreso = document.getElementById("textoIngreso");

textoIngreso.addEventListener("input", () => {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = textoIngreso.value;
});