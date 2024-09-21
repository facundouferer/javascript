// Crear dos instancias de la clase Date para representar dos fechas diferentes
const fecha1 = new Date('2023-01-01T00:00:00');
const fecha2 = new Date('2023-12-31T23:59:59');

// Calcular la diferencia en milisegundos entre las dos fechas
const diferenciaMilisegundos = fecha2 - fecha1;

// Convertir la diferencia en milisegundos a días, horas, minutos y segundos
const milisegundosEnUnDia = 24 * 60 * 60 * 1000;
const milisegundosEnUnaHora = 60 * 60 * 1000;
const milisegundosEnUnMinuto = 60 * 1000;
const milisegundosEnUnSegundo = 1000;

// Calcular el número de días completos en la diferencia de milisegundos
const dias = Math.floor(diferenciaMilisegundos / milisegundosEnUnDia);

// Calcular el número de horas completas restantes después de calcular los días
// % lo que sobra de la división
const horas = Math.floor((diferenciaMilisegundos % milisegundosEnUnDia) / milisegundosEnUnaHora);

// Calcular el número de minutos completos restantes después de calcular las horas
const minutos = Math.floor((diferenciaMilisegundos % milisegundosEnUnaHora) / milisegundosEnUnMinuto);

// Calcular el número de segundos completos restantes después de calcular los minutos
const segundos = Math.floor((diferenciaMilisegundos % milisegundosEnUnMinuto) / milisegundosEnUnSegundo);

console.log(`Diferencia entre fechas: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`);