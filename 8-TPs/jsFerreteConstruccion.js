/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo;
    var ancho;
    var terreno;
    var resultado;
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    
 
 resultado=(parseInt(2*largo) + parseInt(2*ancho))*3;

 alert(resultado);

}
function Circulo () 
{var terreno;
var resultado;

    terreno=parseInt(document.getElementById("Radio").value);


    resultado=(2*Math.PI)*terreno;
    resultado=resultado*3;

    alert("se necesita " + resultado + "de alambre" );
	
}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cemento_total;
    var cal_total;

    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);

    superficie= largo * ancho;

cemento_total=superficie *2;

 cal_total=superficie *3;

 alert("de cemento se neceita  " + cemento_total + "de cal se necesita  " + cal_total);
    




}