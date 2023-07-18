let hora = new Date()

setInterval(() => {
    console.log(hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getSeconds())
    hora = new Date()
}, 2000)