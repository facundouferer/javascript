const btnGuardarEnLocal = document.getElementById("btnGuardarEnLocal");

btnGuardarEnLocal.addEventListener("click", () => {
    //guardar un texto en el localStorage   
    let nombre = "Juan";
    localStorage.setItem("nombreUsuario", nombre);
});

const btnEliminarLocal = document.getElementById("btnEliminarLocal");

btnEliminarLocal.addEventListener("click", () => {
    //eliminar un texto en el localStorage
    localStorage.removeItem("nombreUsuario");
});

const btnGuardarEnSession = document.getElementById("btnGuardarEnSession");

btnGuardarEnSession.addEventListener("click", () => {
    //guardar un texto en el localStorage
    let nombre = "Juan";
    sessionStorage.setItem("nombreUsuario", nombre);
});

const btnEliminarSession = document.getElementById("btnEliminarSession");
btnEliminarSession.addEventListener("click", () => {
    //eliminar un texto en el localStorage
    sessionStorage.removeItem("nombreUsuario");
});

const btnBorrarTodoStorage = document.getElementById("btnBorrarTodoStorage");

btnBorrarTodoStorage.addEventListener("click", () => {
    //eliminar todo el localStorage
    localStorage.clear();
    //eliminar todo el sessionStorage
    sessionStorage.clear();
});

//recuperar el texto del localStorage
let nombreRecuperado = localStorage.getItem("nombreUsuario");
console.log(nombreRecuperado);