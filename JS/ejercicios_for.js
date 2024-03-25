//1-Escribe una función llamada imprimirNumeros 
//que tome un número como parámetro e imprima todos 
//los números desde 1 hasta ese número utilizando un ciclo for.

console.log("------EJ 1------");

function imprimirNumeros (numero) {
    for(let i = 1; i <= numero; i++){
        console.log("Iteración" + " " + i);
    }
    
}

imprimirNumeros(7);


//2-Crea una función llamada contarCaracteres que 
//tome una cadena de texto y un carácter como parámetros, 
//y devuelva la cantidad de veces que el carácter aparece 
//en la cadena. Utiliza un ciclo for para recorrer la cadena.

console.log("------EJ 1,5------");

function imprimirCadaCaracterEnUnaLinea(cadena){
    for (let i = 0; i <= cadena.length; i++) {
        console.log(cadena[i])
    }
}

imprimirCadaCaracterEnUnaLinea("lucas")

console.log("------EJ 2------");




function contarCaracteres (cadena, caracter){
  
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        
        if (cadena[i].toLowerCase() === caracter.toLowerCase()) {
            
            contador++;
        }
    }

    return contador;
}


console.log(contarCaracteres("Este es un breve texto para saber cuantos caracteres contiene", "e") + contarCaracteres("Este es un breve texto para saber cuantos caracteres contiene", "o"));


caracter = 'e';
function compararCaracter(char) {
    return char == caracter
}
/* OTRO MÉTODO PARA RESOLVER SIN USAR FOR*/
function contarCaracteres2(cadena, caracter) {
   return cadena.split('')
                .filter(char => char === caracter)
                .length;
 }

contarCaracteres2("Esta forma de resolver el ejercicio es empleando métodos", "a");


console.log("------EJ 3------");


//3-Implementa una función llamada duplicarCaracteres 
//que tome una cadena de texto como parámetro y devuelva 
//na nueva cadena donde cada carácter se duplique. Utiliza 
//un ciclo for para iterar sobre la cadena original.

function duplicarCaracteres(cadena){

  
    let resultado = "";
    for(let i = 0; i < cadena.length; i++) {
        resultado =  resultado + cadena[i] + cadena[i]; 
    
    }
    return resultado;
    }



console.log(duplicarCaracteres("hola"))

//     return(cadena.split('').map(x => x+x).join(''))
// }

// console.log(duplicarCaracteres("hola"));


//4-Desarrolla una función llamada invertirNumero que tome 
// un número como parámetro y devuelva el número invertido. 
// Por ejemplo, si se pasa el número 123, la función debería
// devolver 321. Utiliza un ciclo for para invertir el número.

console.log("------EJ 4------");


function invertirNumero(num) {
    let numeroInvertido = 0; // defino una variable que actúa como un acumulador que almacena los dígitos invertidos del número original a medida que se recorren en el bucle for. 
                            // Cada dígito se agrega al número invertido en la posición adecuada utilizando la aritmética de base 10.
    
    const numeroString = num.toString(); // Convertir el número a una cadena para poder iterar sobre sus dígitos

    for (let i = numeroString.length -1; i >= 0; i--) {
        const digito = parseInt(numeroString[i]); // Obtener el dígito en la posición i
        numeroInvertido = (numeroInvertido * 10) + digito; // Añadir el dígito al número invertido
    }

    return numeroInvertido;
}

// Ejemplo de uso:
const numeroOriginal = 123456789;
const numeroInvertido = invertirNumero(numeroOriginal);
console.log(numeroInvertido); // Output: 321


/*5-Escribe una función llamada calcularPotencia que tome dos números como parámetros, la base y 
el exponente, y devuelva el resultado de elevar la base al exponente. Utiliza un ciclo for para realizar 
la multiplicación.
*/

console.log("------EJ 5------");


/*
6-Crea una función llamada contarDigitos que tome un número como parámetro y devuelva la cantidad de dígitos que tiene. Utiliza un ciclo for para contar los dígitos.

7-Implementa una función llamada reemplazarVocales que tome una cadena de texto como parámetro y devuelva una nueva cadena donde todas las vocales se reemplacen por un guion bajo (_). Utiliza un ciclo for para iterar sobre la cadena original.

8-Desarrolla una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial. Utiliza un ciclo for para realizar la multiplicación iterativa.

9-Escribe una función llamada imprimirPares que tome un número como parámetro e imprima todos los números pares desde 1 hasta ese número utilizando un ciclo for.

10-Crea una función llamada contarLetrasMayusculas que tome una cadena de texto como parámetro y devuelva la cantidad de letras mayúsculas que contiene. Utiliza un ciclo for para recorrer la cadena y un condicional if para verificar si cada carácter es una letra mayúscula.
*/