/*62- Define una función llamada invierteCadena que tome una cadena de texto como 
argumento y retorne una nueva cadena con los caracteres en orden inverso.
  */
 

 function invierteCadena(cadena) {
     //Utilizar el método split para convertir la cadena en un array de caracteres,
     //luego usar reverse para invertir el orden y finalmente, unir los caracteres con join.
     return cadena.split('').reverse().join('');
 }
  
 var cadenaEjemplo = "Hola, mundo!";
   var resultado = invierteCadena(cadenaEjemplo);
  
   console.log(`Cadena original: ${cadenaEjemplo}`);
   console.log(`Cadena invertida: ${resultado}`);


 
  