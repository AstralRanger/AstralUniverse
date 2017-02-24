var matter = 0;

var action = 0;

var objects = [0];

var prices = [50];

var object_types = ["String"];

function showBolt() {
	matter++;
	document.getElementById("matter-amount").innerHTML = "Matter: " + matter;
	document.getElementById("bolt").style.display = "inline";
	action = setTimeout(function hideBolt() {
						document.getElementById("bolt").style.display = "none";
						}, 50);
}

function buy(type) {
	if (matter >= prices[type])
	{
		matter -= prices[type];
		objects[type]++;
		prices[type] = Math.round(0.23*Math.pow(objects[type]+1, 3) + 3.02*Math.pow(objects[type]+1, 2) + 4.92*(objects[type]+1) + 42);
		document.getElementById("item" + type).innerHTML = object_types[type] + " - " + prices[type] + " Matter, Owned: " + objects[type];
	}
}

