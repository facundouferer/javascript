class Tarea {
    constructor(texto, fechaActual, fechaLimite) {
        this.texto = texto;
        this.fecha = new Date(fechaActual);
        this.fechaLimite = new Date(fechaLimite);
    }
    mostrarFecha() {
        const DateTime = luxon.DateTime;
        const fecha = DateTime.fromJSDate(this.fecha);
        return `${fecha.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}`;
    }
    mostrarFechaLimite() {
        const DateTime = luxon.DateTime;
        const fechaLimite = DateTime.fromJSDate(this.fechaLimite);
        if (fechaLimite < new Date()) {
            return `Venció ${fechaLimite.toRelative()}`;
        } else {
            return `Vence ${fechaLimite.toRelative()}`;
        }
    }
}

const agregarTarea = (e) => {
    e.preventDefault();
    let inputTareaNueva = document.getElementById("inputTareaNueva");
    let fechaActual = new Date();
    let fechaLimite = document.getElementById("fechaLimite").value;
    if (inputTareaNueva.value != "" || fechaLimite.value != "") {
        let tarea = new Tarea(inputTareaNueva.value, fechaActual, fechaLimite);
        tareas.push(tarea);
        inputTareaNueva.value = "";
        fechaLimite.value = "";
        mostrarTareas();
    }
}

const mostrarTareas = () => {
    contenido.innerHTML = "";
    tareas.forEach(tarea => {
        let cardTarea = document.createElement("div");
        cardTarea.classList = "col-sm-4 mb-3";
        let fechaLimite = new Date(tarea.fechaLimite);
        let claseCard = fechaLimite < new Date() ? `text-bg-warning` : `text-bg-success`;
        cardTarea.innerHTML += `
            <div class="card ${claseCard}">
                <h6 class="card-header">${tarea.mostrarFecha()}</h6>
                <div class="card-body">
                    <p class="card-title">${tarea.mostrarFechaLimite()}</p>
                    <p class="card-text">${tarea.texto}</p>
                    <div class="text-center">
                        <button class="btn btn-danger btnEliminar">Eliminar</button>                
                        <button class="btn btn-primary btnEditar">Editar</button> 
                    </div>
                </div>
            </div>`;
        let btnEliminar = cardTarea.querySelector(".btnEliminar");
        btnEliminar.addEventListener("click", () => eliminarTarea(tarea));
        let btnEditar = cardTarea.querySelector(".btnEditar");
        btnEditar.addEventListener("click", () => editarTarea(tarea));
        contenido.appendChild(cardTarea);
    });
    mostrarResumen();
};

const eliminarTarea = (tarea) => {
    Swal.fire({
        title: 'Está seguro de eliminar la tarea?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {
        if (result.isConfirmed) {
            let index = tareas.indexOf(tarea);
            tareas.splice(index, 1);
            mostrarTareas();
            mostrarMensaje("Tarea eliminada!");
        }
    });
}

const editarTarea = (tarea) => {
    mostrarFormulario();
    let textoTarea = document.getElementById("inputTareaNueva");
    let fechaLimite = document.getElementById("fechaLimiteNueva");
    let btnGuardarTarea = document.getElementById("btnGuardarTarea");

    textoTarea.value = tarea.texto;
    fechaLimite.value = tarea.fechaLimite.toISOString().split("T")[0];

    btnGuardarTarea.onclick = () => {
        tarea.texto = textoTarea.value;
        tarea.fechaLimite = new Date(fechaLimite.value);
        tarea.fecha = new Date();
        mostrarTareas();
        ocultarFormulario();
    };
};



const mostrarResumen = () => {
    let resumen = document.getElementById("resumen");
    let count = 0;
    const contar = setInterval(() => {
        resumen.innerHTML = `Tareas: ${count}`;
        if (count >= tareas.length) {
            clearInterval(contar);
        }
        count++;
    }, 100);
}

const mostrarMensaje = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 2000,
        style: {
            background: '#0ABF28',
            color: 'white'
        }
    }).showToast();
}

const btnGuardarEnStorage = document.getElementById("btnGuardarEnStorage");

btnGuardarEnStorage.addEventListener("click", () => {
    Swal.fire({
        title: 'Se guardarán todas las tareas en el storage, está seguro?',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("tareas", JSON.stringify(tareas));
            mostrarMensaje("Tareas guardadas!");
        } else {
            mostrarMensaje("No se guardaron las tareas!");
        }
    });
});

const recuperarTodoDelStorage = () => {
    const precarga = document.getElementById("precarga");
    precarga.classList.remove("d-none");
    if (localStorage.getItem("tareas") !== null) {
        setTimeout(() => {
            tiempoDeGuardado = localStorage.getItem("tiempoDeGuardadoEnStorage")
            tareasRecuperadas = JSON.parse(localStorage.getItem("tareas"));
            tareas = tareasRecuperadas.map(tareaRecuperada => {
                const tarea = new Tarea(
                    tareaRecuperada.texto,
                    tareaRecuperada.fecha,
                    tareaRecuperada.fechaLimite
                );
                tarea.fecha = new Date(tareaRecuperada.fecha);
                return tarea;
            });
            mostrarTareas();
            precarga.classList.add("d-none");
        }, 2000);
    } else {
        //crear un array vacío en el storage
        localStorage.setItem("tareas", JSON.stringify([]));
        recuperarTodoDelStorage();
    }
    precarga.classList.remove("d-none");
};


const agregarTareaDesdeFormulario = () => {
    const inputTareaNueva = document.getElementById("inputTareaNueva");
    const fechaLimiteNueva = document.getElementById("fechaLimiteNueva").value;
    const fechaActual = new Date();
    if (inputTareaNueva.value !== "" || fechaLimiteNueva !== "") {
        const tarea = new Tarea(inputTareaNueva.value, fechaActual, fechaLimiteNueva);
        tareas.push(tarea);
        inputTareaNueva.value = "";
        document.getElementById("fechaLimiteNueva").value = "";
        mostrarTareas();
        ocultarFormulario();
    }
};

const ocultarFormulario = () => {
    formulariosContainer.classList.add("d-none");
    document.getElementById("inputTareaNueva").value = "";
    document.getElementById("fechaLimiteNueva").value = "";
};

const mostrarFormulario = () => {
    formulariosContainer.classList.remove("d-none");
    formulariosContainer.classList.add("formularios");
    const btnCancelarTarea = document.getElementById("btnCancelarTarea");
    btnCancelarTarea.onclick = () => ocultarFormulario();
};

let tareas = [];
let tiempoDeGuardado = 5000;
let contenido = document.getElementById("contenido");
const formulariosContainer = document.getElementById("formularios");

const btnNuevaTarea = document.getElementById("btnNuevaTarea");
btnNuevaTarea.addEventListener("click", () => {
    const btnGuardarTarea = document.getElementById("btnGuardarTarea");
    btnGuardarTarea.onclick = () => agregarTareaDesdeFormulario();
    mostrarFormulario();
});

const iniciar = () => {
    ocultarFormulario();
}

recuperarTodoDelStorage();
iniciar();