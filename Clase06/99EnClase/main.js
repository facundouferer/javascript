let numero = 5;
let resultado = document.getElementById("resultado")

function incrementar() {
  numero++;
  resultado.innerHTML = numero;
}

function decrementar() {
  numero--;
  resultado.innerHTML = numero;
  const mensaje = (numero < 0) ? "El numero es negativo" : "El numero es positivo";
  console.log(mensaje);
}
