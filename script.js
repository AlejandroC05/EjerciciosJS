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


//Tercero//
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


//Sexto//
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


//Séptimo//
let gasto = parseFloat(prompt("Ingrese el valor de su compra (dólares)"))

if (gasto > 1000){
    alert("Tiene un 20% de descuento. El total a pagar es " + gasto * 0.80);
} else {
    alert("Tiene un 5% de descuento. El total a pagar es " + gasto * 0.95);
};


//Octavo//
let horas = prompt("Ingrese cuántas horas trabaja")

if (horas <= 40){
    alert("Su salario semanal es de " + horas * 16000 + " pesos (COP)." )
} else {
    alert("Su salario semanal es de " + horas * 20000  + " pesos (COP).")
};


//Noveno//
let persona1 = prompt("Ingrese el nombre de la primer persona")
let edad1 = prompt("Ingrese la edad")

let persona2 = prompt("Ingrese el nombre de la segunda persona")
let edad2 = prompt("Ingrese la edad")

if (edad1 > edad2){
    alert('la persona con mayor edad es: ' + persona1 + ' con una edad de ' + edad1 + ' años' );
} else {
    alert('la persona con mayor edad es: ' + persona2 + ' con una edad de ' + edad2 + ' años' );
};


//Décimo//
let camisas = prompt("Ingrese el total de camisas compradas")

if (camisas >= 3){
    alert("Se ha aplicado un descuento de un 20%")
} else {
    alert("Se ha aplicado un 10% de descuento en su compra")
};


//Undécimo//
let numA = parseFloat(prompt("Digite un número"));
let numB = parseFloat(prompt("Digite el segundo número"));

if (numA === numB){
    alert("Los números se multiplican. El resultado es " + (numA * numB))
} else if (numA > numB){
    alert("En este caso se restan. El resultado es " + (numA - numB))
} else {
    alert("Se suman. El resultado es " + (numA + numB))
};


//Duodécimo//
let ope = prompt("Bienvenido a la calculadora básica. ¿Qué desea hacer (suma, resta, multiplicación o división)");
let num1 = parseFloat(prompt("Ingrese el número 1"));
let num2 = parseFloat(prompt("Ingrese el número 2"));

if (ope === "Suma" || ope === "suma" || ope === "SUMA"){
    alert("El resultado de la suma es " + (num1 + num2))
} else if (ope === "Resta" || ope === "resta" || ope === "RESTA"){
    alert("El resultado de la resta es " + (num1 - num2))
} else if (ope === "Multiplicacion" || ope === "multiplicacion" || ope === "MULTIPLICACION"){
    alert("El resultado de la multiplicación es " + (num1 * num2))
} else if (ope === "Division" || ope === "division" || ope === "DIVISION"){
    alert("El resultado de la division es " + (num1 / num2))
} else {
    alert("Error. Ingrese una operación permitida/válida")
};


//Decimotercero//
let numIn = parseFloat(prompt("Ingrese un número"))

if (numIn % 2 === 0){
    alert("El número es par")
} else {
    alert("El número es impar")
};


//Decimocuarto//
alert("Calcularemos el IMC (índice de masa corporal)");
let pesokg = parseFloat(prompt("Ingrese su peso (Kg)"));
let estatura = parseFloat(prompt("Ingrese su estatura"));

let imc = pesokg / (estatura * estatura)

if (imc < 18.5){
    alert("Su IMC es " + imc + " y se encuentra bajo de peso.")
} else if (imc > 18.5 && imc < 24.9){
    alert("Su IMC es " + imc + " y su estado es saludable")
} else if (imc > 25 && imc < 29.9){
    alert("Su IMC es " + imc + " y se encuentra en sobrepeso")
} else if (imc >= 30){
    alert("Su IMC es " + imc + " y se encuentra en estado de obesidad")
} else {
    alert("Error")
};


//Decimoquinto//
let numVe = parseFloat(prompt("Ingrese un número"));

if (numVe > 0){
    alert("El número es positivo")
} else if (numVe < 0){
    alert("El número es negativo")
} else if (numVe === 0){
    alert("El número es igual a 0")
} else {
    alert("Error. Ingrese un número válido")
};


//Decimosexto//
let notaC = parseFloat(prompt("Ingrese la nota de Algoritmos"));

if (notaC > 1.0 && notaC < 3.3){
    alert("Su desempeño es BAJO")
} else if (notaC > 3.4 && notaC < 3.8){
    alert("Su desempeño es BASICO")
} else if (notaC > 3.9 && notaC < 4.4){
    alert("Su desempeño es ALTO")
} else if (notaC > 4.5 && notaC < 5.0){
    alert("Su desempeño es SUPERIOR")
} else {
    alert("Error. Ingrese una nota válida")
};


//Decimoséptimo//
let fig = prompt("Ingrese la figura a la que le desea calcular el área");

if (fig === "triangulo" || fig === "Triangulo" || fig === "TRIANGULO"){
	let base = parseFloat(prompt("Ingrese el valor de la base (cm)"))
	let altura = parseFloat(prompt("Ingrese el valor de la altura (cm)"))
	
	alert("El área del triángulo es " + ( (base * altura) / 2) )
} else if (fig === "cuadrado" || fig === "Cuadrado" || fig === "CUADRADO"){
	let lado1 = parseFloat(prompt("Ingrese el valor del lado uno (cm)")) 
	let lado2 = parseFloat(prompt("Ingrese el valor del lado dos (cm)"))
	
	alert("El área del cuadrado es " + (lado1 * lado2))
} else {
	alert("Error. Ingrese una figura permitida. No se permiten tildes")
};


//Decimoctavo//
let numEs = prompt("Ingrese un número cualquiera");

if (numEs < 10){
	alert("Es un número menor que 10")
} else if (numEs >= 10 && numEs <= 20){
	alert("Es un número entre 10 y 20")
} else if (numEs > 20){
	alert("Es un número mayor que 20")
} else {
	alert("Error. Ingrese un número válido")
};


//Decimonoveno//
let user = prompt("Ingrese su nombre de usuario");
let pass = prompt("Digite su contraseña")

if (user === "admin"){
	if (pass === "12345"){
		alert("Acceso aprobado");
	} else {
		alert("El usuario existe. La contraseña es incorrecta")
	}
} else if (pass == "12345"){
	alert("El usuario no existe")
} else {
	alert("Acceso denegado")
};


//Vigésimo//
let genero = prompt("Ingrese su género"); 
let edad = prompt("Ingrese su edad");

if (genero === "masculino" || genero === "Masculino" && edad >= 18){
	alert("Usted es elegible para el servicio militar");
} else {
	alert("Usted no es elegible para prestar el servicio militar")
};