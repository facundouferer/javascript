let usuario={
	
};

let divInfoUsuario=document.getElementById("info-usuario")
if(usuario.mascota?.nombre){
	divInfoUsuario.innerHTML+=`<h2>Mascota: ${usuario.mascota.nombre}</h2>`	
}else{
	divInfoUsuario.innerHTML+=`<h2>no tiene mascota</h2>`	
}
