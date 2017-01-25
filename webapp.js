// JavaScript Document

// Random Word Chooser
var words = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato"];
var randselect = words[Math.floor(Math.random() * words.length)];
// Prints blank underscores
for(var i = 0; i < randselect.length; i++) {
	document.write("_ ");
}
// Function to check if letter is in word
var bool = false;
function check(x) {
	for(var i = 0; i < randselect.length; i++) {
		if(randselect.charAt(i) == x) {
			bool = true;
		}
	}
	if(bool == false) {
		
	}
	//document.getElementById('wrong').innerHTML += "<br>document.write(x)";
}
