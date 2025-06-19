/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
 */

let cadenaTexto = ""

let textoUsuario = prompt("Ingresá un texto. Precioná Cancelar para salir.")

while (textoUsuario != null){
    if (textoUsuario == ""){
        cadenaTexto = textoUsuario
    } else {
        cadenaTexto = cadenaTexto + "-" + textoUsuario
    }
textoUsuario = prompt("Ingresá otro texto. Presioná Cancelar para salir.");
} 

document.writeln (cadenaTexto)