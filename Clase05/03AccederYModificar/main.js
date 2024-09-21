//ACCEDER a un elemento por ID
let contenido = document.getElementById("contenido");
console.log(contenido.innerHTML);

//ACCEDER a un elemento por NOMBRE DE CLASE
let parrafo = document.getElementsByClassName("parrafo");

/** Como retorna un Array de elementos 
 * con todas las coincidencias deberemos
 * indicar el índice del elemento que queremos */

console.log("Primer acceso", parrafo[0].innerHTML);

//Listar todos los elementos
for (let i = 0; i < parrafo.length; i++) {
    console.log(parrafo[i].innerText);
}

// ACCEDER a un elemento por NOMBRE DE ETIQUETA
let titulo = document.getElementsByTagName("h1");
console.log(titulo[0].innerHTML);
console.log(titulo[1].innerHTML);

//MODIFICAR el contenido de un nodo

titulo[0].innerText = "Este es el nuevo título";

let contenido2 = document.getElementById("contenido2");

//AGREGAR código HTML en un nodo
contenido2.innerHTML = "<h1>ESTE TEXTO CAMBIÓ!!!</h1>";
contenido2.innerHTML += "<p>Este párrafo fue agregado con innerHTML</p>";

//Definir LA CLASE de un nodo
contenido2.className = "contenido";