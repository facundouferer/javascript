// Definir una clase llamada Empleado
class Empleado {
    // Constructor de la clase
    constructor(nombre, edad, cargo, sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

    // Método de la clase para ver el sueldo
    verSueldo() {
        console.log(`El sueldo de ${this.nombre} es ${this.sueldo} dólares.`);
    }

    // Método de la clase para subir el sueldo
    subirSueldo(aumento) {
        this.sueldo += aumento;
        console.log(`El sueldo de ${this.nombre} ha sido aumentado. El nuevo sueldo es ${this.sueldo} dólares.`);
    }

    // Método de la clase para presentarse
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.cargo}.`);
    }
}

// Crear objetos utilizando la clase Empleado
var empleado1 = new Empleado("Juan", 25, "Gerente", 5000);
var empleado2 = new Empleado("María", 30, "Analista", 3000);

// Acceder a las propiedades y llamar a los métodos de los objetos
console.log(empleado1.nombre); // Juan
console.log(empleado2.edad); // 30
empleado1.presentarse(); // Hola, mi nombre es Juan, tengo 25 años y soy Gerente.

empleado1.verSueldo(); // El sueldo de Juan es 5000 dólares.
empleado2.verSueldo(); // El sueldo de María es 3000 dólares.

empleado1.subirSueldo(1000); // El sueldo de Juan ha sido aumentado. El nuevo sueldo es 6000 dólares.
empleado2.subirSueldo(500); // El sueldo de María ha sido aumentado. El nuevo sueldo es 3500 dólares.
