/**
 * OPERADOR NULLISH COALESCING
 * Devuelve su segundo operando 
 * cuando el primero es null o undefined, 
 * de lo contrario devuelve el primer operando.
 * Sintaxis
 * let resultado = valorA ?? valorB;
 */

// Ejemplo 1

let nombreUsuario;

/**Digamos que el nombre del usuario viene de algún lugar 
 * que puede devolver undefined, 
 * como una búsqueda en la base de datos */
nombreUsuario = undefined

/** Podemos usar ?? para proporcionar un valor predeterminado 
 * en caso de que no se encuentre el nombre del usuario*/
nombreUsuario = nombreUsuario ?? "Invitado";

console.log(nombreUsuario);

// Ejemplo 2

console.log(0 ?? "Nullish")  // 0
console.log(40 ?? "Nullish")  // 40
console.log(null ?? "Nullish")  // Nullish
console.log(undefined ?? "Nullish")  // Nullish
console.log("Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log("" ?? "Nullish")  // ""
console.log(NaN ?? "Nullish")  // NaN
console.log(true ?? "Nullish")  // true
console.log(false ?? "Nullish")  // false