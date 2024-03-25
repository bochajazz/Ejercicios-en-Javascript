/*let carlitos = (prompt("ingrese dato: "));
let altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
let area = (carlitos * altura) / 2;
alert("El área del triángulo es: " + area);
*/

//variable con let que termina teniendo el valor constante
let maizEnSilo = 8000;
let maizIngresado = 1500; //asumiendo que estás ingresando 1500 tonaleadas de maíz 

//estructura de control de flujo condicional
if (maizEnSilo > 0) {
    console.log("El stock inicial de maíz en el silo es: " + maizEnSilo + " toneladas.");
    maizEnSilo = maizEnSilo + maizIngresado;
} else {
    console.log("No hay maíz en stock en el silo."); //uso de función console.log()
    maizEnSilo = maizEnSilo + maizIngresado;
}
//uso de función console.log()
console.log("Stock final de maíz en el silo: " + maizEnSilo + " toneladas.");

//función: bloque de código que tiene una tarea específica, reutilizable.
//puede ser llamado en cualquier lugar del código, console, prompt y parsefloat.
