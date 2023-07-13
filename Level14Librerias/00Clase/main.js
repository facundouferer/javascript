document.getElementById("btnClick").addEventListener("click", () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Acepto'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("Aceptar");
        } else {
            console.log("Cancelar");
        }
    })
});