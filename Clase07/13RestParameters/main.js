// Función que recibe una cantidad indeterminada de números como un array usando rest parameters
function sumarNumeros(...numeros) {
  // Utilizamos reduce para sumar todos los números del array
  const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

  // Retornamos la suma total
  return suma;
}

// Llamamos a la función con varios números como argumentos
console.log(sumarNumeros(5, 10, 15)); // Resultado: 30
console.log(sumarNumeros(1, 2, 3, 4, 5)); // Resultado: 15
console.log(sumarNumeros(100, 200, 300)); // Resultado: 600

// También puedes pasar un array expandido usando el spread operator
const numerosArray = [50, 60, 70];
console.log(sumarNumeros(...numerosArray)); // Resultado: 180
