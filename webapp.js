// JavaScript Document

// Categories
var categories = [food, sp	orts, animals, countries];
var food = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato", "bacon", "pork", "ice cream"];
var sports = ["baseball", "football", "soccer", "table tennis", "tennis", "badminton", "basketball", "water polo", "hockey", "swimming"];
var animals = ["ant", "squirrel", "rabbit", "dog", "cat", "salamander", "alligator", "crocodile", "donkey", "horse", "tiger", "lion", "cheetah", "leopard", "lemur"];
var countries = ["Argentina", "America", "China", "Japan", "Russia", "Canada", "Brazil", "Italy", "Australia", "Mexico", "Spain", "Korea", "Egypt", "Greece", "France", "Greenland", "Iceland", "England", "Portugal", "Vietnam", "India"];

// Random Word Chooser
// >>>>> Julia
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
//=======
var category = 
var randselect = category[Math.floor(Math.random() * category.length)];

// Category Functions
function c(val) {
	category = 
}




// >>>>>>> Version1.0
