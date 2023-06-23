function multiplicarPor(n) {
    return (x) => x * n;
}

const multiplicarPorCinco = multiplicarPor(5);

const resultado = multiplicarPorCinco(10);
console.log(resultado);