function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

laHora=parseInt(laHora);
switch(laHora) {

    case "7":
    case "8":
    case "9":
    case "10":
    case "11":

    alert("es mañana");
    break;

    case"12":
    case"13":
    case"14":
    case"15":
    case"16":
    case"17":
    case"18":
    case"19":
    alert("es de tarde");
    break;

    case"20":
    case"21":
    case"22":
    case"23":
    case"24":
    case"00":
    case"01":
    case"02":
    case"03":
    case"04":
    case"05":
    case"06":
    alert("es de noche");
    break;

    default: alert("la hora no existe");
    break;  

}

}//FIN DE LA FUNCIÓN