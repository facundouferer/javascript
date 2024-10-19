document.getElementById('alertButton').addEventListener('click', () => {
  Swal.fire({
    title: '¡Hola!',
    text: 'Este es un ejemplo de SweetAlert2.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
});