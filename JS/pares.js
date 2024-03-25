//mostrar del 1 al 10 cual es par y cual es impar

function esPar(numero){
return true;
}


for(let i = 4; i <= 10; i ++)
{
  
  let div1 = parseInt(i / 2);
  let div2 = parseFloat(i /2);

  console.log("El número es: " + i + " es par");

if(div1 == div2){
  return true;//console.log("el numero " + i + " es par");
}
else{
  return false;//console.log("el numero " + i + " es impar");
}

}

let fechaActual = new Date();
console.log(fechaActual);