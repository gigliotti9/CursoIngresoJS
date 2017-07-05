/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var resultado;
    var precio1;
    var precio2;
    var precio3;
	 precio1=document.getElementById("PrecioUno").value;
     precio2=document.getElementById("PrecioDos").value;
     precio3=document.getElementById("PrecioTres").value;

     resultado=parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
     alert("la suma es " + resultado);
        
     
}
function Promedio () 
{ var resultado;
    var precio1;
    var precio2;
    var precio3;
	 precio1=document.getElementById("PrecioUno").value;
     precio2=document.getElementById("PrecioDos").value;
     precio3=document.getElementById("PrecioTres").value;

     resultado=(parseInt(precio1) + parseInt(precio2) + parseInt(precio3))/3;
     alert("el promedio " + resultado);
	
}
function PrecioFinal () 
 
{ var resultado;
    var precio1;
    var precio2;
    var precio3;
	 precio1=document.getElementById("PrecioUno").value;
     precio2=document.getElementById("PrecioDos").value;
     precio3=document.getElementById("PrecioTres").value;

     resultado=(parseInt(precio1) + parseInt(precio2) + parseInt(precio3))*1.21;
     alert("el precio final " + resultado);
	
}