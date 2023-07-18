let hora = new Date()
console.log(hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getSeconds())

setTimeout(() => {
    hora = new Date()
    console.log(hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getSeconds())
}, 3000)

