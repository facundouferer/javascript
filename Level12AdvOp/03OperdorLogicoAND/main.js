/**OPERADOR LÓGICO AND (&&):
 * Es una reducción de un condicional, 
 * Se ejecuta o retornar algo si la condición es verdadera, 
 * reduce un if sencillo con un solo bloque de ejecución:
 */

// Ejemplo 1
let edad = 19

if (edad > 18) {
    console.log("IF: Es mayor!")
}

// equivalente en operador lógico
edad > 18 && console.log("Op Logico: Es mayor!")

// Ejemplo 2

let temperatura = 31;

let mensaje = "";

/** Actualizas 'mensaje' con el resultado de una operación lógica. 
 * La expresión 'temperatura > 30' comprobará si la temperatura 
 * es mayor a 30.
 * Si es así, la expresión después del operador '&&' se asignará 
 * a 'mensaje'. Si no, 'mensaje' permanecerá como una cadena vacía.
 * Esto es porque el operador '&&' sólo continuará 
 * a la segunda operación si la primera es verdadera..
*/
mensaje = temperatura > 30 && "Día caluroso!";

console.log(mensaje);
