function Mostrar()
{var num=prompt("ingrese un numero");
var cont=0;
for(i=1;i<=num;i++){
    if(num%i==0){
        cont++;
    }
}
if(cont>2){
    alert("el numero no es primo");
}else{
    alert("es primo");}




}//FIN DE LA FUNCIÓN