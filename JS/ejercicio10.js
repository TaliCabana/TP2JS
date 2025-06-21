/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math

*/

const fila = parseInt(prompt("Ingrese la cantidad de filas que querría que tenga la tabla:"))

const columna = parseInt(prompt("Ingrese la cantidad de columnas que querría que tenga la tabla:"))

if(isNaN(fila) || isNaN(columna) || fila <= 0 || columna <= 0) {
    alert ("Debés ingresar número válidos mayores que 0:")
} else { 
    const cantCeldas = fila * columna
    let numeroCelda = cantCeldas; // Inicio desde el número mayor

    // Tabla, genero la parte exterior de la tabla
    document.writeln("<table class='table-bordered text-center m-4'>")

    // Bucle para generar las filas:
    for (let f = 1 ; f<= fila ; f++){
        document.writeln("<tr>")

        // Bucle para generar las columnas:
        for (let c = 1 ; c <= columna ; c++){
            document.writeln("<td class=td>" + numeroCelda + "</td>")
            numeroCelda-- // Disminuye el nro en la prox celda
        }
        document.writeln("</tr>") // Cierran las filas
    }
    document.writeln("</table>")
}
