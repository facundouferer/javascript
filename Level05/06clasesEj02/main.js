class CalculadoraMonedas {
    constructor(valorDolar, valorEuro) {
        this.valorDolar = valorDolar;
        this.valorEuro = valorEuro;
    }

    convertirDolarAPeso(cantidadDolares) {
        return cantidadDolares * this.valorDolar;
    }

    convertirEuroAPeso(cantidadEuros) {
        return cantidadEuros * this.valorEuro;
    }

    convertirPesoADolar(cantidadPesos) {
        return cantidadPesos / this.valorDolar;
    }

    convertirPesoAEuro(cantidadPesos) {
        return cantidadPesos / this.valorEuro;
    }
}

// Crear un objeto utilizando la clase CalculadoraMonedas
let dolar = prompt("Ingrese el valor del dolar");
let euro = prompt("Ingrese el valor del euro");
var calculadoraMonedas = new CalculadoraMonedas(dolar, euro); // Valores ficticios para el ejemplo

// Ejemplos de uso de la calculadora de monedas
console.log(calculadoraMonedas.convertirDolarAPeso(10)); // Convertir 10 dólares a pesos
console.log(calculadoraMonedas.convertirEuroAPeso(5)); // Convertir 5 euros a pesos
console.log(calculadoraMonedas.convertirPesoADolar(200)); // Convertir 200 pesos a dólares
console.log(calculadoraMonedas.convertirPesoAEuro(300)); // Convertir 300 pesos a euros
