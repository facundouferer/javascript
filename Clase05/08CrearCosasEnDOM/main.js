// Obtener referencia al elemento ol
const randomNumberList = document.getElementById('randomNumberList');

// Función para generar un número aleatorio entre 1 y 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Generar 10 números aleatorios y añadirlos a la lista
for (let i = 0; i < 10; i++) {
  const randomNumber = generateRandomNumber();
  const listItem = document.createElement('li');
  listItem.textContent = randomNumber;
  randomNumberList.appendChild(listItem);
}