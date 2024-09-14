const numeros = [1, 2, 3, 4, 5]

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

const duplicado = []

porCadaUno(numeros, (el) => {
    duplicado.push(el * 2)
})

console.log(duplicado) 