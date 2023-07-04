const estudiantes = [
    {
        nombre: "Juan",
        edad: 20,
        carrera: "Ingeniería en Computación"
    },
    {
        nombre: "María",
        edad: 21,
        carrera: "Ingeniería en Computación"
    },
    {
        nombre: "Carlos",
        edad: 19,
        carrera: "Ingeniería en Computación"
    }];

const guardarEnStorage = (clave, valor) => {
    localStorage.setItem(clave, valor)
};

guardarEnStorage("estudiantes", JSON.stringify(estudiantes));

//obtener el valor del localStorage
let estudiantesRecuperados = localStorage.getItem("estudiantes");

//recorrer y mostrar en consola
estudiantesRecuperados = JSON.parse(estudiantesRecuperados);
estudiantesRecuperados.forEach((estudiante) => {
    console.log(estudiante.nombre);
    console.log(estudiante.edad);
    console.log(estudiante.carrera);
});