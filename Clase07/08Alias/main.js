/**ALIAS
 * Durante la desestructuración de un objeto, 
 * pueden decidir dar un nombre diferente (alias) 
 * a las variables donde se asignan los valores. 
 * Este es un recurso muy útil cuando quieren evitar 
 * conflictos de nombres de variables 
 * o si simplemente quieres un nombre que sea más descriptivo 
 * para tu caso de uso.
 */

// Ejemplo 1
let estudiante = {
    nombre: "Alice",
    edad: 20,
};

/** Aquí, estamos desestructurando 'nombre' y 'edad' del objeto 'estudiante',
 * pero estamos usando un alias para 'nombre', que es 'nombreEstudiante'
 */
let { nombre: nombreEstudiante, edad } = estudiante;

console.log(nombreEstudiante); // Alice
console.log(edad); // 20
