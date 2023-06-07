// Definir una clase llamada Persona
class Persona {
    // Constructor de la clase
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método de la clase
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear objetos utilizando la clase Persona
var persona1 = new Persona("Juan", 25);
var persona2 = new Persona("María", 30);

// Acceder a las propiedades y llamar a los métodos de los objetos
console.log(persona1.nombre); // Juan
console.log(persona2.edad); // 30
persona1.saludar(); // Hola, mi nombre es Juan y tengo 25 años.
persona2.saludar(); // Hola, mi nombre es María y tengo 30 años.
