class Estudiantes {
    constructor(nombre, apellido, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    mostrar() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    }
}

class Clase {
    constructor(estudiante1, estudiante2, curso) {
        this.estudiante1 = estudiante1;
        this.estudiante2 = estudiante2;
        this.curso = curso;
    }
    mostrarClase() {
        console.log(`Curso: ${this.curso}`);
        console.log(`${this.estudiante1.nombre} ${this.estudiante1.apellido}`);
        console.log(`${this.estudiante2.nombre} ${this.estudiante2.apellido}`);
    }
}

const estudiante1 = new Estudiantes('Juan', 'Perez');
const estudiante2 = new Estudiantes('Ana', 'María');

const clase1 = new Clase(estudiante1, estudiante2, 'JavaScript');
clase1.mostrarClase();