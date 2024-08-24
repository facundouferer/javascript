let numeros = [];
let suma = 0;
function agregarNumero() {
    const numeroInput = document.getElementById("numero");
    const numero = parseFloat(numeroInput.value);
    if (numero !== 0) {
        numeros.push(numero);
        numeroInput.value = "";
        // Actualizar la lista de números en el DOM
        const numerosLista = document.getElementById("numeros-lista");
        const numeroItem = document.createElement("li");
        numeroItem.textContent = numero;
        numerosLista.appendChild(numeroItem);
    }
}
function calcularSuma() {
    while (numeros.length > 0) {
        suma += numeros.pop();
    }
    document.getElementById("resultado").textContent = "La suma es: " + suma;
}
