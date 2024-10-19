document.getElementById('alertButton').addEventListener('click', () => {
  const DateTime = luxon.DateTime;
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

  Swal.fire({
    title: '¡Hola!',
    text: `Este es un ejemplo de SweetAlert2. Fecha y hora actual: ${now}`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});