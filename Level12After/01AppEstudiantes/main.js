class Estudiante {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

class Curso {
    constructor(nombre, estudiantes) {
        this.nombre = nombre;
        this.estudiantes = estudiantes;
    }

    listarEstudiantes() {
        const listaEstudiantes = document.getElementById("listaEstudiantes");
        listaEstudiantes.classList = "row row-cols-1 row-cols-md-2 g-4";
        listaEstudiantes.innerHTML = "";
        this.estudiantes.map(estudiante => {
            const columna = document.createElement("div");
            columna.classList = "col";
            const div = document.createElement("div");
            div.classList = "card";
            const titulo = document.createElement("h5");
            titulo.classList = "card-title";
            titulo.innerText = `${estudiante.nombre} ${estudiante.apellido}`;
            const subtitulo = document.createElement("h6");
            subtitulo.classList.add("card-subtitle", "mb-2", "text-body-secondary");
            subtitulo.innerText = estudiante.dni;
            const botonEliminar = document.createElement("button");
            botonEliminar.classList.add("btn", "btn-danger");
            botonEliminar.innerText = "Eliminar";
            botonEliminar.addEventListener("click", () => {
                this.eliminarEstudiante(estudiante.dni);
                this.listarEstudiantes();
            });

            div.appendChild(titulo);
            div.appendChild(subtitulo);
            div.appendChild(botonEliminar);
            columna.appendChild(div);
            listaEstudiantes.appendChild(columna);
        });
    }


    agregarEstudiante(estudiante) {
        if (estudiante.nombre === "" || estudiante.apellido === "" || estudiante.dni === "") {
            alert("Debe ingresar todos los datos");
            return;
        }
        this.estudiantes.push(estudiante);
        document.getElementById("nombreEstudiante").value = "";
        document.getElementById("apellidoEstudiante").value = "";
        document.getElementById("dniEstudiante").value = "";
        console.log(this.estudiantes);
        localStorage.setItem("curso", JSON.stringify(this));
    }

    eliminarEstudiante(dniEstudiante) {
        this.estudiantes = this.estudiantes.filter(estudiante => estudiante.dni !== dniEstudiante);
        localStorage.setItem("curso", JSON.stringify(this));
    }

}

let cursoNuevo;

const iniciar = () => {
    let cursoGuardado = localStorage.getItem("curso");
    if (cursoGuardado) {
        cursoGuardado = JSON.parse(cursoGuardado);
        let estudiantes = cursoGuardado.estudiantes.map(estudiante => new Estudiante(estudiante.nombre, estudiante.dni, estudiante.apellido));
        cursoNuevo = new Curso(cursoGuardado.nombre, estudiantes);
        cursoNuevo.listarEstudiantes();
    } else {
        cursoNuevo = new Curso("Curso de JavaScript", []);
        localStorage.setItem("curso", JSON.stringify(cursoNuevo));
    }
    const formEstudiante = document.getElementById("formEstudiante");
    formEstudiante.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombreEstudiante = document.getElementById("nombreEstudiante").value;
        const apellidoEstudiante = document.getElementById("apellidoEstudiante").value;
        const dniEstudiante = document.getElementById("dniEstudiante").value;
        const estudiante = new Estudiante(nombreEstudiante, apellidoEstudiante, dniEstudiante);
        cursoNuevo.agregarEstudiante(estudiante);
        cursoNuevo.listarEstudiantes();
    });
}

iniciar();
