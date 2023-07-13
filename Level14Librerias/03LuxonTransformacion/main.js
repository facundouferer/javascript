const DateTime = luxon.DateTime

const dt = DateTime.now();

/**Muestra la hora actual*/
console.log(dt.toLocaleString(DateTime.DATETIME_SHORT))

/**Suma 1 hora y 30 minutos a la hora actual */
const suma = dt.plus({ hours: 1, minutes: 30 })
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

/**Resta 1 mes y 30 días a la fecha actual */
const resta = dt.minus({ month: 1, days: 30 })
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
