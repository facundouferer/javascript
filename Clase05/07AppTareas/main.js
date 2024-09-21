//getElementsByTagName() -> seleccionar elemento por etiqueta
let titulo = document.getElementsByTagName("h1");

//innerHTML -> modificar el texto de un elemento
titulo[0].innerText = "Tareas";

//getElementsByClaspepesName() -> seleccionar elemento por clase
let resumen = document.getElementsByClassName("resumen");

//getElementById() -> seleccionar elemento por id
let contenido = document.getElementById("contenido");

let listado = prompt("Ingrese el listado de tareas separadas por coma");

//consulta listado es distinto de vacio y distinto de null
if (listado != "" && listado != null) {
    //split() -> separar un string en un array
    let tareas = listado.split(",");
    //createElement() -> Crear un elemento 
    let listdor = document.createElement("ol");
    let tareasImportantes = [];
    let tareasNormales = [];

    tareas.forEach((tarea) => {
        let importante = tarea.includes("!");
        if (importante) {
            //replace() -> borra el caracte ! del string
            tarea.textContent = tarea.replace("!", "");
            tareasImportantes.push(tarea);
        } else {
            tareasNormales.push(tarea);
        }
    });
    tareasImportantes.forEach((tarea) => {
        let li = document.createElement("li");
        li.className = "importante";
        //textContent -> agregar texto al NODO
        li.textContent = tarea;
        //appendChild(li) -> agregar un nodo a otro
        listdor.appendChild(li);
    });
    tareasNormales.forEach((tarea) => {
        let li = document.createElement("li");
        li.textContent = tarea;
        //appendChild(li) -> agregar un nodo a otro
        listdor.appendChild(li);
    });
    //appendChild() -> Agregar el NODO al un elemento del DOM
    contenido.appendChild(listdor)

    //innerHTML -> modficar el HTML de un elemento
    resumen[0].innerHTML = `<p>Hay <strong>${tareas.length}</strong> tareas.</p>`;
} else {
    resumen[0].innerHTML = `<h3> NO HAY TAREAS.</h3>`;
}
