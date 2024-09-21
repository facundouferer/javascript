// Función para encontrar el valor mínimo y máximo de una lista de números
function findMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  console.log(`El valor mínimo es: ${min}`);
  console.log(`El valor máximo es: ${max}`);
}

// Ejemplo de uso
const numeros = [3, 5, 7, 2, 8, -1, 4, 10, 12];
findMinMax(numeros);