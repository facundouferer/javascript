class Estudiante {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.id = this.crearIDaleatorio();
    }

    verDatos() {
        return `ID: ${this.id}
        Nombre: ${this.nombre}
        Fecha de Nacimiento: ${this.fechaNacimiento.toLocaleDateString()}
        Edad: ${this.calcularEdad()}`;
    }

    crearIDaleatorio() {
        return Math.floor(Math.random() * 1000);
    }

    calcularEdad() {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        let m = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return ` ${edad} años`;
    }

}

class Curso {
    constructor(nombre) {
        this.nombre = nombre;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    verDatos() {
        return `Curso: ${this.nombre}
        Cant. Estudiantes: ${this.estudiantes.length}`;
    }

    verEstudiantes() {
        let datosEstudiantes = "";
        this.estudiantes.forEach(estudiante => {
            datosEstudiantes += `${estudiante.verDatos()} \n`;
        });
        return datosEstudiantes;
    }

    verEstudiante(id) {
        let estudiante = this.estudiantes.find(estudiante => estudiante.id === id);
        if (estudiante) {
            return estudiante.verDatos();
        } else {
            return `No existe estudiante con ID ${id}`;
        }
    }

    verEstudiantePorNombre(nombre) {
        //buscar estudiante por nombre
    }

    modificarEstudiante(id, nombre, fechaNacimiento) {
        let estudiante = this.estudiantes.find(estudiante => estudiante.id === id);
        estudiante.nombre = nombre;
        estudiante.fechaNacimiento = fechaNacimiento;
    }

    eliminarEstudiante(id) {
        let estudiante = this.estudiantes.find(estudiante => estudiante.id === id);
        let index = this.estudiantes.indexOf(estudiante);
        this.estudiantes.splice(index, 1);
    }

}

function administrarEstudiantes() {
    let curso = new Curso("Programación");
    let opcion = "";
    let estudiante = "";
    let id = 0;
    let nombre = "";
    let fechaNacimiento = "";
    let fechaIngresada = "";
    do {
        opcion = prompt(`Seleccione una opción:
        1. Agregar estudiante
        2. Ver datos del curso
        3. Listar Estudiantes
        4. Ver datos de un estudiante
        5. Eliminar estudiante
        6. Modificar estudiante
        99. Salir`);
        switch (opcion) {
            case "1":
                nombre = prompt("Ingrese su nombre");
                fechaIngresada = prompt("Ingrese su fecha de nacimiento (aaaa-mm-dd)");
                fechaNacimiento = new Date(fechaIngresada);
                estudiante = new Estudiante(nombre, fechaNacimiento);
                curso.agregarEstudiante(estudiante);
                break;
            case "2":
                alert(curso.verDatos());
                break;
            case "3":
                alert(curso.verEstudiantes());
                break;
            case "4":
                id = parseInt(prompt("Ingrese el ID del estudiante"));
                alert(curso.verEstudiante(id));
                break;
            case "5":
                id = parseInt(prompt("Ingrese el ID del estudiante a eliminar"));
                curso.eliminarEstudiante(id);
                break;
            case "6":
                id = parseInt(prompt("Ingrese el ID del estudiante a modificar"));
                nombre = prompt("Ingrese su nombre");
                fechaIngresada = prompt("Ingrese su fecha de nacimiento (aaaa-mm-dd)");
                fechaNacimiento = new Date(fechaIngresada);
                curso.modificarEstudiante(id, nombre, fechaNacimiento);
                break;
            case "99":
                break;
            default:
                alert("Opción inválida");
                break;
        }
    } while (opcion !== "99");
}

administrarEstudiantes();

