let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
}
