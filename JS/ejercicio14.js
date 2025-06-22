//  14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const textoUsuario = prompt("Ingresá una frase, y separare cada caracer con guiones:")

if (textoUsuario !== null) {
    let textoConGuiones = "" // Aqui agregaré cada caracter con su guión

    for(let i =0 ; i < textoUsuario.length; i++){
        textoConGuiones += textoUsuario.charAt(i)

        if (i<textoUsuario.length - 1) { // o sea p/c/caracter menos para el último, por eso es "el largo (length) menos 1"
            textoConGuiones += "-"; // al caracter que no es el último, se le agrega un guión y vuelve a recorrer el bucle
        }
    }

    document.writeln(`Resultado: <strong>${textoConGuiones}</strong>`);
} else {
    document.writeln("No escribiste nada... envianos una frase ✨")
}