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

/**
 * stringify acepta un objeto como parámetro, 
 * y devuelve la forma de texto JSON equivalente.
 */
guardarEnStorage("estudiantes", JSON.stringify(estudiantes));

//obtener el valor del localStorage
let estudiantesRecuperados = localStorage.getItem("estudiantes");
console.log(estudiantesRecuperados)

//recorrer y mostrar en consola

/** parse recibe un texto JSON como parámetro, 
 * y devuelve el objeto JavaScript correspondiente.
 */
estudiantesRecuperados = JSON.parse(estudiantesRecuperados);
console.log(estudiantesRecuperados)
estudiantesRecuperados.forEach((estudiante) => {
    console.log(estudiante.nombre);
    console.log(estudiante.edad);
    console.log(estudiante.carrera);
});