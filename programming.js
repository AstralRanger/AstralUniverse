var matter = 5e37 // Amount of matter, set higher for testing

var action = 0; // Lightning bolt timer

var objects = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Number of each object owned

// 50, 300, 5000
var prices = [50, 300, 5000, 80000, 1000000, 1.2e8,
              2.5e9, 4e10, 7.5e11, 1.1e13, 2.3e14,
			  5e15, 5.5e16, 6.1e17, 7.2e18, 9.1e19,
			  1.2e21, 1.8e22, 3e23, 4e24, 5.5e25,
			  7e26, 9e27, 1.1e29, 2.5e30, 5e31,
			  9e32, 9.5e33, 1.2e35, 1.5e36, 2.2e37]; // Price to buy next object

// 0.5, 2, 8
var rates = [0.5, 2, 8, 60, 400, 4000,
			 32000, 350000, 5000000, 4e8, 3e9,
			 4e10, 5e11, 6e12, 7e13, 8e14,
			 1e16, 2e17, 3e18, 4e19, 5e20,
			 6e21, 7e22, 8e23, 9e24, 1e26,
			 2e27, 3e28, 4e29, 5e30, 2.2e32]; // Rate of matter generation per object

var object_types = ["String", "Neutrino", "Quark", "Proton", "Alpha", "Atom",
				    "Glucose", "Virus", "Mitochondria", "Leukocyte", "Amoeba",
					"Ant", "Bird", "Human", "Tree", "Bronto",
					"Jet", "NeutronStar", "Ceres", "Pluto", "Moon",
					"Mars", "Earth", "Jupiter", "Sun", "Polaris",
					"Nebula", "Galaxy", "Cluster", "Supercluster", "Universe"]; // Names of the objects

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
