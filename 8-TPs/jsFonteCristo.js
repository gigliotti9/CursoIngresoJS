/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 

{var num;
    var contarpares=0;
    
 	num=parseInt(document.getElementById("numero").value);

     if(num<1){
         alert("numeros positivos");

     }else{
         for(i=1;i<=num;i++){
             if(i%2==0)
             contarpares++;
         }
     }alert("contadores de pares  " +contarpares);

}
function NumerosImpares()




{var num;
    var contarimpares=0;
    
 	num=parseInt(document.getElementById("numero").value);

     if(num<1){
         alert("numeros positivos");

     }else{
         for(i=1;i<=num;i++){
             if(i%2==0){

             }else {
    contarimpares++;
             }
             
         }
     }alert("contadores de impares  " +contarimpares);
    }

function NumerosDivisibles()
{
    var num=parseInt(document.getElementById("numero").value);
    var contdivisibles=0;

if(num<1){
    alert("numeros divisibles");
}else{
for(i=1;i<=num;i++){
    if(num%i==0){

    }
}

    

  
}
}