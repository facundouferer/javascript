
/**De forma similar podemos trabajar la clase Interval, 
 * que con su constructor podemos enviar dos fechas 
 * y nos devuelve el intervalo entre ellas, 
 * pudiendo acceder para realizar los cálculos que necesitemos.
 */

const DateTime = luxon.DateTime

const Interval = luxon.Interval

const now = DateTime.local(2022, 11, 15)
const later = DateTime.local(2023, 12, 22)
const i = Interval.fromDateTimes(now, later)

console.log("DÍAS: ", i.length('days'))
console.log("HORAS:", i.length('hours'))
console.log("MINUTOS:", i.length('minutes'))
