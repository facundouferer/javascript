function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () {
        console.log("HOLA, SOY " + this.nombre);
    };

    this.presentarse = function () {
        console.log("Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años y vivo en " + this.calle);
    };

    this.caminar = function (pasos) {
        console.log(this.nombre + " está caminando " + pasos + " pasos.");
    };
}

var persona1 = new Persona("Juan", 25, "Calle Principal");
var persona2 = new Persona("María", 30, "Avenida Central");

persona1.hablar(); // HOLA, SOY Juan
persona2.hablar(); // HOLA, SOY María

persona1.presentarse(); // Hola, mi nombre es Juan, tengo 25 años y vivo en Calle Principal
persona2.presentarse(); // Hola, mi nombre es María, tengo 30 años y vivo en Avenida Central

persona1.caminar(10); // Juan está caminando 10 pasos.
persona2.caminar(5); // María está caminando 5 pasos.
