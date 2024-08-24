const myArray = ["1", "2", "3", "4", "5"];
let eliminar = "3";

// Función para eliminar un elemento específico de un array sin usar filter
function eliminarElemento(array, elemento) {
    let i = 0;
    while (i < array.length) {
        if (array[i] === elemento) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
}

eliminarElemento(myArray, eliminar);

console.log(myArray);