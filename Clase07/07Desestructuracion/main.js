/**
 * DESESTRUCTURACIÓN
 * permite extraer propiedades de un objeto 
 * y asignarlas a variables individuales
 */

// Ejemplo 1
let estudiante = {
    nombre: "Alice",
    edad: 20,
    grado: "Primero",
    direccion: {
        calle: "Calle 1",
        numero: 123,
        ciudad: "Ciudad 1"
    }
};

/**
 * Esto: 
 * let nombre = estudiante.nombre;
 * let edad = estudiante.edad;
 * puede ser reemplazado por:
 */

let { nombre, edad, grado, direccion: { calle } } = estudiante;

/**
 * Los nombres de las variables 
 * deben coincidir exactamente con los nombres 
 * de las propiedades que queremos obtener del objeto.
 */

console.log(nombre); // Alice
console.log(edad); // 20
console.log(grado); // Primero
console.log(calle); // Calle 1
