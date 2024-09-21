// Función para calcular la raíz cuadrada de un número
function calculateSquareRoot(number) {
  if (number < 0) {
    console.log("No se puede calcular la raíz cuadrada de un número negativo.");
    return;
  }
  const squareRoot = Math.sqrt(number);
  console.log(`La raíz cuadrada de ${number} es: ${squareRoot}`);
}

// Ejemplo de uso
const numero = 25;
calculateSquareRoot(numero);