//Condicionales
var a=18;
var b=12;

//Identificar el número mayor
if (a>b){
	document.write("El número mayor es: "+a)
}
else{
	document.write("El número mayor es: "+b)

}

document.write("<br>")

//Ciclo for
//Número del 0 al 10
for (var i = 0; i < 11; i++) {
	document.write(i);
}

document.write("<br>")

//Ciclo While
var i=0;
while(i<11){
	document.write("<br>" + " " + i);
	i++;
}

document.write("<br>")

//Ciclo do while
var x=0;
do{
	document.write("<br>" + " " + x)
	x++;
}while(x<11);

document.write("<br>")

//Selección multiple
//Casos o Switch case
//Validar si un número entre 1 y 4: 1=hijo, 2=hija, 3=padre y 4=madre
var familia=1;
switch(familia){
	case 1:
	document.write("HIJO")
	break;
	case 2:
	document.write("HIJA")
	break;
	case 3:
	document.write("PADRE")
	break;
	case 4:
	document.write("MADRE")
	break;
	default:
	document.write("Opción Incorrecta")
}