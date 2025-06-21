/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

*/

// En este caso no le tenemos que pedir nada al usuario, asi que no hago prompt, o sea que no defino variable antes del bucle

// Ingreso al bucle, necesito nros deñ 1 al 500
for (let numero = 1 ; numero <= 500 ; numero++){
    let mensaje = numero;

    // Si es múltiplo de 4
    if (numero % 4 === 0){
        mensaje = mensaje + " (Múltiplo de 4)"
    }

    // Si es múltiplo de 9
    if (numero % 9 === 0){
        mensaje = mensaje + " (Múltiplo de 9)"
    }

    document.writeln(mensaje+"<br>")

    // Cada 5 lineas agregar una linea horizontal
    if (numero % 5 === 0) {
        document.writeln("<hr>")
        
    }
}