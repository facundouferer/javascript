// Definimos una función de orden superior llamada porCadaUno que recibe un arreglo (arr) y una función (fn) como parámetros.
function porCadaUno(arr, fn) {
    // Iteramos sobre cada elemento del arreglo utilizando un bucle for...of.
    for (const el of arr) {
        // Llamamos a la función (fn) pasando cada elemento del arreglo como argumento.
        fn(el);
    }
}

// Creamos un arreglo de números.
const numeros = [1, 2, 3, 4];

// Llamamos a la función de orden superior porCadaUno pasando el arreglo de números (numeros) y la función console.log como argumentos.
// La función console.log se pasa como una referencia de función, no se invoca directamente con paréntesis.
porCadaUno(numeros, console.log);
