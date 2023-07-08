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
        listaEstudiantes.classList = "row row-cols-3"
        listaEstudiantes.innerHTML = "";
        this.estudiantes.map(estudiante => {
            const columna = document.createElement("div");
            columna.classList = "col";
            const div = document.createElement("div");
            div.classList = "card";
            const titulo = document.createElement("h5");
            titulo.classList = "card-header";
            titulo.innerHTML = `${estudiante.nombre} ${estudiante.apellido}`;
            const info = document.createElement("div");
            info.classList = "card-body";
            const dni = document.createElement("p");
            dni.innerHTML = `DNI: ${estudiante.dni}`;

            const botonEliminar = document.createElement("button");
            botonEliminar.classList = "btn btn-danger";
            botonEliminar.innerHTML = "Eliminar";

            botonEliminar.addEventListener("click", () => {
                this.eliminarEstudiante(estudiante.dni);
                this.listarEstudiantes();
            });

            div.appendChild(titulo);
            info.appendChild(dni);
            info.appendChild(botonEliminar);
            div.appendChild(info);

            columna.appendChild(div);
            listaEstudiantes.appendChild(columna);
        });
    }

    agregarEstudiante(estudiante) {
        if (estudiante.nombre === "" || estudiante.apellido === "" || estudiante.dni === "") {
            error.innerHTML = "Debe completar todos los campos";
            return;
        }
        const estudianteExistente = this.estudiantes.find(e => e.dni === estudiante.dni);
        if (estudianteExistente) {
            error.innerHTML = "Ya hay un estudiante con ese DNI";
            return;
        }
        this.estudiantes.push(estudiante);
        localStorage.setItem("curso", JSON.stringify(this));
        document.getElementById("nombreEstudiante").value = "";
        document.getElementById("apellidoEstudiante").value = "";
        document.getElementById("dniEstudiante").value = "";
    }

    eliminarEstudiante(dniEstudiante) {
        this.estudiantes = this.estudiantes.filter(estudiante => estudiante.dni != dniEstudiante);
        localStorage.setItem("curso", JSON.stringify(this));
    }

}

class Formulario {
    constructor(tipo) {
        this.tipo = tipo;
    }

    construirFormulario() {
        switch (this.tipo) {
            case "nuevo":
                const formEstudiante = document.createElement("form");
                formEstudiante.id = "formEstudiante";

                const inputNombre = document.createElement("input");
                inputNombre.id = "nombreEstudiante";
                inputNombre.type = "text";
                inputNombre.classList = "mb-3 form-control";
                inputNombre.placeholder = "nombre";

                const inputApellido = document.createElement("input");
                inputApellido.id = "apellidoEstudiante";
                inputApellido.type = "text";
                inputApellido.classList = "mb-3 form-control";
                inputApellido.placeholder = "apellido";

                const inputDniEstudiante = document.createElement("input");
                inputDniEstudiante.id = "dniEstudiante";
                inputDniEstudiante.type = "number";
                inputDniEstudiante.classList = "mb-3 form-control";
                inputDniEstudiante.placeholder = "dni";

                const botonAgregar = document.createElement("input"); 1
                botonAgregar.type = "submit";
                botonAgregar.classList = "mb-3 btn btn-primary";
                botonAgregar.value = "NUEVO";

                formEstudiante.appendChild(inputNombre);
                formEstudiante.appendChild(inputApellido);
                formEstudiante.appendChild(inputDniEstudiante);
                formEstudiante.appendChild(botonAgregar);

                document.getElementById("formulario").appendChild(formEstudiante);

                formEstudiante.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const nombreEstudiante = document.getElementById("nombreEstudiante").value;
                    const apellidoEstudiante = document.getElementById("apellidoEstudiante").value;
                    const dniEstudiante = document.getElementById("dniEstudiante").value;
                    const estudiante = new Estudiante(nombreEstudiante, apellidoEstudiante, dniEstudiante);
                    cursoNuevo.agregarEstudiante(estudiante);
                    cursoNuevo.listarEstudiantes();
                });

                break;
            case "editar":
                console.log("editar");
                break;
            default:
                console.log("default");
                break;
        }
    }
}

let cursoNuevo;
let error = document.getElementById("error");

const iniciar = () => {
    let cursoGuardado = localStorage.getItem("curso");
    if (cursoGuardado) {
        cursoGuardado = JSON.parse(cursoGuardado);
        cursoNuevo = new Curso(cursoGuardado.nombre, cursoGuardado.estudiantes);
        cursoNuevo.listarEstudiantes();
    } else {
        cursoNuevo = new Curso("JavaScript", []);
        localStorage.setItem("curso", JSON.stringify(cursoNuevo));
    }
    const formulario = new Formulario("nuevo");
    formulario.construirFormulario();
}

iniciar();
