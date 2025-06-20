/* Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo: 
Input:  40773821 
Output: ‘L’
 */

const letras = "TRWAGMYFPDXBNJZQVHLCKE"

let numeroEntrante = prompt("Ingresá tu número de DNI (entre 0 y 99.999.999). Presioná 'Cancelar' para salir 😊") // la defino como variable porque va a cambiar su valor en el futuro.

// Bucle, repetimos mientras no se presione "Cancelar"
while (numeroEntrante !== null){
    const dni = parseInt(numeroEntrante) // defino la variable DNI que la convierto a nro entero. Y la defino como constante porque ahora, mientras dure el bucle, será constante

    if (isNaN(dni)){ // si ingresa cualquir texto y devuelve "NaN" es porque no es un múmero válido
        alert("No es un número válido.")
    } else if (dni < 0 || dni > 99999999) {
        alert ("El número debe estar entre 0 y 99.999.999.")
    } else {  // La situación ok, el camino feliz
        const resto = dni % 23;

        const letra = letras.charAt(resto)  // Defino la variable letra, que de la variable "letras" va a mostrar la que corresponda al índice que se calculo con el resto.

        alert(`El DNI ${dni} tiene como letra correspondiente ${letra}`)
    }

    numeroEntrante = prompt("Ingresa otro número de DNI o presioná 'Cancelar' para salir.")
} 
