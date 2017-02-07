// JavaScript Document

// Categories
var food = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato", "bacon", "pork", "tamale", "hamburger", "fries", "salad", "sushi", "pizza", "beets", "blackberries", "avocado", "figs", "cherries", "rice", "waffle", "honey"];
/*var sports = ["baseball", "football", "soccer", "tennis", "badminton", "basketball", "hockey", "swimming", "archery", "softball", "volleyball", "kayaking", "climbing", "boxing", "diving", "cycling", "fencing", "surfing", "wrestling", "canoeing", "skiing"];
var animals = ["ant", "squirrel", "rabbit", "dog", "cat", "salamander", "alligator", "crocodile", "donkey", "horse", "tiger", "lion", "cheetah", "leopard", "lemur", "fox", "wolf", "bobcat", "python", kangaroo", "sheep", "gorilla", "chameleon, "deer", mole"];
var countries = ["Argentina", "America", "China", "Japan", "Russia", "Canada", "Brazil", "Italy", "Australia", "Mexico", "Spain", "Korea", "Egypt", "Greece", "France", "Greenland", "Iceland", "England", "Portugal", "Vietnam", "India", "Netherlands"];
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





var counter = 0;
var storage = 0;
var index = [];
var right = false;
var blank = "";
function v(x) {
	var test = x.toLowerCase();
	for(var i = 0; i < randselect.length; i++) {
		if(randselect.charAt(i) == test) {
			right = true;
			index[counter] = i;
			counter++;
			//
		}
	}

	if(right == false) {
		
	} else {
		for(var j = 0; j < index.length; j++) {
			if(index[i] == 0) {
				
			} else {
				document.write("blank: " + blank);
				blank = blank.substr(0, (index[i])) + index[i] + blank.substr(index[i+1]);
			}
		}
	}
	index = [];
	counter = 0;
}
// Random Word Chooser

var randselect = food[Math.floor(Math.random() * food.length)];
document.write("randselect: " + randselect);
// Prints blank underscores
for(var i = 0; i < randselect.length; i++) {
	blank += "_ ";
}
document.write(blank);
document.write("|||" + blank);

