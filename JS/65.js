/*65- De ne una función llamada esPangrama que tome una cadena de texto como
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas
las letras del alfabeto al menos una vez.*/

function esPangrama(cadena) {
 const alfabeto = "abcdfghijklmnopkrstuvwxyz";
 cadena = cadena.toLowerCase();
 let letrasEncontradas = {};
 for (let i = 0; i < cadena.lenght; i++) {
    let caracter = cadena[i];
    if (alfabeto.includes(caracter)) {
        letrasEncontradas[caracter] = true;
    }
 }
 return Object.keys(letrasEncontradas).lenght === 26;
}
//Ejemplo de uso
console.log(esPangrama("el veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"));

