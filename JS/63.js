/*63- Crea una función llamada calcularFactorial que tome un número entero positivo como 
argumento y retorne su factorial. El factorial de un número es el producto de todos los 
números enteros positivos desde 1 hasta ese número.
*/

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
    }
console.log(calcularFactorial(5));
