/**
 * ACCESO CONDICIONAL A UN OBJETO
 * El acceso condicional a un objeto, 
 * sirve para facilitar el acceso a las propiedades 
 * de los objetos sin tener que validar cada referencia intermedia.
 * 
 * La sintaxis es 
 * objeto?.propiedad. 
 * Esto retorna undefined si objeto es null o undefined, 
 * en lugar de causar un error. 
 * Puedes encadenar tantas propiedades como quieras 
 * usando esta sintaxis, como objeto?.prop1?.prop2?.prop3.
 */

// Ejemplo 1

let usuario = {
    nombre: "Alice",
    mascota: {
        nombre: "Fido",
        raza: "Dálmata"
    }
};

console.log(usuario.mascota?.nombre); // Imprime "Fido"
console.log(usuario.mascota?.edad); // Imprime undefined (no causa un error)
console.log(usuario.auto?.marca); // Imprime undefined (no causa un error)

let estudiante1 = {
    nombre: "Alice",
    detalles: {
        direccion: {
            ciudad: "Madrid",
            pais: "España"
        }
    }
};

let estudiante2 = {
    nombre: "Bob",
};

// Usando el encadenamiento opcional
console.log(estudiante1?.detalles?.direccion?.ciudad); // Imprime "Madrid"
console.log(estudiante2?.detalles?.direccion?.ciudad); // Imprime undefined

  // Sin usar el encadenamiento opcional,
  //obtendríamos un error al tratar de acceder a estudiante2.detalles.direccion.ciudad
  // console.log(estudiante2.detalles.direccion.ciudad); // Error: Cannot read property 'direccion' of undefined
