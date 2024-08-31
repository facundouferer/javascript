let sumaPares = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
        console.log(`${sumaPares} + ${i} = ${sumaPares + i}`)
    }
}
console.log("La suma de los números pares del 1 al 100 es: " + sumaPares);
