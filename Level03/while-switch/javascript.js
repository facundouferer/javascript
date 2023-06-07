let opcion = "";
while (opcion !== "salir") {
    opcion = prompt("Ingrese una opción (salir para terminar):");
    switch (opcion) {
        case "1":
            // Bloque de instrucciones para la opción 1
            alert("Ha seleccionado la opción 1");
            break;
        case "2":
            // Bloque de instrucciones para la opción 2
            alert("Ha seleccionado la opción 2");
            break;
        case "3":
            // Bloque de instrucciones para la opción 3
            alert("Ha seleccionado la opción 3");
            break;
        case "salir":
            // Bloque de instrucciones para salir del bucle
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción inválida");
    }
}
alert("Fin del programa");
