function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacion = document.querySelector('input[name="operacion"]:checked').value;
    var resultado = 0;

    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    }

    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}
