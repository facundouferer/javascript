const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

console.log(nombres)

console.log(...nombres)

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

/**Se utiliza aquí para expandir los elementos del array numeros 
 * y pasarlos como argumentos separados a la función Math.max() */
console.log(Math.max(...numeros))