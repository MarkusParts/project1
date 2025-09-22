const fs = require("fs");
//impordime oma kuupäeva mooduli
const DateEt = require("./src/dateET");
const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
	//jagan teksti ";" järgi massiiviks, listiks
	let oldWisdomList = rawText.split(";");
	//conslole.log(oldWisdomList)
	let wisdomCount = oldWisdomList.lenght;
	//console.log(wisdomCount)
	//loosni ja väljastan ühe vanasõna
	let wisdomOfTheDay = oldWisdomList[Math.round( Math.random() * (wisdomCount - 1))];
	console.log(wisdomOfTheDay);
}

function readTextFile(){
	fs.readFile(textRef, "utf8", (err, data)=>{
		if(err){
			console.log(err);
		} else {
			//console.log(data);
			pickOneSentence(data);
		}		
	});
}

console.log("Täna on " + DateEt.dateNowFormattedET());
console.log("Tänane vanasõna on:"); 
readTextFile();