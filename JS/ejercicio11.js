/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

// Primero voy a pedir nombres y edades de 3 personas

const nombre1 = prompt("Ingrese el nombre de la primera persona:")
const edad1 = parseInt(prompt(`Ingrese la edad de ${nombre1}`))

const nombre2 = prompt("Ingrese el nombre de la segunda persona:")
const edad2 = parseInt(prompt(`Ingrese la edad de ${nombre2}`))

const nombre3 = prompt("Ingrese el nombre de la tercera persona:")
const edad3 = parseInt(prompt(`Ingrese la edad de ${nombre3}`))

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
    alert("Por favor ingrese números validos para las edades.")
} else {
    // Math.max()
    const edadMayor = Math.max(edad1, edad2, edad3)
    let nombreEdadMayor = ""

    if (edadMayor===edad1){
        nombreEdadMayor = nombre1
    } else if (edadMayor===edad2){
        nombreEdadMayor =nombre2
    } else {
        nombreEdadMayor = nombre3
    }
        document.writeln(`La persona con mayor edad es <strong>${nombreEdadMayor}</strong>`)
}
