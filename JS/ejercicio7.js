/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

const numeroIngresado = parseInt (prompt("Ingresá un número entre 1 y 50 para generar una pirámide invertida"))
if(isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 50){
    alert("Tenes que ingresar un número válido entre 1 y 50.")
} else {
    // Bucle desde el número ingresado hasta el 1
    for (let fila = numeroIngresado ; fila>=1 ; fila--){
        let linea = "";
    // Repito el nro tantas veces como indica su valor
    for (let columna = 1 ; columna <= fila ; columna++){
        linea = linea + fila 
    }
    document.writeln(linea + "<br>")
    }
    
}