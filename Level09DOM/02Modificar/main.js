//seleccionamos el elemento por su tag
let titulo = document.getElementsByTagName("h1");

//modificamos el contenido del nodo
titulo[0].innerText = "Este es el nuevo título";

let contenido2 = document.getElementById("contenido2");

//agregamos un nuevo elemento al nodo
contenido2.innerHTML = "<h2>Este es el nuevo contenido</h2>";

//asignamos una clase al elemento
contenido2.className = "contenido";