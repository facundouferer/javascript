// Definir un objeto
var miObjeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

// Utilizar el operador in para verificar si una propiedad existe en el objeto
console.log("propiedad1" in miObjeto); // true
console.log("propiedad4" in miObjeto); // false

// Usar el bucle for...in para acceder a todas las propiedades del objeto
for (var propiedad in miObjeto) {
    console.log(propiedad + ": " + miObjeto[propiedad]);
}
