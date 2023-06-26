let contenido = document.getElementById("contenido");
console.log(contenido.innerHTML);

let parrafo = document.getElementsByClassName("parrafo");

//acceder a un elemento
console.log("Primer acceso", parrafo[0].innerHTML);

//acceder a todos los elementos
for (let i = 0; i < parrafo.length; i++) {
    console.log(parrafo[i].innerHTML);
}

let titulo = document.getElementsByTagName("h1");
console.log(titulo[0].innerHTML);
console.log(titulo[1].innerHTML);