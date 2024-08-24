let opcion;
let numero1, numero2;
let resultado;

do {
    opcion = parseInt(prompt(
        "Selecciona una opción:\n" + // caracter de escape \n es un salto de línea
        "1. Suma\n" +
        "2. Resta\n" +
        "3. Multiplicación\n" +
        "4. División\n" +
        "5. Salir"
    ));

    if (opcion >= 1 && opcion <= 4) {
        numero1 = parseFloat(prompt("Ingrese el primer número:"));
        numero2 = parseFloat(prompt("Ingrese el segundo número:"));

        switch (opcion) {
            case 1:
                resultado = numero1 + numero2;
                console.log("La suma es: " + resultado);
                break;
            case 2:
                resultado = numero1 - numero2;
                console.log("La resta es: " + resultado);
                break;
            case 3:
                resultado = numero1 * numero2;
                console.log("La multiplicación es: " + resultado);
                break;
            case 4:
                resultado = numero1 / numero2;
                console.log("La división es: " + resultado);
                break;
        }
    } else if (opcion === 5) {
        console.log("Saliendo del programa...");
    } else {
        console.log("Opción inválida");
    }
} while (opcion !== 5);

console.log("Fin del programa.");
