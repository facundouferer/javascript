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

estudiantes.forEach((estudiante, index) => {
    guardarEnStorage(index, JSON.stringify(estudiante));
});