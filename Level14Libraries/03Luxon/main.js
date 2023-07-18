const DateTime = luxon.DateTime

const dt = DateTime.local(2022, 1, 25, 12, 10)
console.log(dt.toLocaleString()) //25/1/2022

/**podemos crear fechas a través de un objeto, 
 * pasando las distintas características por propiedades y valores.
 * El primero donde definimos numéricamente la fecha y hora, 
 * y el segundo donde aclaramos la zona horaria y el tipo de numeración.
 */
const dt2 = DateTime.fromObject(
    {
        year: 2022,
        month: 1,
        day: 25,
        hour: 12,
        minute: 10
    },
    {
        zone: 'America/Buenos_Aires',
        numberingSystem: 'America'
    }
)
console.log("OBJETO")
console.log(dt2.toLocaleString()) //25/1/2022
console.log(dt2.toString()) //2022-01-25T12:10:00.000-03:00
console.log(dt2.year) //2022
console.log(dt2.month) //1
console.log(dt2.day) //25
console.log(dt2.hour) //12
console.log(dt2.minute) //10
console.log(dt2.second) //0
console.log(dt2.daysInMonth) //31
console.log(dt2.monthLong) //enero

console.log("ISO")
/**crear fechas a partir de un string siguiendo la norma ISO */
const dt3 = DateTime.fromISO("2022-01-25T12:10:00")
console.log(dt3.toLocaleString()) //25/1/2022

console.log("ACTUAL")
const dt4 = DateTime.local(
    { zone: 'America/Buenos_Aires', numberingSystem: 'America' }
);

console.log(dt4.toLocaleString(DateTime.DATE_FULL)) //12 de julio de 2023
console.log(dt4.toLocaleString(DateTime.DATE_SHORT)) //12/7/2023
console.log(dt4.toLocaleString(DateTime.TIME_SIMPLE)) //19:56
console.log(dt4.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)) //mié, 12 jul 2023
console.log(dt4.toLocaleString(DateTime.DATE_HUGE)) //miércoles, 12 de julio de 2023