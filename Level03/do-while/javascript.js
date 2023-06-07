
let numeroAdivinar = 25;
let intentos = 0;
let numeroIngresado;

do {
    numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 10):"));
    intentos++;

    if (numeroIngresado === numeroAdivinar) {
        alert("¡Felicitaciones! Adivinaste el número.");
        break;
    }

    alert("Número incorrecto. Intenta de nuevo.");
} while (true);

alert("Fin del programa.");
