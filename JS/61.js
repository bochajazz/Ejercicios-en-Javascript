/*
61- Escribe una función llamada esPrimo que tome un número como argumento y retorne 
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y 
por sí mismo.
*/

  /*function esPrimo(numero) {
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
  console.log(esPrimo(12));
*/
  // Ejemplo de uso
  //var numeroEjemplo = 3;
  //var resultado = esPrimo(numeroEjemplo);
  
  //console.log(`¿El número ${numeroEjemplo} es primo? ${resultado}`);


  /*Ejercicio resuelto por el profe
function esPrimo(numero) {
if (numero <= 1) {
return false;
}
for (let i = 2; i <= Math.sqrt(numero); i++)
{
if (numero % i === 0) {
return false;
}
}
return true;
}
console.log(esPrimo(7));

EXPLICACIÓN
Inicio de la función:
•
 Se define una función llamada esPrimo que toma un parámetro
numero, que es el número que queremos verificar si es primo o no.
Primer condicional:
•
 Comienza con un condicional if que verifica si el número es
menor o igual a 1 (numero <= 1). Si este es el caso, retorna false.
Los números menores o iguales a 1 no son primos según la
definición, por lo que no es necesario realizar más cálculos.
Bucle for:
•
 Si el número es mayor que 1, comienza un bucle for que
inicializa una variable i en 2 y se ejecuta hasta que i sea menor o
igual a la raíz cuadrada del número (Math.sqrt(numero)).
•
 Este bucle itera desde 2 hasta la raíz cuadrada de numero
porque, en teoría, si hay un divisor más grande que la raíz cuadrada
de numero, también habrá uno más pequeño que la raíz cuadrada.
Así que no es necesario verificar números más grandes.
•
 Cada iteración verifica si numero es divisible por i (si numero % i
=== 0). Si lo es, significa que no es un número primo y retorna
false.
Retorno si es primo:
•
 Si no se encontró ningún divisor entre 2 y la raíz cuadrada de
numero, entonces numero es primo y la función retorna true.
Finalización de la función:
•
 Si no se cumplió ninguna de las condiciones anteriores, la
función retorna true, lo que significa que el número es primo.*/

/*function esPrimo(numero) {

  let tieneResto = false;

  for (i = 2; i <= (numero - 1); i++) {
    if (numero % i == 0) {
      return false;
          }

  }
  return tieneResto;
}

*/
let numero = 7;

console.log(`Es el número ${numero} primo? ${esPrimo(numero)}`);

let numeroParaTabla = 2;

for (let i = 1; i <= 10; i = i + 1)
{

console.log(numeroParaTabla + " x " + i + " = " + (numeroParaTabla * i))
}