function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta=true;
	var num;
	var acum;
	var cont_neg;
	var cont_ceros;
var cont_pos;
var acum_pos;
var acum_neg;

	while(respuesta==true)
	{ num=prompt("ingrese numero");
		num=parseInt(num);

	if(num<0){
		cont_neg++
		acum_neg=acum_neg + num;
		

		}else if(num>0 )
cont_pos++;
acum_pos=acum_pos + num;
		

		respuesta=confirm("quiere seguir?");

	
	}document.write("cantidad de neg "+cont_neg);




}//FIN DE LA FUNCIÓN