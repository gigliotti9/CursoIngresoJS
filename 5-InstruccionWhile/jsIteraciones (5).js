function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(!(sexo=="f" || sexo=="m")){
    sexo=prompt("ingrese f o m");

}alert("el sexo es " +sexo);



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN