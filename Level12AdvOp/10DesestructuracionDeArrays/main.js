/**
 * DESESTRUCTURACIÓN DE ARRAYS
 * La desestructuración de arrays 
 * es una característica que permite extraer 
 * los elementos de un array y asignarlos 
 * a variables individuales de una forma más limpia y concisa. 
 */

// Ejemplo 1: desestructuración básica
let frutas = ["manzana", "banana", "cereza", "damasco", "frambuesa"];

let [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); // "manzana"
console.log(fruta2); // "banana"
console.log(fruta3); // "cereza"

// Ejemplo 2: omitir la primera fruta

let [a, ...restoDeFrutas] = frutas;

console.log(a); // "manzana"
console.log(restoDeFrutas); // ["banana", "cereza", "damasco", "frambuesa"]

// Ejemplo 3: omitir las 2 primeras frutas
let [, , c, d] = frutas;

console.log(c); // "cereza"
console.log(d); // "damasco"

