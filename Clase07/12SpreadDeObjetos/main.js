// Definimos un objeto llamado "persona" con algunas propiedades
const persona = {
  nombre: "Carlos",
  edad: 30,
  ocupacion: "Desarrollador"
}

// Utilizamos el operador spread para copiar todas las propiedades y valores de "persona" en otro objeto "empleado"
const empleado = {
  ...persona
}

console.log(empleado)
// Resultado: { nombre: 'Carlos', edad: 30, ocupacion: 'Desarrollador' }
// Aquí "empleado" es una copia exacta de "persona"

// Ahora creamos otro objeto "empleadoModificado" y sobrescribimos algunas propiedades
const empleadoModificado = {
  ...persona, // Copiamos todas las propiedades de "persona"
  ocupacion: "Ingeniero de Software", // Sobrescribimos la propiedad "ocupacion"
  empresa: "TechCorp" // Añadimos una nueva propiedad "empresa"
}

console.log(empleadoModificado)
// Resultado: { nombre: 'Carlos', edad: 30, ocupacion: 'Ingeniero de Software', empresa: 'TechCorp' }
// "empleadoModificado" hereda las propiedades de "persona", pero con la ocupación modificada y una propiedad nueva

