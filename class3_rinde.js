const fs = require("fs");
//impordime oma kuupäeva mooduli
const dateEt = require("./src/TimeET");
const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
	//jagan teksti ";" järgi massiiviks, listiks
	let oldWisdomList = rawText.split(";");
	//console.log(oldWisdomList);
	//let wisdomCount = oldWisdomList.length;
	//console.log(wisdomCount);
	//loosin ja väljastan ühe vanasõna
	let wisdomOfTheDay = oldWisdomList[Math.round(Math.random() * (oldWisdomList.length - 1))];
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

console.log("Täna on " + dateEt.weekDay() + " " + dateEt.fullDate());
console.log("Kell on " + dateEt.fullTime());
console.log("On " + dateEt.partOfDay() + ".");
console.log("Tänane vanasõna on:");
readTextFile();