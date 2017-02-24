var matter = 0; // Amount of matter

var action = 0; // Lightning bolt timer

var objects = [0, 0, 0]; // Number of each object owned

// 50, 300, 500
var prices = [50, 300, 500]; // Price to buy next object

// 0.5, 2, 8
var rates = [0.5, 2, 8]; // Rate of matter generation per object

var object_types = ["String", "Neutrino", "Quark"]; // Names of the objects

var cycle = setInterval(generate, 100);

function showBolt() {
	matter++;
	document.getElementById("matter-amount").innerHTML = "Matter: " + Math.floor(matter);
	document.getElementById("bolt").style.display = "inline";
	action = setTimeout(function hideBolt() {
						document.getElementById("bolt").style.display = "none";
						}, 50);
}

function buy(type) {
	if (matter >= prices[type]) {
		matter -= prices[type];
		objects[type]++;
		prices[type] = Math.floor(prices[type]*1.2);
		document.getElementById("item" + type).innerHTML = object_types[type] + " - " + prices[type] + " Matter, Owned: " + objects[type];
		document.getElementById("matter-amount").innerHTML = "Matter: " + Math.floor(matter);
	}
}

function generate() {
	for (c = 0; c < objects.length; c++) {
		matter += (rates[c]/10) * objects[c];
	}
	document.getElementById("matter-amount").innerHTML = "Matter: " + Math.floor(matter);
}
