/*66- Crea una función llamada sumaDigitos que tome un número entero como argumento y
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar
6 (1 + 2 + 3).*/

function sumaDigitos (numero){
    let suma = 0;
    while (numero > 0) {
        suma += numero % 10;
        numero = Math.floor(numero /10);
    }
    return suma;
}
console.log(sumaDigitos(123));