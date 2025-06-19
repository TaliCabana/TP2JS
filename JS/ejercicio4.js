// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0

let numeroEntrante = prompt("Ingresá un número. Presioná Cancelar para salir.")

// Mientras no pulse "Cancelar".
while (numeroEntrante != null){
    const numeroUsuario = parseFloat(numeroEntrante)
    if (isNaN(numeroUsuario)){
        alert ("Esto no es un múmero válido")
    } else {
        suma = suma + numeroUsuario
    } numeroEntrante = prompt ("Ingresá otro número. Presioná Cancelar para salir.")
}

document.writeln(`La suma total de los números ingresados es: ${suma}`)