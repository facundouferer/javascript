const DateTime = luxon.DateTime;
const dt = DateTime.now();

// Importa la clase DateTime de la biblioteca Luxon y asigna a la variable DateTime

// Importa la clase Duration de la biblioteca Luxon y asigna a la variable Duration
const Duration = luxon.Duration;
// Crea una instancia de Duration con una duración de 3 horas y 15 minutos y asigna a la variable dur
const dur = Duration.fromObject({ hours: 3, minutes: 15 });

// Imprime en la consola el número de horas en la instancia de Duration (3)
console.log(dur.hours);
console.log(dur.minutes);
console.log(dur.seconds);
// Imprime en la consola la representación de la fecha y hora actual en formato corto (ejemplo: 25/1/2022 14:35)
console.log(dt.toLocaleString(DateTime.DATETIME_SHORT));
// Crea una nueva instancia de DateTime sumando la duración dur a la fecha y hora actual y asigna a la variable suma
const suma = dt.plus(dur);
// Imprime en la consola la representación de la fecha y hora resultante de la suma en formato corto (ejemplo: 25/1/2022 17:50)
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));
// Crea una nueva instancia de DateTime restando la duración dur a la fecha y hora actual y asigna a la variable resta
const resta = dt.minus(dur);
// Imprime en la consola la representación de la fecha y hora resultante de la resta en formato corto (ejemplo: 25/1/2022 11:20)
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)); 
