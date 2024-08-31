// Definir dos variables booleanas
let a = true;
let b = false;

// Operador AND (&&)
let resultadoAND = a && b;
console.log("AND: ", resultadoAND);

// Operador OR (||)
let resultadoOR = a || b;
console.log("OR: ", resultadoOR);

// Operador NOT (!)
let resultadoNOTa = !a;
let resultadoNOTb = !b;
console.log("NOT (a): ", resultadoNOTa);
console.log("NOT (b): ", resultadoNOTb);

// Operador XOR
let resultadoXOR = (a && !b) || (!a && b);
console.log("XOR: ", resultadoXOR);