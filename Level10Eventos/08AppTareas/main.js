let titulo = document.getElementsByTagName("h1");
let cantTareas = 0;

const agregarTarea = () => {
    let inputTareaNueva = document.getElementById("inputTareaNueva");
    if (inputTareaNueva.value != "") {
        mostrarTarea(inputTareaNueva.value);
        inputTareaNueva.value = "";
        cantTareas++;
        mostrarResumen();
    }
    inputTareaNueva.focus();
}

let btnNuevaTarea = document.getElementById("btnNuevaTarea");
btnNuevaTarea.addEventListener("click", agregarTarea);

let contenido = document.getElementById("contenido");
let listdor = document.createElement("ol");
contenido.appendChild(listdor)

const mostrarTarea = (tarea) => {
    let item = document.createElement("li");
    let texto = document.createTextNode(tarea);
    item.appendChild(texto);
    listdor.appendChild(item);
}

const mostrarResumen = () => {
    if (cantTareas > 0) {
        titulo[0].innerText = `Tienes ${cantTareas} tareas.`;
    }
}
