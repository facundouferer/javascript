class Tarea {
  constructor(texto, completada = false) {
    this.texto = texto;
    this.completada = completada;
  }

  completada() {
    this.completada = !this.completada;
  }
}

const tareaInput = document.getElementById("tarea-input");

const listaTareas = document.getElementById("lista-tareas");

let tareas = JSON.parse(localStorage.getItem("tareas"))?.map(t => new Tarea(t.texto, t.completada)) || [];

function actualizarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  renderizarTareas();
}

function renderizarTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const nuevaTarea = document.createElement("div");
    nuevaTarea.className = "tarea";
    nuevaTarea.innerHTML = `
      <label>
        <input type="checkbox" class="filled-in" ${tarea.completada ? "checked" : ""} onchange="marcarCompletada(${index})">
        <span class="${tarea.completada ? "completada" : ""}">${tarea.texto}</span>
      </label>
      <i class="material-icons eliminar-btn" onclick="eliminarTarea(${index})">close</i>
    `;
    listaTareas.appendChild(nuevaTarea);
  });
}

function agregarTarea() {
  if (tareaInput.value.trim() !== "") {
    tareas.push(new Tarea(tareaInput.value));
    tareaInput.value = "";
    actualizarTareas();

    // Show Toastify notification
    Toastify({
      text: "Tarea agregada exitosamente!",
      duration: 3000, // Duration in milliseconds
      close: true, // Show close button
      gravity: "top", // Position: top or bottom
      position: "right", // Position: left, center or right
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color
    }).showToast();
  }
}

function marcarCompletada(index) {
  tareas[index].completada();
  actualizarTareas();
}

function eliminarTarea(index) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      tareas.splice(index, 1);
      actualizarTareas();
      Swal.fire(
        'Eliminado!',
        'La tarea ha sido eliminada.',
        'success'
      );
    }
  });
}

tareaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

renderizarTareas();
