
    


    /*43. Crea una variable llamada `esEstudiante` y asígnale `true` si eres estudiante o `false`
    si no lo eres. Luego, muestra un mensaje que diga "Eres estudiante" o "No eres
estudiante" en la consola según el valor de la variable.
    

let fruta = 'manzana';
console.log ('mi fruta favorita es la ' + fruta);


ej 45
let numero1 = 7;
let numero2 = 3;
let resultado = numero1 - numero2;
console.log(resultado);
*/

/*Operadores y Expresiones:
46. Crea una variable llamada `temperaturaCelsius` y asígnale un valor en grados
Celsius. Convierte esta temperatura a grados Fahrenheit utilizando la fórmula `F = (C *
9/5) + 32` y muestra el resultado en la consola.


let temperaturaCelsius = 36;
let FahrenheitACelsius = (temperaturaCelsius * 9/5) + 32;
console.log('La temperatura en °C es ' + FahrenheitACelsius);

47. De ne una variable llamada `precioProducto` y otra llamada `cantidadComprada`.
Calcula el costo total de la compra multiplicando estas variables y muestra el resultado en
la consola.

let precioProducto = 500;
let cantidadComprada = 4;
console.log(precioProducto * cantidadComprada);


48. Crea una variable llamada `radio` y asígnale el radio de un círculo. Calcula el área del
círculo utilizando la fórmula `A = π * r^2` y muestra el resultado en la consola.


let radio = 3.14 * 5^2;
console.log(radio);

49. De ne una variable llamada `num1` y otra llamada `num2`. Escribe una expresión que
veri que si `num1` es mayor que `num2` y muestra el resultado (true o false) en la
consola.

let num1 = 6;
let num2 = 9;
let resultado = num1 < num2;
console.log(resultado);

50. Crea una variable llamada `cadena1` y otra llamada `cadena2`. Concatena estas dos
cadenas utilizando el operador `+` y muestra la cadena resultante en la consola.

let cadena1 = 'soy hincha de ';
let cadena2 = 'Talleres';
console.log(cadena1 + cadena2);
*/

