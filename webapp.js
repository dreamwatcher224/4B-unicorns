// JavaScript Document

// Categories
var food = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato", "bacon", "pork", "ice cream"];
/*var sports = ["baseball", "football", "soccer", "table tennis", "tennis", "badminton", "basketball", "water polo", "hockey", "swimming"];
var animals = ["ant", "squirrel", "rabbit", "dog", "cat", "salamander", "alligator", "crocodile", "donkey", "horse", "tiger", "lion", "cheetah", "leopard", "lemur"];
var countries = ["Argentina", "America", "China", "Japan", "Russia", "Canada", "Brazil", "Italy", "Australia", "Mexico", "Spain", "Korea", "Egypt", "Greece", "France", "Greenland", "Iceland", "England", "Portugal", "Vietnam", "India"];
var category = "";


// Category Functions
function f(val) {
	category = food[Math.floor(Math.random() * food.length)];
}
function s(val) {
	category = sports[Math.floor(Math.random() * sports.length)];
}
function a(val) {
	category = animals[Math.floor(Math.random() * animals.length)];
}
function c(val) {
	category = countries[Math.floor(Math.random() * countries.length)];
} */
// Random Word Chooser
var randselect = food[Math.floor(Math.random() * food.length)];
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
		document.getElementById('wrong').innerHTML += "<br><p>" + x + "</p>";
	}
}
var counter = 0;
var storage = "";
var index = [null, null, null, null, null, null, null, null, null];
function v(x) {
	for(var i = 0; i < randselect.length; i++) {
		if(randselect.charAt(i) == x) {
			bool = true;
			index[counter] = x;
			counter++;
		}
	}
}
