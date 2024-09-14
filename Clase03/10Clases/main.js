class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.cantidad--;
    }
    modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }
    verNombre() {
        return this.nombre.toUpperCase();
    }
}
const producto1 = new Producto("arroz", "125", 10);

console.log(producto1.cantidad);

producto1.sumaIva();
producto1.vender();
producto1.modificarNombre("fideos");

console.log(producto1.cantidad);
