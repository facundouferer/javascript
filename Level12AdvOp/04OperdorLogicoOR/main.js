/**OPERADOR LÓGICO OR */

// Ejemplo 1

let valMin = 0;
let valMax = 10;

/** Imprime en la consola 
 * el resultado de la operación lógica 'valMin || valMax'.
 * El operador '||' (OR) devuelve el primer valor truthy que encuentra.
 * Si todos los valores son falsy, retorna el último valor evaluado.
 * En este caso, como 'valMin' es 0 (un valor falsy), 
 * se ignora y se devuelve 'valMax' que es 10 (un valor truthy).
*/

console.log(valMin || valMax); // Se imprime 10 en la consola.

/**
 * VALORES "falsy":
 * false
 * 0 y -0
 * "" (una cadena de texto vacía)
 * null
 * undefined
 * NaN (Not a Number)
 */

// Ejemplo 2

console.log(-1 || "Falsy")  // -1
console.log(0 || "Falsy")  // Falsy
console.log("" || "Falsy")  // Falsy
console.log(" " || "Falsy")  // " " (un espacio es un valor truthy)
console.log(undefined || "Falsy")  // Falsy
console.log("OpenAI" || "Falsy")  // OpenAI
console.log([] || "Falsy")  // [] (un array vacío es un valor truthy)
console.log({} || "Falsy")  // {} (un objeto vacío es un valor truthy)
console.log(NaN || "Falsy")  // Falsy
console.log(true || "Falsy")  // true
console.log(false || "Falsy")  // Falsy
