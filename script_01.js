
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

// module: addition a + b |  test:

// output(subtract(2,2));
// output(subtract(2,-2));
// output(subtract(2,0));
// let a = prompt("Gib den ersten Wert ein:");
// let op = prompt("Wähle eine Rechenart (+, -, *, /):");
// let b = prompt("Gib den zweiten Wert ein:");


function add(a,b) {
	return a+b;
	
}

// module: subtraction a - b |  test:

function subtract(a,b) 
{
return a-b;

}


// module: multiplication a * b |  test:

// output(multiply(3,2));

// output(multiply(3,-2));

// output(multiply(3,0));

function multiply(a,b) {
	return a*b;
	
}

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!";

startApp()
function startApp(params) {
	output(calculator(getNum(), getNum(), getOp()));
}
function getNum(params) {
	return parseInt(prompt("Zahl?"));
	
}
// output(getOp()); // Test für diese Funktion...
function getOp() {
	return prompt("Operator");
	
}




// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));


function divide(a,b) {


// 	if (b != 0) {
// 		return a/b;
// }   else {
// 	return ERROR_STR_DIV;
// }
	// return a/b;

	if (b == 0) // Ausnahme
	{
		return ERROR_STR_DIV;
	}
	return a/b; // Regel
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);

}
function calculator(a,b,op) {
	switch (op) {
		case "+":
			return add(a,b);
		case "-":
            return subtract(a,b);
		case "*":
             return multiply(a,b);   
		case "/":	
		case ":":
			return divide(a,b);
		default:
			return ERROR_STR_GEN;
	}
}
// module: calculator | tests:

// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#"));







// // Dateneingabe und Überprüfung

// let a = prompt("Gib den ersten Wert ein:");
// let operation = prompt("Wähle eine Rechenart (+, -, *, /):");
// let b = prompt("Gib den zweiten Wert ein:");

// if(isNaN(a) || isNaN(b)){
// console.log("Fehler: Ungültige Eingabe!");
// } else {


// // Funktionen für Grundrechenarten

// function add(a,b){
// return parseFloat(a) + parseFloat(b);
// }

// function subtract(a,b){
// return parseFloat(a) - parseFloat(b);
// }

// function multiply(a,b){
// return parseFloat(a) * parseFloat(b);
// }

// function divide(a,b){

// if (b != 0){
// 	return aparseFloat(a) / parseFloat(b);
// }   else {
// 	return "Teilen durch 0 nicht möglich"
// }
// }

// //Berechnung des Ergebnisses und Ausgabe in der Konsole

// let result;
// switch(operation){
// case "+":
// result = add(a,b);
// break;
// case "-":
// result = subtract(a,b);
// break;
// case "*":
// result = multiply(a,b);
// break;
// case "/":
// result = divide(a,b);
// break;
// default:
// console.log("Fehler: Ungültige Rechenart!");
// break;
// }

// if(result !== undefined){
// console.log("Ergebnis: " + result);
// }
// }
