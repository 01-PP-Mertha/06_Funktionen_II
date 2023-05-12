
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

// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

// function add(a, b) {
// 	let c = a + b;
// 	return c;
	
// }



// // module: output | test:
// // output("hello");
// // output(2);
// function output(outputData) {
// 	console.log(outputData);
// }






// // Dateneingabe und Überprüfung

let a = prompt("Gib den ersten Wert ein:");
let operation = prompt("Wähle eine Rechenart (+, -, *, /):");
let b = prompt("Gib den zweiten Wert ein:");

if(isNaN(a) || isNaN(b)){
console.log("Fehler: Ungültige Eingabe!");
} else {


// Funktionen für Grundrechenarten

function add(a,b){
return parseFloat(a) + parseFloat(b);
}

function subtract(a,b){
return parseFloat(a) - parseFloat(b);
}

function multiply(a,b){
return parseFloat(a) * parseFloat(b);
}

function divide(a,b){
return parseFloat(a) / parseFloat(b);
}

//Berechnung des Ergebnisses und Ausgabe in der Konsole

let result;
switch(operation){
case "+":
result = add(a,b);
break;
case "-":
result = subtract(a,b);
break;
case "*":
result = multiply(a,b);
break;
case "/":
result = divide(a,b);
break;
default:
console.log("Fehler: Ungültige Rechenart!");
break;
}

if(result !== undefined){
console.log("Ergebnis: " + result);
}
}
