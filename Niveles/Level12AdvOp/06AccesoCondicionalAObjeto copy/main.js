let usuario = {
    nombre: "Alice",
    mascota: {
        nombre: "Fido",
        raza: "Dálmata"
    }
};

let divInfoUsuario = document.getElementById('info-usuario');

divInfoUsuario.innerHTML = `<p>Nombre del usuario: ${usuario.nombre}</p>`;

// Usamos el encadenamiento opcional para comprobar si el usuario tiene una mascota
if (usuario.mascota?.nombre) {
    divInfoUsuario.innerHTML += `<p>Nombre de la mascota: ${usuario.mascota.nombre}</p>`;
    divInfoUsuario.innerHTML += `<p>Raza de la mascota: ${usuario.mascota.raza}</p>`;
} else {
    divInfoUsuario.innerHTML += `<p>El usuario no tiene una mascota.</p>`;
}
