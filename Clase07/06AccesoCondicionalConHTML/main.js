let usuario = {

};

let divInfoUsuario = document.getElementById("info-usuario")
const nombreMascota = usuario.mascota?.nombre ?? "no tiene "
divInfoUsuario.innerHTML += `<h2>Mascota: ${nombreMascota}</h2>`

