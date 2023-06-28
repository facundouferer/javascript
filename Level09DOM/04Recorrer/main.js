//crear el nodo ol
let personas = document.createElement("ol");

let listaDePersonas = ["Juan", "Pedro", "Pablo", "Maria", "Jose"];

listaDePersonas.forEach((persona) => {
    //Crear un nodo li por cada persona
    let li = document.createElement("li");
    //Agregar el texto de la persona al nodo li
    li.textContent = `Nombre: ${persona}`;
    //Agregar el nodo li al nodo ol
    personas.appendChild(li);
});

//Agregar el nodo ol al DOM
document.body.appendChild(personas);