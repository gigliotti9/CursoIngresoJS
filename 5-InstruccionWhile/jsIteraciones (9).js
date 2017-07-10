function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta=true;
	var max;
	var min;

	while(respuesta==true)
	{
		contador++;

		numero=prompt("ingrese numero");


		numero=parseInt(numero);
		if(contador==1){

			max=numero;

			min=numero;
		} else if (numero>max){

				max=numero;

		}if(numero<min){

			min=numero;
}
respuesta=confirm("quieres continuar");	} 


document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;

}//FIN DE LA FUNCIÓN