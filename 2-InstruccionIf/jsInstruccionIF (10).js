function Mostrar()
{var nota;

	nota=parseInt(Math.random()*(10-1))+1;

	if(nota>=9) {
		alert(nota +" excelente");
	}else {
		if(nota>=4){
			alert(nota + " aprobo");
		}else{
			alert(nota + " vamos, la proxima se puede");
		}
	}
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN