/**
 * OPERADOR TERNARIO
 * Forma más corta de escribir una sentencia if-else. 
 * Es el único operador en JavaScript que toma tres operandos.
 * condición ? expresiónSiVerdadero : expresiónSiFalso;
 */

// Ejemplo 1

let edad = 19

if (edad > 18) {
    alert("Es mayor!")
} else {
    alert("Es menor!")
}

// equivalente en operador ternario
edad > 18 ? alert("Es mayor!") : alert("Es menor!")

// Ejemplo 2

let temperatura = 31
let mendaje = ""

if (temperatura > 30) {
    mensaje = "Día caluroso!"
} else {
    mendaje = "Día agradable"
}

// equivalente en operador ternario con retunr implícito
mensaje = temperatura > 30 ? "Día caluroso!" : "Día agradable"

console.log(mensaje)

/**
 * Pros: 
 * 1) Es más conciso.
 * 2) Es más rápido de escribir.
 * 3) Es más fácil de leer.
 * 
 * Contras: 
 * 1) Menos legible (especialmente con operadores anidados), 
 * 2) No permite múltiples instrucciones.
 * 3) No es adecuado para el control de flujo complejo.
 */