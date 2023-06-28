
//CREACIÓN de un NODO
let parrafo = document.createElement("p");

//Agregar texto al NODO
parrafo.textContent = "Hola Mundo";

//Agregar el NODO al DOM
document.body.appendChild(parrafo);

//ELIMINAR un elemento del DOM

let titulo = document.getElementsByTagName("h1");
titulo[0].remove();