// Seleccionar elementos con querySelector
let radioSelector = document.querySelector("input[name=genero]:checked");
console.log(radioSelector);

//Seleccionar elementos por ID
let contenedor = document.querySelector("#contenedor");
console.log(contenedor);

//Seleccionar elementos por clase
let parrafo = document.querySelector(".parrafo");
console.log(parrafo);

//Seleccionar todos los elementos que coincidan con la etiqueta
let listadoLi = document.querySelectorAll("li");

listadoLi.forEach((li) => {
    console.log(li.textContent);
});