let num1 = 2;
let num2 = 2;
let num3 = 3;


if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        console.log(`Orden: ${num1}, ${num2}, ${num3}`);
    } else {
        console.log(`Orden: ${num1}, ${num3}, ${num2}`);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        console.log(`Orden: ${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`Orden: ${num2}, ${num3}, ${num1}`);
    }
} else {
    if (num1 >= num2) {
        console.log(`Orden: ${num3}, ${num1}, ${num2}`);
    } else {
        console.log(`Orden: ${num3}, ${num2}, ${num1}`);
    }
}