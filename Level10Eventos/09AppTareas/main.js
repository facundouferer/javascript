let idTarea = 0;
let tareas = [];

class Tarea {
    constructor(texto, id) {
        this.texto = texto;
        this.id = id;
    }
    mostrarTexto() {
        return this.texto;
    }
}

const agregarTarea = (e) => {
    e.preventDefault();
    let inputTareaNueva = document.getElementById("inputTareaNueva");
    if (inputTareaNueva.value != "") {
        let tarea = new Tarea(inputTareaNueva.value, idTarea);
        tareas.push(tarea);
        inputTareaNueva.value = "";
        idTarea++;
        mostrarTareas();
        mostrarResumen();
        console.log(tareas);
    }
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", agregarTarea);
let contenido = document.getElementById("contenido");

const mostrarTareas = () => {
    contenido.innerHTML = "";
    let listdor = document.createElement("ol");
    tareas.forEach(tarea => {
        let item = document.createElement("li");
        item.innerText = tarea.texto;
        item.addEventListener("click", () => eliminarTarea(tarea));
        item.addEventListener("mouseover", () => {
            item.className = "sobreTarea";
        });
        item.addEventListener("mouseout", () => {
            item.className = "";
        });
        listdor.appendChild(item);
    })
    contenido.appendChild(listdor)
}

const eliminarTarea = (tarea) => {
    let index = tareas.indexOf(tarea);
    tareas.splice(index, 1);
    mostrarTareas();
    mostrarResumen();
}

const mostrarResumen = () => {
    let titulo = document.getElementsByTagName("h1");
    if (tareas.length > 0) {
        titulo[0].innerText = `Tienes ${tareas.length} tareas.`;
    } else {
        titulo[0].innerText = `No tienes tareas.`;
    }
}
