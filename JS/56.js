/*56. Crea una variable llamada `cali cacion` y asígnale un valor numérico entre 0 y 100.
Utiliza una estructura condicional `if...else if...else` para mostrar en la consola si la
cali cación es "Excelente," "Aprobado," o "Reprobado" según un rango de cali caciones.
*/

let calificacion = 70;
if (calificacion => 60){
    console.log("Aprobado")
} if (calificacion <= 59){
    console.log("Reprobado")
} if (calificacion === 100)
{console.log("Excelente")}