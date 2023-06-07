let numeroMaximo = parseInt(prompt("Ingrese un número máximo:")); // Solicita al usuario ingresar el número máximo
let numeroActual = 2; // Inicializa el número actual en 2, el primer número primo

while (numeroActual <= numeroMaximo) { // Bucle while que se ejecuta mientras el número actual sea menor o igual al número máximo ingresado

    let esPrimo = true; // Variable para determinar si el número actual es primo, inicializada en true

    for (let i = 2; i < numeroActual; i++) { // verifica si el número actual es divisible por algún número desde 2 hasta el número actual - 1
        if (numeroActual % i === 0) { // Si la división es exacta, el número no es primo
            esPrimo = false; // Establece la variable esPrimo en false
            break; // Sale del bucle for
        }
    }

    if (esPrimo) { // Si la variable esPrimo es true, significa que el número es primo
        console.log(`${numeroActual} ) ${numeroActual} (PRIMO)`); // Muestra el número actual en la consola
    } else {
        console.log(`${numeroActual} ) ${numeroActual}`)
    }

    numeroActual++; // Incrementa el número actual en 1

}
