let counter = 0

const interval = setInterval(() => {
    counter++

    console.log(counter)
    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)