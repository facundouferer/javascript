let numeroMaximo = parseInt(prompt("Ingrese un número máximo:"));
let numeroActual = 2;

while (numeroActual <= numeroMaximo) {

    let esPrimo = true;

    for (let i = 2; i < numeroActual; i++) {
        if (numeroActual % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(`${numeroActual} ) ${numeroActual} (PRIMO)`);
    } else {
        console.log(`${numeroActual} ) ${numeroActual}`)
    }

    numeroActual++;

}
