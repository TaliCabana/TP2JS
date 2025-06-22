// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

const textoUsuario = prompt("Escribí el texto para ser convertido en MAYÚSUCULA:")

if (textoUsuario != null){
    const textMayuscula =textoUsuario.toUpperCase()
        document.writeln(`Tu texto en MAYÚSUCULAS queda: <strong>${textMayuscula}</strong>`)
} else {
    document.writeln("No escribiste ningún texto? Ingresalo ahora:")
}