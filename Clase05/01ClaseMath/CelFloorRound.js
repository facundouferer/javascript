// Función para redondear un número utilizando ceil, floor y round
function roundNumbers(number) {
  const ceilValue = Math.ceil(number);
  const floorValue = Math.floor(number);
  const roundValue = Math.round(number);

  console.log(`Número original: ${number}`);
  console.log(`Ceil (redondeo hacia arriba): ${ceilValue}`);
  console.log(`Floor (redondeo hacia abajo): ${floorValue}`);
  console.log(`Round (redondeo al entero más cercano): ${roundValue}`);
}

// Ejemplo de uso
const numero = 5.67;
roundNumbers(numero);