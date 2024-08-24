
class Tarea {
    constructor(texto, fechaLimite) {
        this.texto = texto;
        this.fecha = new Date();
        this.fechaLimite = new Date(fechaLimite);
    }
    mostrarFecha() {
        let fecha = this.fecha;
        let dia = fecha.getUTCDate();
        let mes = fecha.getMonth() + 1;
        let anio = fecha.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }
    mostrarFechaLimite() {
        let fechaLimite = new Date(this.fechaLimite);
        let dia = fechaLimite.getUTCDate();
        let mes = fechaLimite.getMonth() + 1;
        let anio = fechaLimite.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }
}

const agregarTarea = (e) => {
    e.preventDefault();
    let inputTareaNueva = document.getElementById("inputTareaNueva");
    let fechaLimite = document.getElementById("fechaLimite").value;
    if (inputTareaNueva.value != "" || fechaLimite.value != "") {
        let tarea = new Tarea(inputTareaNueva.value, fechaLimite);
        tareas.push(tarea);
        inputTareaNueva.value = "";
        fechaLimite.value = "";
        mostrarTareas();
        mostrarResumen();
        formulario.classList = "d-none";
    }
}

const mostrarTareas = () => {
    contenido.innerHTML = "";
    tareas.forEach(tarea => {
        let cardTarea = document.createElement("div");
        cardTarea.classList = "col-sm-4 mb-3";
        let fechaLimite = new Date(tarea.fechaLimite);
        let claseCard = fechaLimite < new Date() ? `text-bg-danger` : `text-bg-secondary`;
        cardTarea.innerHTML += `
        <div class="card ${claseCard}">
            <h5 class="card-header">${tarea.mostrarFecha()}</h5>
            <div class="card-body">
                <h5 class="card-title">Fecha límite: ${tarea.mostrarFechaLimite()}</h5>
                <p class="card-text">${tarea.texto}</p>
                <button class="btn btn-danger btnEliminar">Eliminar</button>                
                <button class="btn btn-success btnEditar">Editar</button>                
            </div>
        </div>`;
        let btnEliminar = cardTarea.querySelector(".btnEliminar");
        btnEliminar.addEventListener("click", () => eliminarTarea(tarea));

        let btnEditar = cardTarea.querySelector(".btnEditar");
        btnEditar.addEventListener("click", () => editarTarea(tarea));

        contenido.appendChild(cardTarea);
    });
};

const eliminarTarea = (tarea) => {
    let index = tareas.indexOf(tarea);
    tareas.splice(index, 1);
    mostrarTareas();
    mostrarResumen();
}

const editarTarea = (tarea) => {
    const formulariosContainer = document.getElementById("formularios");
    formulariosContainer.innerHTML = `
      <h2>Editar Tarea</h2>
      <form id="formularioEditar">
        <div class="row mt-3">
          <div class="col-8">
            <textarea rows="5" id="inputTareaEditar" class="form-control form-control-lg" required>${tarea.texto}</textarea>
          </div>
          <div class="col-4 row">
            <label for="fechaLimiteEditar" class="form-label">Fecha límite</label>
            <input type="date" id="fechaLimiteEditar" class="form-control" value="${tarea.fechaLimite.toISOString().split("T")[0]}" required>
            <div class="row mt-3">
              <button type="button" class="btn btn-primary col-5 m-1" onclick="guardarCambiosTarea(${tareas.indexOf(tarea)})">Guardar</button>
              <button type="button" class="btn btn-secondary col-5 m-1" onclick="cancelarCreacionTarea()">Cancelar</button>
            </div>
          </div>
        </div>
      </form>
    `;
};

const guardarCambiosTarea = (index) => {
    const nuevoTexto = document.getElementById("inputTareaEditar").value;
    const nuevaFechaLimite = document.getElementById("fechaLimiteEditar").value;
    tareas[index].texto = nuevoTexto;
    tareas[index].fechaLimite = new Date(nuevaFechaLimite);
    mostrarTareas();
    document.getElementById("formularios").innerHTML = "";
};

const mostrarResumen = () => {
    let resumen = document.getElementById("resumen");
    if (tareas.length > 0) {
        resumen.innerHTML = tareas.length > 1 ? `Tienes ${tareas.length} tareas.` : `Tienes 1 tarea.`;
    } else {
        resumen.innerText = `No tienes tareas.`;
    }
}

const guardarTodoEnStorage = document.getElementById("guardarTodoEnStorage");

guardarTodoEnStorage.addEventListener("click", () => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
});

const recuperarTodoDelStorage = () => {
    if (localStorage.getItem("tareas") !== null) {
        tareasRecuperadas = JSON.parse(localStorage.getItem("tareas"));
        tareas = tareasRecuperadas.map(tareaRecuperada => {
            const tarea = new Tarea(
                tareaRecuperada.texto,
                tareaRecuperada.fechaLimite ? tareaRecuperada.fechaLimite : null
            );
            tarea.fecha = new Date(tareaRecuperada.fecha);
            return tarea;
        });
        mostrarTareas();
        mostrarResumen();
    }
};


const mostrarFormularioCrearTarea = () => {
    const formulariosContainer = document.getElementById("formularios");
    formulariosContainer.innerHTML = `
      <h2>Nueva Tarea</h2>
      <form id="formularioCrear">
        <div class="row mt-3">
          <div class="col-8">
            <textarea rows="5" id="inputTareaNueva" class="form-control form-control-lg" required></textarea>
          </div>
          <div class="col-4 row">
            <label for="fechaLimiteNueva" class="form-label">Fecha límite</label>
            <input type="date" id="fechaLimiteNueva" class="form-control" required>
            <div class="row mt-3">
              <button type="button" class="btn btn-primary col-5 m-1" onclick="agregarTareaDesdeFormulario()">Guardar</button>
              <button type="button" class="btn btn-secondary col-5 m-1" onclick="cancelarCreacionTarea()">Cancelar</button>
            </div>
          </div>
        </div>
      </form>
    `;
};

const agregarTareaDesdeFormulario = () => {
    const inputTareaNueva = document.getElementById("inputTareaNueva");
    const fechaLimiteNueva = document.getElementById("fechaLimiteNueva").value;
    if (inputTareaNueva.value !== "" || fechaLimiteNueva !== "") {
        const tarea = new Tarea(inputTareaNueva.value, fechaLimiteNueva);
        tareas.push(tarea);
        inputTareaNueva.value = "";
        document.getElementById("fechaLimiteNueva").value = "";
        mostrarTareas();
        mostrarResumen();
        document.getElementById("formularios").innerHTML = "";
    }
};

const cancelarCreacionTarea = () => {
    document.getElementById("formularios").innerHTML = "";
};

const borrarTodoDeStorage = document.getElementById("borrarTodoDeStorage");

borrarTodoDeStorage.addEventListener("click", () => {
    localStorage.removeItem("tareas");
    tareas = [];
    mostrarTareas();
    mostrarResumen();
});

let tareas = [];

let contenido = document.getElementById("contenido");

const btnNuevaTarea = document.getElementById("btnNuevaTarea");
btnNuevaTarea.addEventListener("click", () => {
    mostrarFormularioCrearTarea();
});


recuperarTodoDelStorage();