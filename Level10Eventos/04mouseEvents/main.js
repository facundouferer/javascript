let cuadradoRojo = document.getElementById("cuadradoRojo")
let cuadradoAzul = document.getElementById("cuadradoAzul")

cuadradoAzul.onclick = () => {
    cuadradoAzul.innerHTML = "<h1>CLICK</h1>"
}

cuadradoAzul.onmousemove = () => {
    cuadradoAzul.innerHTML = "<h1>SOBRE</h1>"
}

cuadradoAzul.onmouseout = () => {
    cuadradoAzul.innerHTML = "<h1>FUERA</h1>"
}

cuadradoRojo.onmousemove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cuadradoRojo.innerHTML = `<h1>(${x}, ${y})</h1>`;
}

cuadradoRojo.onmousedown = () => {
    cuadradoRojo.innerHTML = "<h1>CLICK</h1>"
}

cuadradoRojo.onmouseup = () => {
    cuadradoRojo.innerHTML = "<h1>LEVANTAR</h1>"
}