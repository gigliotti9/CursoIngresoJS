function Mostrar()

{var numero;

	numero=prompt("ingrese un número entre 0 y 10.");
	while(numero<0 || numero>10){
		numero=prompt("ingrese un numero");

	}alert("el numero ingresado es " +numero);


}//FIN DE LA FUNCIÓN