// JavaScript Document

// Categories

//var categories = [food, sports, animals, countries];
var food = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato", "bacon", "pork", "ice cream"];
/*var sports = ["baseball", "football", "soccer", "table tennis", "tennis", "badminton", "basketball", "water polo", "hockey", "swimming"];
var animals = ["ant", "squirrel", "rabbit", "dog", "cat", "salamander", "alligator", "crocodile", "donkey", "horse", "tiger", "lion", "cheetah", "leopard", "lemur"];
var countries = ["Argentina", "America", "China", "Japan", "Russia", "Canada", "Brazil", "Italy", "Australia", "Mexico", "Spain", "Korea", "Egypt", "Greece", "France", "Greenland", "Iceland", "England", "Portugal", "Vietnam", "India"];



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
		}
		/*var array = document.getElementsByClassName("used button letter");
		for(var i = 0; i < array.length; i++) {
			array[i].style.display = "none";
		}
		var array2 = document.getElementsByClassName("button letter");
		for(var i = 0; i < array2.length; i++) {
			array2[i].style.display = "inline";
		}*/
	}
	document.getElementById("words").innerHTML = blank;
	//document.getElementById("words").innerHTML = "testing";
	$("#"+x.toLowerCase()).appendTo("#guessed");
	if(right == false) {
		
	} else {
		for(var j = 0; j < index.length; j++) {
			if(index[j] == 0) {
				blank = x + blank.substring(1, blank.length);
			} else {// _ _ _ _ _ 
				blank = blank.substring(0, 2*index[j]) + x + blank.substring(2*index[j]+1, blank.length);
			}
		}
		update_display();
	}
	index = [];
	counter = 0;
	right = false;
}

function update(a) {
	document.getElementById("words").innerHTML = a;
}

function gen() {
	blank = "";
	randselect = food[Math.floor(Math.random() * food.length)];
	// Prints blank underscores
	for(var i = 0; i < randselect.length; i++) {
		blank += "_ ";
	}
	update_display();
	//document.getElementById("test").innerHTML = randselect;
	document.getElementById(test + "_used").style.display = "none";
	document.getElementById(test).style.display = "inline";
	
}

function update_display() {
	document.getElementById("words").innerHTML = blank;
}

// Random Word Chooser

var randselect = "";
var blank = "";

document.write(blank);
//document.getElementById("words").innerHTML = blank;


/*var counter = 0; 
var index = [];
var correct = false;

function v(x) {
	var text = x.toLowerCase();
	for(var i = 0; i < randselect; i++) {
		if(randselect.charAt(i) == text) {
			index[counter] = i;
			counter++;
			correct = true;
		}
	}
	document.write(index);
}*/

//JQuery
