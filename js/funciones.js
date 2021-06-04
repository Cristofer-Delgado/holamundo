/*Mi primer archivo de javascript con funciones*/
document.write("<h1>Hola mundo!</h1>"); //Linea que imprime "Hola Mundo" en el navegador

//Creación de variable = var o let
let nombre=" Cris ";
var edad=19;

document.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>")

document.write("<br>")

document.write(nombre + "tu edad es: " + edad);

document.write("<br>")

var num1=9;
var num2=8;
document.write(num1+num2);

document.write("<br>")

document.write(9+8);

//Tipos de dato en JS
//Númerico
let numero1=20;

//Decimal
let numero2=0.0;

//Cadena de string
let cadena="Los mejores programadores son del 3° A";

document.write(numero1);
document.write("<br>")
document.write(numero2);
document.write("<br>")
document.write(cadena);
document.write("<br>")

//Arreglos
var amigos=["Juan"," Pedro"," Pablo"];
document.write(amigos);
document.write("<br>")

//Objetos
let objetos={color:"Azul chiclamino", altura:150, ancho:50};
document.write(objetos.color);
document.write("<br>")
document.write(objetos.altura);
document.write("<br>")
document.write(objetos.ancho);
document.write("<br>")

//No definir variables
let nombre2;
document.write(nombre2);

//Valores inválidos
var x=10;
var y="Hola World";
document.write(x*y);



