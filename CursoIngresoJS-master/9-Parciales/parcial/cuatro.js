function Mostrar()
{
var num1=prompt("ingrese dos numeros0");
var num2=prompt("ingrese dos numeros0");
var resultado;
num1=parseInt(num1);
num2=parseInt(num2);
if(num1==num2){

resultado=num1*num2;

}else if(num1>num2){
    resultado=num1-num2;

}else {
    resultado=num1+num2;
}

document.write(resultado);
}
