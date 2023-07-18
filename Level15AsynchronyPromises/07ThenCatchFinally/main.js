const BD = [
    { id: 1, nombre: 'Producto 1', precio: 1500 },
    { id: 2, nombre: 'Producto 2', precio: 2500 },
    { id: 3, nombre: 'Producto 3', precio: 3500 },
    { id: 4, nombre: 'Producto 4', precio: 3500 },
]

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
            //reject('No se pudo cargar la BD')
        }, 3000)
    })
}

pedirProductos()
    .then((productos) => {
        console.log(productos) // [ { id: 1, nombre: 'Producto 1', precio: 1500 }, ... ]
    }).catch((error) => {
        console.log("ERROR: ", error) // ERROR:  No se pudo cargar la BD
    }).finally(() => {
        console.log('Proceso terminado') // Proceso terminado
    })

