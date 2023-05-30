//Sorteo para entradas!

const NUMERO = "14";

let nombre = prompt("Ingresá tu nombre");
let limite = 3



for (let intentos = 1; intentos <= 3; intentos++){
    let numero = prompt ("Para participar ingresa un número de 1 al 20\nTenes 3 chaces");
   if (numero === NUMERO && limite > 0)  {
        alert ( nombre + " ganaste un par de entradas para ver Argentina vs Nigeria en el Estadio Unico de La Plata");
        break;
    } else if (numero != NUMERO && limite > 0)
        alert ("Estuviste cerca " + nombre ); 
    } 
    alert ("Gracias por participar!");
    limite--;




