/**
 * DESESTRUCTURACION EN PARAMETROS
 * Si en una función recibimos objetos por parámetros, 
 * también es posible desestructurarlos directamente 
 * en el llamado, definiendo esto al declarar la función. 
 */

// Ejemplo 1

const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

// En este caso, estamos desestructurando el objeto 'producto'
// en el llamado de la función 'mostrarInfoProducto'

mostrarInfoProducto = ({ nombre, precio }) => {
    console.log(`El producto ${nombre} tiene un precio de $${precio}`);
}
/**
 * muestra: El producto Curso Javascript tiene un precio de $12500
 */
mostrarInfoProducto(producto); 