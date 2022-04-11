"use strict";
console.log ("Hello API"); 

async function funcPablot(){
	let url = 'https://catfact.ninja/fact';
	let promisePABLOT = await fetch(url); 
	if (promisePABLOT.status === 200){
		let strCATFact = await (promisePABLOT.text()); 
		console.log (strCATFact); 
	}else{
		console.log ("ERRORES!"); 
	}
}
funcPablot(); 
