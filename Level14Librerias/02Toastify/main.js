//Toasty simple
document.getElementById("simpleToast").addEventListener("click", () => {
    Toastify({
        text: "Probando toast!",
        duration: 2000,
        gravity: 'top',
        position: 'right'
    }).showToast();
})

//Toasty con fondo gradiente
document.getElementById("conFondo").addEventListener("click", () => {
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
        }
    }).showToast();
})

//Toasty que lleva a otro toast
document.getElementById("conToasty").addEventListener("click", () => {
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        onClick: () => {
            Toastify({
                text: 'Clickeaste un Toast!',
                duration: 1500,
                position: 'left'
            }).showToast()
        }
    }).showToast();

})

//Toasty con enlace
document.getElementById("conEnlace").addEventListener("click", () => {
    Toastify({
        text: "Click aquí para ir a Coder!",
        duration: 3000,
        destination: 'https://www.coderhouse.com'
    }).showToast();

})
