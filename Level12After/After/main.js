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

            const botonEditar = document.createElement("button");
            botonEditar.classList.add("btn", "btn-warning");
            botonEditar.innerText = "Editar";
            botonEditar.addEventListener("click", () => {
                this.editarEstudiante(estudiante.dni);
                this.listarEstudiantes();
            });

            div.appendChild(titulo);
            div.appendChild(subtitulo);
            div.appendChild(botonEliminar);
            div.appendChild(botonEditar);
            columna.appendChild(div);
            listaEstudiantes.appendChild(columna);
        });
    }

    agregarEstudiante(estudiante) {
        // Comprobar que se ingresen todos los datos
        if (estudiante.nombre === "" || estudiante.apellido === "" || estudiante.dni === "") {
            error.innerText = "Debe ingresar todos los datos";
            return;
        }
        // Comprobar si existe un estudiante con el mismo DNI
        const estudianteExistente = this.estudiantes.find(e => e.dni === estudiante.dni);
        if (estudianteExistente) {
            error.innerText = "Ya existe un estudiante con ese DNI";
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

    editarEstudiante(dni) {
        const estudiante = this.estudiantes.find(estudiante => estudiante.dni === dni);
        const nombreEstudiante = document.getElementById("nombreEstudiante");
        const apellidoEstudiante = document.getElementById("apellidoEstudiante");
        const dniEstudiante = document.getElementById("dniEstudiante");
        nombreEstudiante.value = estudiante.nombre;
        apellidoEstudiante.value = estudiante.apellido;
        dniEstudiante.value = estudiante.dni;
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
                inputNombre.type = "text";
                inputNombre.id = "nombreEstudiante";
                inputNombre.placeholder = "nombre";
                const inputApellido = document.createElement("input");
                inputApellido.type = "text";
                inputApellido.id = "apellidoEstudiante";
                const inputDniEstudiante = document.createElement("input");
                inputDniEstudiante.type = "text";
                inputDniEstudiante.id = "dniEstudiante";
                const botonAgregar = document.createElement("button");
                botonAgregar.type = "submit";
                botonAgregar.innerText = "Agregar";
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
        // transforma los objetos literales en instancias de Estudiante
        let estudiantes = cursoGuardado.estudiantes.map(estudiante => new Estudiante(estudiante.nombre, estudiante.apellido, estudiante.dni));
        cursoNuevo = new Curso(cursoGuardado.nombre, estudiantes);
        cursoNuevo.listarEstudiantes();
    } else {
        cursoNuevo = new Curso("Curso de JavaScript", []);
        localStorage.setItem("curso", JSON.stringify(cursoNuevo));
    }
    const formulario = new Formulario("nuevo");
    formulario.construirFormulario();
}

iniciar();
