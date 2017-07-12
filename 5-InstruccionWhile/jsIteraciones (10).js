function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var promedio_pos=0;
	var promedio_neg=0;
	var respuesta=true;
	var num;
	var acum;
	var cont_neg=0;
	var cont_ceros=0;
var cont_pos=0;
var acum_pos=0;
var acum_neg=0;
var cont_pares=0;
var dif=0;
	while(respuesta==true)

	{ num=prompt("ingrese numero");

		num=parseInt(num);

	if(num<0){
		cont_neg++;

		acum_neg=acum_neg + num;
		

		}else if(num>0 ){

cont_pos++;

acum_pos=acum_pos + num;

	}else {

		cont_ceros++;

	} if(num%2==0){

		cont_pares++;


	}
	respuesta=confirm("quiere seguir?");
	
	promedio_pos=acum_pos/cont_pos;

	promedio_meg=acum_neg/cont_neg;

	dif=cont_neg-cont_pos;

	if(dif<0)

	{dif=dif*-1;
	}
	
	}if(cont_neg>0){

		promedio_neg=acum_neg/cont_neg;

	}else {

		promedio_neg="no hay numeros neg";
	}
	if(cont_pos>0){

		promedio_pos=acum_pos/cont_pos;

	}else{
		promedio_pos="no hay numeros pos";
	} 

	
	document.write("cantidad de neg "+cont_neg+
				" <br> cantidad de pos "+cont_pos+
				" <br> suma de pos " +acum_pos+
				" <br> suma de neg "+acum_neg+
				" <br> promedio de pos " +promedio_pos+
				" <br> promedio de neg " +promedio_neg+
				" <br> cantidad de ceros " +cont_ceros+
				" <br> cantidad de pares " +cont_pares+
				" <br> diferencia de neg y pos " +dif)



}//FIN DE LA FUNCIÓN