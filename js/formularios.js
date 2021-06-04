//Crear funciones en js

/*function calcularSume(){
	alert("Hola, bienvenido :D");
}*/

/*let nombre=prompt("Ingresa tu nombre");
let edad=prompt("Ingresa tu edad");
document.write("Hola "+nombre);
document.write("<br> Tu edad es: "+edad);*/

/*let num1=parseInt(prompt("Ingresa el 1er número"));
let num2=parseInt(prompt("Ingresa el 2do número"));
document.write("La suma es: ");
document.write("<br>");
document.write(num1+num2);*/

//Funcion para sumar dos números
function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("El resultado es: "+sum)
	document.getElementById("resultadoSuma").innerHTML="<h3>La suma es: " + sum +"</h3>";
}

function Resta(numero3,numero4){
	let n3,n4,res;
	n3=parseFloat(numero3);
	n4=parseFloat(numero4);
	res=n3-n4;
	//alert("El resultado es: "+res)
	document.getElementById("resultadoResta").innerHTML="<h3>La resta es: " + res +"</h3>";
}

function Multiplicacion(numero5,numero6){
	let n5,n6,multi;
	n5=parseFloat(numero5);
	n6=parseFloat(numero6);
	multi=n5*n6;
	//alert("El resultado es: "+multi)
	document.getElementById("resultadoMultiplicacion").innerHTML="<h3>La multiplicacion es: " + multi +"</h3>";
}

function Division(numero7,numero8){
	let n7,n8,div;
	n7=parseFloat(numero7);
	n8=parseFloat(numero8);
	div=n7/n8;
	//alert("El resultado es: "+div)
	document.getElementById("resultadoDivision").innerHTML="<h3>La división es: " + div +"</h3>";
}