class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");
productos.push(new Producto(nombre, precio));

for (const producto of productos) {
    console.log(producto)
}