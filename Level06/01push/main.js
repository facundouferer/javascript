//crea un array de 10 emojis
const myArray = ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨", "🐯", "🦁"];
console.log(myArray);

//añadir un elemento al final
myArray.push("🐮");
console.log(myArray);

//añadir un elemnento al inicio
myArray.unshift("🐷");
console.log(myArray);

//eliminar el último elemento
myArray.pop();
console.log(myArray);

//eliminar el primer elemento
myArray.shift();
console.log(myArray);

//eliminar el elemento del índice 2 y los dos siguientes
myArray.splice(2, 3);
console.log(myArray);

//generar un string con todos los elementos separados por un guión
const myString = myArray.join("-");
console.log(myString);

//concatenar el array con un segundo array que tiene emojis de caras
const mySecondArray = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆"];
const myConcatArray = myArray.concat(mySecondArray);
console.log(myConcatArray);

//opia de una parte del Array dentro de un nuevo Array
const mySliceArray = myArray.slice(3, 6);
console.log(mySliceArray);

//obtener el índice de 🐭
const myIndex = myArray.indexOf("🐭");
console.log(myIndex);

//invierte el orden de los elementos
myArray.reverse();
console.log(myArray);