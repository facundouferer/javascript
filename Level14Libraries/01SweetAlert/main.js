//Alert simple
document.getElementById("error").addEventListener("click", () => {
    Swal.fire({
        title: 'Error!',
        text: 'Está seguro que desea continuar?',
        icon: 'question',
        confirmButtonText: 'Aceptar'
    })
})

//ALert con timer
document.getElementById("conTimer").addEventListener("click", () => {
    Swal.fire({
        title: 'Error!',
        text: 'Está seguro que desea continuar?',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: 1500
    })
})

//Aler con imágen
document.getElementById("conImagen").addEventListener("click", () => {
    Swal.fire({
        title: 'Significa Peligro!',
        text: 'Está seguro que desea continuar?',
        confirmButtonText: 'Aceptar',
        imageUrl: './img/peligro.png',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
})

//Alert con fondo
document.getElementById("conFondo").addEventListener("click", () => {
    Swal.fire({
        title: 'Ancho personalizado y con colores!.',
        width: 500,
        confirmButtonText: 'Aceptar',
        padding: '1em',
        color: '#FCF624',
        background: '#1AC115',
        backdrop: `
          rgba(0,0,123,0.4)
          url("./img/peligro.png")
          right top
          no-repeat
        `
    })
})

//Alerta con Acciones
document.getElementById("conAcciones").addEventListener('click', () => {
    const mensaje = document.getElementById("mensaje");
    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => { // Ejecuta una función después de que el usuario haga clic en un botón
        /**.then() se utiliza con promesas para adjuntar una función de devolución de llamada (callback) 
         * que se ejecuta cuando la promesa fue exitosa. */
        console.log(result);
        if (result.isConfirmed) { // Si el usuario confirmó la acción
            mensaje.innerHTML = "Borrado";
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El archivo ha sido borrado'
            });
        } else { // Si el usuario canceló la acción
            mensaje.innerHTML = "No se borró";
            Swal.fire({
                title: 'Cancelado!',
                icon: 'error',
                text: 'El archivo no ha sido borrado'
            });
        }
    });
});


