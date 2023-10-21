//Primero//
let edad = prompt("Ingrese su edad");

if (edad >= 18){
    alert("Usted es mayor de edad")
} else {
    alert("Usted es menor de edad")
};


//Segundo//
let nota1 = parseFloat(prompt("Ingrese la primer nota"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
let nota3 = parseFloat(prompt("Ingrese la última nota"));

let promedio = (nota1 + nota2 + nota3) / 3

alert("Su promedio es de " + promedio);

if (promedio > 6){
    alert("Aprobó la materia. ¡Felicidades!")
} else {
    alert("Reprobó. Tendrá que esforzarse más.")
};


//Tercera//
let a = parseFloat(prompt("Número uno"));
let b = parseFloat(prompt("Número dos"));

if (a === b){
    alert("A y B son iguales")
} else if(a > b){
    alert("A es mayor que B")
} else {
    alert("A es menor que B")
};


//Cuarto//
let n1 = prompt("Ingrese un número");
let n2 = prompt("ingrese otro número");

if (n1 > n2){
    alert(n2 + ", " + n1);
} else {
    alert(n1 + ", " + n2);
};


//Quinto//
let peso = prompt("Ingrese su peso (kg)")

if (peso <= 40){
    alert("Usted está bajo de peso")
} else if (peso >= 41 && peso <= 70){
    alert("Es una persona con peso promedio")
} else {
    alert("Usted tiene sobrepeso")
};


//Sexta//
let dia = parseFloat(prompt("Escriba un número del 1 al 7"));

if (dia === 1){
    alert("Lúnes")
} else if (dia === 2){
    alert("Martes")
} else if (dia === 3){
    alert("Miércoles")
} else if (dia === 4){
    alert("Jueves")
} else if (dia === 5){
    alert("Vienes")
} else if (dia === 6){
    alert("Sábado")
} else if (dia === 7){
    alert("Domingo")
} else {
    alert("Escribió un número fuera de rango. Escriba un número entre 1 y 7")
};


//Séptima//
let gasto = parseFloat(prompt("Ingrese el valor de su compra (dólares)"))

if (gasto > 1000){
    alert("Tiene un 20% de descuento. El total a pagar es " + gasto * 0.80);
} else {
    alert("Tiene un 5% de descuento. El total a pagar es " + gasto * 0.95);
};


//Octava//
let horas = prompt("Ingrese cuántas horas trabaja")

if (horas <= 40){
    alert("Su salario semanal es de " + horas * 16000 + " pesos (COP)." )
} else {
    alert("Su salario semanal es de " + horas * 20000  + " pesos (COP).")
};


//Novena//
let persona1 = prompt("Ingrese el nombre de la primer persona")
let edad1 = prompt("Ingrese la edad")

let persona2 = prompt("Ingrese el nombre de la segunda persona")
let edad2 = prompt("Ingrese la edad")

if (edad1 > edad2){
    alert('la persona con mayor edad es: ' + persona1 + ' con una edad de ' + edad1 + ' años' );
} else {
    alert('la persona con mayor edad es: ' + persona2 + ' con una edad de ' + edad2 + ' años' );
};


//Décima//
let camisas = prompt("Ingrese el total de camisas compradas")

if (camisas >= 3){
    alert("Se ha aplicado un descuento de un 20%")
} else {
    alert("Se ha aplicado un 10% de descuento en su compra")
};