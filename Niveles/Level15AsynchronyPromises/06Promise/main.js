/**
    ESTADOS DE UNA PROMESA:
    1) pending: Este es el estado inicial de una promesa. 
    Indica que la promesa se encuentra en curso, no se ha resuelto ni rechazado. 
    La promesa está en espera de que se complete la operación asíncrona 
    que se le ha asociado.

    2) fulfilled: También conocido como resolved, 
    este estado indica que la promesa se ha resuelto exitosamente. 
    la operación asíncrona asociada a la promesa se ha completado correctamente 
    y ha producido un resultado. En este estado, se puede acceder al resultado 
    utilizando el método then() de la promesa.

    3) rejected: indica que la promesa ha sido rechazada debido a un error 
    o fallo en la operación asíncrona. Indica que algo salió mal durante la ejecución 
    y que el resultado no pudo ser obtenido. 
    En este estado, se puede acceder al motivo del rechazo utilizando el método catch() 
    o el segundo argumento de then() de la promesa.
    */

const BD = [
    { id: 1, nombre: 'Producto 1', precio: 1500 },
    { id: 2, nombre: 'Producto 2', precio: 2500 },
    { id: 3, nombre: 'Producto 3', precio: 3500 },
    { id: 4, nombre: 'Producto 4', precio: 3500 },
]

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD) //devuelve la BD
            //reject(new Error('No se pudo cargar la BD')) //devuelve un error
        }, 3000)
    })
}


console.log(pedirProductos()) // Promise { <pending> }

//mostrar productos si se resuelve la promesa
pedirProductos().then((productos) => {
    console.log(productos) // [ { id: 1, nombre: 'Producto 1', precio: 1500 }, ... ]
})

