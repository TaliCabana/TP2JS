// 15- Realiza un script que cuente el número de vocales que tiene un texto.

const textoUsuario = prompt("Ingresá una frase y te indicaré cuántas vocales tiene 🙃")

if (textoUsuario !== null){
    let cantidadVocales = 0 // contador de vocales
    
    for (let i = 0 ; i < textoUsuario.length ; i++){
       const caracter = textoUsuario.charAt(i).toLowerCase() // Recorro cada letra, y convierto a minúscula, => caracter
       
       if (caracter === "a" || caracter === "á" || caracter === "e" || caracter === "é" || caracter === "i" || caracter === "í" || caracter === "o" || caracter === "ó" || caracter === "u" || caracter === "ú"){
        cantidadVocales ++ // Sumo una vocal al contador
       }
    }  
    document.writeln(`La frase tiene una cantidad de vocal/es = <strong>${cantidadVocales}</strong>`)
 
} else {
    document.writeln("Si querés que cuente la cantidad de vocales, tenés que ingresar una frase.")
}
    





