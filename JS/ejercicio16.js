// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const frase = prompt("Ingresá una frase y la mostraré al revés 🙃");

if (frase !== null) {
  let fraseInvertida = "";

  for (let i = frase.length - 1; i >= 0; i--) {
    // ej: length = 10 ; como arranca en 0 => entonces el último caracter es length-1. Ahi arranca. Luego decrece en 1, o sea 1 caracter menos.. eso es lo que se va almacenando en fraseInvertida=""
    fraseInvertida += frase.charAt(i); // este i no arranca en el inicio, sino en el final, como defini arriba con length-1 para indicar el largo, pero restando 1 porque el inicio es en 0
  }
  document.writeln(`La frase que ingresaste, al revés se leería: <strong>${fraseInvertida}</strong>`)

} else {
    document.writeln("¿Querés que te muestre cómo se leería tu frase al revés? Actualizá la página y podrás ingresala.")
}
