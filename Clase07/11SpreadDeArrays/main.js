// Programa para explicar el operador spread (...) con arrays en JavaScript

// 1. Copiar un array
console.log("1. Copiar un array:");
const original = [1, 2, 3];
const copia = [...original];
console.log("Original:", original);
console.log("Copia:", copia);
console.log("¿Son el mismo array?", original === copia);

// 2. Combinar arrays
console.log("\n2. Combinar arrays:");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Combinado:", combinado);

// 3. Agregar elementos a un nuevo array
console.log("\n3. Agregar elementos a un nuevo array:");
const base = [1, 2, 3];
const conNuevosElementos = [...base, 4, 5];
console.log("Base:", base);
console.log("Con nuevos elementos:", conNuevosElementos);

// 4. Pasar elementos de un array como argumentos a una función
console.log("\n4. Pasar elementos de un array como argumentos a una función:");
function sumarTresNumeros(a, b, c) {
  return a + b + c;
}
const numeros = [1, 2, 3];
console.log("Números:", numeros);
console.log("Suma:", sumarTresNumeros(...numeros));

// 5. Crear una copia de un array con modificaciones
console.log("\n5. Crear una copia de un array con modificaciones:");
const original2 = [1, 2, 3, 4, 5];
const modificado = [...original2.slice(0, 2), 10, ...original2.slice(3)];
console.log("Original:", original2);
console.log("Modificado:", modificado);