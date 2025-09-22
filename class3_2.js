const fs = require("fs");
//impordime oma kuupäeva mooduli
const dateEt = require("./src/TimeET");
const textRef = "txt/vanasonad.txt";

function listWisdom(rawData){
	let folkWisdom = rawData.split(";");
	for (let i = 0; i < folkWisdom.length; i ++){
		console.log(i + 1 + ") " + folkWisdom[i]);	
	} 
}

function readTextFile(){
	fs.readFile(textRef, "utf8", (err, data)=>{
		if(err){
			console.log(err);
		} else {
			//console.log(data);
			listWisdom(data);
		}
	});
}

console.log("Täna on " + dateEt.weekDay() + " " + dateEt.fullDate());
console.log("Kell on " + dateEt.fullTime());
console.log("On " + dateEt.partOfDay() + ".");
console.log("Tänane vanasõna on:");
readTextFile();