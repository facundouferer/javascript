/**
 * Rest parameters se utiliza para representar un número variable de argumentos en una función. 
 * Permite a una función recibir una cantidad indeterminada de argumentos como un array. 
 * Es útil cuando no sabemos cuántos argumentos se pasarán a la función 
 * o cuando queremos evitar tener que definir múltiples parámetros individuales.
 */


function suma(...numeros) {
    /**
     * reduce en el array calcula la suma de todos los elementos. 
     * El método reduce recibe una función de reducción que se ejecuta 
     * en cada elemento del array y acumula un valor resultante. 
     * En este caso, la función de reducción (acc, n) => acc + n 
     * suma cada elemento (n) al acumulador (acc). 
     * El segundo argumento de reduce, 0, es el valor inicial del acumulador.
     * 
     */

    return numeros.reduce((total, num) => total + num, 0);
}

console.log(suma(1, 2, 3, 4, 5));

function concatenar(...strings) {
    return strings.join(' ');
}

console.log(concatenar('Hola', 'a', 'todos', 'desde', 'Coder'));

function encontrarMaximo(...numeros) {
    return Math.max(...numeros);
}

console.log(encontrarMaximo(10, 5, 8, 2, 12));


