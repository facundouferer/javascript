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
  }
}

function marcarCompletada(index) {
  tareas[index].completada();
  actualizarTareas();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  actualizarTareas();
}

tareaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

renderizarTareas();
