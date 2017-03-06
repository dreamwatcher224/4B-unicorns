// JavaScript Document

// Categories


//var categories = [food, sports, animals, countries];
var food = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato", "bacon", "pork"];
var sports = ["baseball", "football", "soccer", "tennis", "badminton", "basketball", "hockey", "swimming"];
var animals = ["ant", "squirrel", "rabbit", "dog", "cat", "salamander", "alligator", "crocodile", "donkey", "horse", "tiger", "lion", "cheetah", "leopard", "lemur"];
var countries = ["argentina", "america", "china", "japan", "russia", "canada", "brazil", "italy", "australia", "mexico", "spain", "korea", "egypt", "greece", "france", "greenland", "iceland", "england", "portugal", "vietnam", "india"];




// Category Functions
function f() {
	category = food[Math.floor(Math.random() * food.length)];
	gen();
}
function s() {
	category = sports[Math.floor(Math.random() * sports.length)];
	gen();
}
function a() {
	category = animals[Math.floor(Math.random() * animals.length)];
	gen();
}
function c() {
	category = countries[Math.floor(Math.random() * countries.length)];
	gen();
} 





var counter = 0;
var storage = 0;
var index = [];
var right = false;
var blank = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var imgCount = 1;

var category = food[Math.floor(Math.random() * food.length)];

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
	$("#"+x.toLowerCase() + "_used").show();
	$("#" + x.toLowerCase()).hide();
	
	if(right == false) {
		imgCount++;
		$("#hangmanpng").attr("src", "images/Hangman-" + imgCount + ".png");
		if(imgCount == 11) {
			alert("Game Over. \nThe correct word was " + randselect.toUpperCase() + ".");
		}
		
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
	/*
		if(category == "food") {
			randselect = food[Math.floor(Math.random() * food.length)];
		} else if(category == "sports") {
			
	*/
	randselect = category;
	// Prints blank underscores
	for(var i = 0; i < randselect.length; i++) {
		blank += "_ ";
	}
	update_display();
	//document.getElementById("test").innerHTML = randselect;
	for(var i = 0; i < alphabet.length; i++) {
		$("#" + alphabet.charAt(i)).show();
		$("#" + alphabet.charAt(i) + "_used").hide();
	}
	$("#hangmanpng").attr("src", "images/Hangman.png");
	imgCount = 1;
}

function update_display() {
	document.getElementById("words").innerHTML = blank;
}

// Random Word Chooser

var randselect = "";
var blank = "";

window.onload = gen;
