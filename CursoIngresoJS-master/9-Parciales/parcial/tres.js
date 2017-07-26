function Mostrar()
{
    var largo=parseInt(document.getElementById("largo").value);
 var ancho=parseInt(document.getElementById("ancho").value);

var alambre;
var perimetro;

perimetro=largo*2 + ancho*2;
alambre=perimetro * 3;

alert(alambre);



}
