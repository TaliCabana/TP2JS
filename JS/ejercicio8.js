/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456

*/

const numeroIngresado = parseInt(prompt("Ingresá un número entre el 1 y el 50 para generar una pirámide con números crecientes: "))

if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 50){
    alert("Teneés que ingresar un número entre el 1 inclusive y el 50 inclusive:")
} else{
    // Bucle para generar las filas
    for (let fila = 1 ; fila <= numeroIngresado ; fila++){
        let linea = ""

        // Bucle para generar el contenido de c/fila
        for (let columna = 1 ; columna <= fila ;columna++){
            linea = linea + columna
        }
    document.writeln(linea+"<br>")
    }
}