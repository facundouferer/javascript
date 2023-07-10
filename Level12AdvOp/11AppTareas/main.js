
class Tarea {
    constructor(texto, fechaLimite) {
        this.texto = texto;
        this.fecha = new Date();
        this.fechaLimite = fechaLimite ? new Date(fechaLimite) : new Date();
    }
    mostrarFecha() {
        let fecha = this.fecha;
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let anio = fecha.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }
    mostrarFechaLimite() {
        let fechaLimite = new Date(this.fechaLimite);
        let dia = fechaLimite.getDate();
        let mes = fechaLimite.getMonth() + 1;
        let anio = fechaLimite.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }
}

const agregarTarea = (e) => {
    e.preventDefault();
    let inputTareaNueva = document.getElementById("inputTareaNueva");
    let fechaLimite = document.getElementById("fechaLimite").value;
    if (inputTareaNueva.value != "" || fechaLimite.value != "") {
        let tarea = new Tarea(inputTareaNueva.value, fechaLimite);
        tareas.push(tarea);
        inputTareaNueva.value = "";
        fechaLimite.value = "";
        mostrarTareas();
        mostrarResumen();
        formulario.classList = "d-none";
    }
}

const mostrarTareas = () => {
    contenido.innerHTML = "";
    tareas.forEach(tarea => {
        let cardTarea = document.createElement("div");
        cardTarea.classList = "col-sm-4 mb-3";
        cardTarea.innerHTML += `
        <div class="card">
            <h5 class="card-header">${tarea.mostrarFecha()}</h5>
            <div class="card-body">
                <h5 class="card-title">Fecha límite: ${tarea.mostrarFechaLimite()}</h5>
                <p class="card-text">${tarea.texto}</p>
                <button class="btn btn-danger btnEliminar">Eliminar</button>                
            </div>
        </div>`;
        let btnEliminar = cardTarea.querySelector(".btnEliminar");
        btnEliminar.addEventListener("click", () => eliminarTarea(tarea));
        contenido.appendChild(cardTarea);
    });
};


const eliminarTarea = (tarea) => {
    let index = tareas.indexOf(tarea);
    tareas.splice(index, 1);
    mostrarTareas();
    mostrarResumen();
}

const mostrarResumen = () => {
    let resumen = document.getElementById("resumen");
    if (tareas.length > 0) {
        resumen.innerText = `Tienes ${tareas.length} tareas.`;
    } else {
        resumen.innerText = `No tienes tareas.`;
    }
}

const guardarTodoEnStorage = document.getElementById("guardarTodoEnStorage");

guardarTodoEnStorage.addEventListener("click", () => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
});

const recuperarTodoDelStorage = () => {
    if (localStorage.getItem("tareas") != null) {
        tareasRecuperadas = JSON.parse(localStorage.getItem("tareas"));
        tareas = tareasRecuperadas.map(tareaRecuperada => {
            const tarea = new Tarea(
                tareaRecuperada.texto,
                tareaRecuperada.id,
                tareaRecuperada.fechaLimite
            );
            tarea.fecha = new Date(tareaRecuperada.fecha);
            return tarea;
        });
        idTarea = tareas.length;
        mostrarTareas();
        mostrarResumen();
    }
}

const borrarTodoDeStorage = document.getElementById("borrarTodoDeStorage");

borrarTodoDeStorage.addEventListener("click", () => {
    localStorage.removeItem("tareas");
    tareas = [];
    mostrarTareas();
    mostrarResumen();
});

let tareas = [];

let contenido = document.getElementById("contenido");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", agregarTarea);

const btnNuevaTarea = document.getElementById("btnNuevaTarea");
btnNuevaTarea.addEventListener("click", () => {
    formulario.classList = "d-block";
});


recuperarTodoDelStorage();