/*Condicionales:
51. Crea una variable llamada `edad` y asigna un valor numérico. Escribe una condición
que veri que si la persona es mayor de 18 años y muestra un mensaje en la consola,
como "Eres mayor de edad", si se cumple la condición.

let edad = 15;
if (edad >= 18){
console.log('Eres mayor de edad');
} else {console.log('Eres menor de edad')};


52. De ne una variable llamada `puntuacion` y asigna un valor numérico entre 0 y 100.
Utiliza una estructura condicional `if...else` para mostrar un mensaje en la consola que
indique si la puntuación es "Aprobada" (si es mayor o igual a 60) o "Reprobada" (si es
menor a 60).

let puntuacion = 80;
if (puntuacion >= 80){
    console.log('Aprobado');
} else {console.log('Reprobado')};

53. Crea una variable llamada `diaSemana` y asígnale el nombre de un día de la semana.
Utiliza una declaración `switch` para mostrar un mensaje que indique si es un "Día
laboral" o "Fin de semana" en función del valor de `diaSemana`.


let diaSemana = 'miércoles';

switch (diaSemana) {
    case "miércoles":
      console.log("Día laboral");
      break;
    case "sábado":
        console.log("Fin de semana");
      break;}
      
54. De ne dos variables, `numero1` y `numero2`, y realiza una comparación para
determinar cuál de los dos números es mayor. Luego, muestra el número mayor en la
consola.

let numero1 = 5;
let numero2 = 76;
if (numero1 >= numero2){
    console.log(numero1);
} else {console.log(numero2)};

55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie
de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y
muestra un mensaje correspondiente en la consola.

let color = 'azul';
if (color === 'azul'){
    console.log("el color es " + color);
} else if (color =! 'azul'){
    console.log("el color es " + 'Rojo');
} else{console.log("el color es " + 'Verde');}

56. Crea una variable llamada `cali cacion` y asígnale un valor numérico entre 0 y 100.
Utiliza una estructura condicional `if...else if...else` para mostrar en la consola si la
cali cación es "Excelente," "Aprobado," o "Reprobado" según un rango de cali caciones.

let calificacion = 70;
if (calificacion => 60){
    console.log("Aprobado")
} if (calificacion <= 59){
    console.log("Reprobado")
} if (calificacion === 100)
{console.log("Excelente")}

57. De ne una variable `numero` y veri ca si es positivo, negativo o igual a cero utilizando
una declaración `if` y muestra el resultado en la consola.     

let numero = 0;

if (numero > 0){
    console.log("positivo");
} else if (numero < 0){
    console.log("negativo");
} else {
    console.log("igual");
}

58. Escribe una función llamada `esPar` que tome un número como argumento y retorne 
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.
var numero = 1;
var resultado = esPar(numero);

function esPar(numero) {
    return numero % 2 === 0;
  }
  
  console.log(`¿El número ${numero} es par? ${resultado}`);

59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una 
estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en 
función de la hora.


let hora = 10;
if (hora > 20){
    console.log("buenas noches");
} else if (hora > 13){
    console.log("buenas tardes");
} else {console.log("buenos dias");}

60. Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los lados de un triángulo. Escribe una estructura condicional para determinar si el triángulo es 
equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado 
igual).



let lado1 = 60;
let lado2 = 60;
let lado3 = 60;

if (lado1 == lado2 == lado3){
    console.log("El triangulo es equilatero");
} else if ((lado1 == lado2) != lado3){
    console.log("El triangulo es isoceles");
} else {console.log("el triangulo es escaleno");}  

Hasta acá entendí la lógica y dificultad de los problemas. En el ejercicio posterior recurrí a chatgpt porque me cuesta entender el problema y su posterior método de resolución.En

/*
61- Escribe una función llamada esPrimo que tome un número como argumento y retorne 
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y 
por sí mismo.


  function esPrimo(numero) {
    // Caso especial: 0 y 1 no son primos
    if (numero <= 1) {
      return false;
    }
  
    // Verificar si el número es divisible por algún otro número
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        // El número es divisible por otro número que no sea 1 o él mismo
        return false;
      }
    }
  
    // Si no se encontró ningún divisor, el número es primo
    return true;
  }
  
  // Ejemplo de uso
  var numeroEjemplo = 2;
  var resultado = esPrimo(numeroEjemplo);
  
  console.log(`¿El número ${numeroEjemplo} es primo? ${resultado}`);

62- Define una función llamada invierteCadena que tome una cadena de texto como 
argumento y retorne una nueva cadena con los caracteres en orden inverso.
  

function invierteCadena(cadena) {
    // Utilizar el método split para convertir la cadena en un array de caracteres,
    // luego usar reverse para invertir el orden y finalmente, unir los caracteres con join.
    return cadena.split('').reverse().join('');
  }
  
  var cadenaEjemplo = "Hola, mundo!";
  var resultado = invierteCadena(cadenaEjemplo);
  
  console.log(`Cadena original: ${cadenaEjemplo}`);
  console.log(`Cadena invertida: ${resultado}`);

63- Crea una función llamada calcularFactorial que tome un número entero positivo como 
argumento y retorne su factorial. El factorial de un número es el producto de todos los 
números enteros positivos desde 1 hasta ese número.

function calcularFactorial(numero){
if (numero < 0 || !Number.isInteger(numero))
{
    return "Error: Ingresa un número entero positivo.";
}
let factorial = 1;
for (let i =1; i <= numero; i++){
    factorial *= i;
}
return factorial;
}
let numeroEjemplo = 3;
let resultado = calcularFactorial(numeroEjemplo);
console.log("El factorial de {numeroEjemplo} es: {resultado}");

64- Escribe una función llamada contarPalabras que tome una cadena de texto como 
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están 
separadas por espacios.

65- Define una función llamada esPangrama que tome una cadena de texto como 
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas 
las letras del alfabeto al menos una vez.

66- Crea una función llamada sumaDigitos que tome un número entero como argumento y 
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar 
6 (1 + 2 + 3).
67- Escribe una función llamada calcularPotencia que tome dos números como 
argumento, base y exponente, y retorne el resultado de elevar la base al exponente.

68- Define una función llamada esPalindromo que tome una cadena de texto como 
argumento y determine si es un palíndromo. Un palíndromo es una palabra o frase que se 
lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios y signos de 
puntuación.

69- Crea una función llamada ordenarArray que tome un arreglo de números como 
argumento y retorne un nuevo arreglo con los números ordenados de manera 
ascendente.

70- Escribe una función llamada calcularFibonacci que tome un número entero positivo 
como argumento y retorne el n-ésimo término de la secuencia de Fibonacci. La secuencia 
de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos 
términos anteriores.

64- Escribe una función llamada contarPalabras que tome una cadena de texto como 
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están 
separadas por espacios.
*/

function contarPalabras(cadena) {
    // Inicializar un contador de palabras
    let contador = 0;
  
    // Variable para indicar si estamos dentro de una palabra
    let dentroDePalabra = false;
  
    // Iterar sobre cada caracter de la cadena
    for (let i = 0; i < cadena.length; i++) {
      // Verificar si el caracter actual es un espacio
      if (cadena[i] === ' ') {
        // Si estábamos dentro de una palabra, incrementar el contador y cambiar el estado
        if (dentroDePalabra) {
          contador++;
          dentroDePalabra = false;
        }
      } else {
        // Estamos dentro de una palabra
        dentroDePalabra = true;
      }
    }
  
    // Si la cadena no termina con un espacio y estábamos dentro de una palabra, incrementar el contador
    if (dentroDePalabra) {
      contador++;
    }
  
    return contador;
  }
  
  // Ejemplo de uso
  var cadenaEjemplo = "Esta es una cadena de ejemplo";
  var resultado = contarPalabras(cadenaEjemplo);
  
  console.log(`Número de palabras en la cadena: ${resultado}`);
  