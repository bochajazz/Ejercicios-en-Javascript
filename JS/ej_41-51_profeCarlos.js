/* //ej 41
let nombre = "Lucas";
let apellido = "Mazzola";

console.log(nombre + apellido)
*/

/*43. Crea una variable llamada `esEstudiante` y asígnale `true` si eres estudiante o `false`
si no lo eres. Luego, muestra un mensaje que diga "Eres estudiante" o "No eres
estudiante" en la consola según el valor de la variable.

let esEstudiante = false;
//let stockIncial = true;
if (esEstudiante) {
    console.log("No es estudiante");
    }
else {
    console.log("Es estudiante");
}
*/

function calcularIMC(peso, altura){
    if (isNaN(peso) || isNaN(altura)) //isNaN sean números si peso o altura
    {
        return "Error: Ingrese valores numéricos para el peso y la altura.";
    }
    
    const imc = peso / (altura * altura);
    const imcRedondeado = imc.toFixed(2);
    const categoria = obtenerCategoriaIMC(imcRedondeado);
    return {
        imc: imcRedondeado
    }
}
