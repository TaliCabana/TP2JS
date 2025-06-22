/* 12- Realiza un script que genere un número aleatorio entre 1 y 99
Ejercicios con String
*/

const nroRandomDecimal = Math.random() // entre 0 y 0.9999
const nroRandom99 = nroRandomDecimal * 99 // entre 0 y 98,999
const nroRandom = Math.floor(nroRandom99) // Rendondea para abajo
const nroRandomEntero = parseInt(nroRandom) +1

document.writeln(`El nro aleatorio generado es ${nroRandomEntero} `)