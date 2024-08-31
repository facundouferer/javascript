/* Según el puntaje
      Si es mayor o igual a 90, "¡Excelente!".
      Si es mayor o igual a 80 pero menor que 90, "¡Muy bien!".
      Si es mayor o igual a 70 pero menor que 80, "¡Bien!".
      Si es menor a 70, "Necesitas mejorar".
      */
let puntaje = 70;

if (puntaje >= 90) {
    console.log("Excelente");
} else if (puntaje >= 80) {
    console.log("Muy bien");
} else if (puntaje >= 70) {
    console.log("Bien");
} else {
    console.log("Necesitas mejorar");
}