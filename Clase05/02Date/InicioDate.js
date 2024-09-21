// Crear una instancia de la clase Date para obtener la fecha y hora actual
const now = new Date();
console.log(`Fecha y hora actual: ${now}`);

// Mostrar la fecha y hora actual en diferentes formatos
console.log(`Año actual: ${now.getFullYear()}`);
console.log(`Mes actual: ${now.getMonth() + 1}`); // Los meses empiezan desde 0
console.log(`Día del mes actual: ${now.getDate()}`);
console.log(`Hora actual: ${now.getHours()}`);
console.log(`Minutos actuales: ${now.getMinutes()}`);
console.log(`Segundos actuales: ${now.getSeconds()}`);
console.log(`Milisegundos actuales: ${now.getMilliseconds()}`);

// Crear una instancia de Date con una fecha específica
const specificDate = new Date('2023-01-01T00:00:00');
console.log(`Fecha específica: ${specificDate}`);

// Modificar la fecha y hora de una instancia de Date
specificDate.setFullYear(2025);
specificDate.setMonth(11); // Diciembre (los meses empiezan desde 0)
specificDate.setDate(25);
specificDate.setHours(10);
specificDate.setMinutes(30);
specificDate.setSeconds(15);
console.log(`Fecha modificada: ${specificDate}`);