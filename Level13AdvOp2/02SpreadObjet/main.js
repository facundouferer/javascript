/**
El operador de propagación (...) 
se utiliza para crear una copia superficial (shallow copy) del objeto original. 
Esto significa que se crea un nuevo objeto con las mismas propiedades 
y valores que el objeto original.

Una aplicación práctica podría ser al combinar múltiples objetos en uno solo, 
creando así un nuevo objeto que contenga todas las propiedades de los objetos originales.
 */

const persona1 = {
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    profesion: 'Ingeniero'
};

const direccion = {
    id: 1,
    ciudad: 'Madrid'
};

const personaCombinada = {
    ...persona1,
    ...direccion
};

console.log(personaCombinada);
  // { nombre: 'Juan', edad: 30, profesion: 'Ingeniero', apellido: 'Pérez', ciudad: 'Madrid' }
