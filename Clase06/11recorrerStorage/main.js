//recorrer todo el storage y mostrarlo en consola
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log(`Clave:  ${clave} , Valor: ${localStorage.getItem(clave)}`);
}