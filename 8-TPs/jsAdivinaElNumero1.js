/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeros; 
var contador=0;
var numUsar;

function comenzar()
{
  numeros=Math.floor(Math.random()*(100)+1);
  console.log (numeros);


	
	

}

function verificar()
{
contador++;
numUsar=document.getElementById("numero").value;

  if(numeros==numUsar){
    alert("gano en  " + contador + " intentos");
    contador=0;
  }else{ 
    console.log ("no ganaste ");

  } if(numUsar>numeros) {
    alert("te pasaste del numero secreto");

  }else {
    alert("te falta para el numero secreto")
  }
    
  
  
	
	
}