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
            //reject("Error al pedir los productos")
        }, 2000)
    })
}

pedirProductos()
    .then((productos) => {
        console.log(productos)
    })
    .catch((error) => {
        console.log("NO!!!!: ", error)
    })
    .finally(() => {
        console.log("finalmente")
    })
