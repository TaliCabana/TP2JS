//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt("Por favor ingrese su edad para que así le indique si puede conducir: "))

if (isNaN(edad)) {
    alert ("La edad ingresada no es válida")
} else if (edad < 18) {
    alert ("Sos menor de edad, aún no podés conducir")
} else {
    alert ("Sos mayor de edad, ya podés conducir")
}