
// Función para generar un número aleatorio entre 0 y 1
function generateRandomNumber() {
  const randomNumber = Math.random();
  console.log(`Número aleatorio entre 0 y 1: ${randomNumber}`);
}

// Función para generar un número aleatorio entre un rango específico
function generateRandomNumberInRange(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Número aleatorio entre ${min} y ${max}: ${randomNumber}`);
}

// Ejemplo de uso
generateRandomNumber();
generateRandomNumberInRange(1, 100);