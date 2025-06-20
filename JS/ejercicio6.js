/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
 */

let numeroIngresado = parseInt(prompt("Ingresá un número entre 1 y 30 para generar la pirámide 🗻"))

if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 30){
    alert ("Tenes que ingresar un número entre 1 y 30")
} else {
    // Bucle para generar cada fila de la pirámide
for (let fila = 1; fila <= numeroIngresado; fila++) { // El bucle inicia en 1, se repite hasta el 30 inclusive, y se van sumando de a 1 sus valores (por eso es fila++)
    let linea = ""; // es la linea en donde se van a concatenar cada valor

    // Bucle que se repite tantas veces como filas
    for (let columna = 1; columna <= fila; columna++){ // Este segundo bucle agrega el numero tantas veces como su valor
        linea = linea + fila
    }
    document.writeln(linea + "<br>") // Se escribe cada linea en el documento
} 
}
