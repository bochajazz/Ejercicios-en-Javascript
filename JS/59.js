/*59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una 
estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en 
función de la hora.


let hora = 10;
if (hora > 20){
    console.log("buenas noches");
} else if (hora > 13){
    console.log("buenas tardes");
} else {console.log("buenos dias");}
*/

let hora = parseInt(prompt("Ingrese una hora en formato 24hs"));

if (hora >= 0 && hora <= 12) {
    console.log("Buen día!")

} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes!")

    } else if (hora >= 19 && hora <= 24) {
        console.log("Buenas noches!")
    } else {
        console.log("No es una hora válida, ingrese un número entre 0 y 24")
    }