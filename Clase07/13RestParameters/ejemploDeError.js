

function sumatoria(...numeros) {
  console.log(numeros)
  const salida = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
  return salida
}

const numeros = [1, 3, 6, 3, 9]
console.log(sumatoria(...numeros))