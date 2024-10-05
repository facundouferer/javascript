let numero = 5;
let resultadosDiv = document.getElementById('resultados');

function mostrarResultado(texto) {
  let nuevoResultado = document.createElement('div');
  nuevoResultado.className = 'resultado';
  nuevoResultado.textContent = texto;
  resultadosDiv.appendChild(nuevoResultado);
}

function mostrarValorInicial() {
  resultadosDiv.innerHTML = '';
  numero = 5;
  mostrarResultado(`Valor inicial de numero: ${numero}`);
}

function usarPostIncremento() {
  mostrarResultado(`numero++ devuelve: ${numero++}`);
  mostrarResultado(`Ahora numero vale: ${numero}`);
}

function usarPreIncremento() {
  mostrarResultado(`++numero devuelve: ${++numero}`);
  mostrarResultado(`Ahora numero vale: ${numero}`);
}

function mostrarBucleFor() {
  mostrarResultado("Conteo usando un bucle for con operador ++:");
  for (let i = 1; i <= 5; i++) {
    mostrarResultado(i.toString());
  }
}

function reiniciar() {
  resultadosDiv.innerHTML = '';
  numero = 5;
  mostrarResultado("Ejemplo reiniciado. El valor de numero ha vuelto a 5.");
}