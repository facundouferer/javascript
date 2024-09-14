const calcular = (a, b, operacion) => {
    switch (operacion) {
        case "suma":
            let c = a + b;
            return `${a} + ${b} = ${c}`;
        case "resta":
            let d = a - b;
            return `${a} - ${b} = ${d}`;
        case "multiplicacion":
            let e = a * b;
            return `${a} * ${b} = ${e}`;
        case "division":
            let f = a / b;
            return `${a} / ${b} = ${f}`;
        default:
            return "Operación no válida";
    }
}

console.log(calcular(2, 5, "resta"))
