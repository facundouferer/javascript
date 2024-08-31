// Solicitar al usuario ingresar uno o más valores
let valor1 = prompt("Ingrese el primer valor:");
let valor2 = prompt("Ingrese el segundo valor:");

// Comparar las entradas y mostrar el resultado según las condiciones
if (valor1 === valor2) {
    console.log("Los valores son iguales.")
} else if (valor1 > valor2) {
    console.log(
        `El primer valor (${valor1}) es mayor que el segundo valor (${valor2}).`
    )
} else {
    alert(
        `El segundo valor (${valor2}) es mayor que el primer valor (${valor1}).`
    )
}