/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/

const texto = prompt("Ingresá un texto y te diré la posición de la primera vocal 👌🏽")

if (texto !== null && texto.length>0){
    let posicionVocal = 0 ;
    let hayVocal = false; // Se inicia sin encontrar la vocal

    for (let i=0 ; i<texto.length; i++){
        const letra = texto.charAt(i).toLowerCase();
        if ("aáeéiíoóuú".includes(letra)) {
            posicionVocal = i +1 // Le sumo 1 para que el usuario cuente, JS empieza en 0
            document.writeln(`La primera vocal es ${texto.charAt(i)} y está en la posición ${posicionVocal}.`); 
            hayVocal = true;
            break;
        }
    } if (hayVocal==false){
            document.writeln("Tu frase no tiene vocales 🤔")
        }

} else {
    document.writeln("No ingresaste ninguna frase. Si querés, actualizá e ingresa tu frase para que te indique la posición de la primera vocal de tu texto.")
}
