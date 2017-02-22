var matter = 0;

var action = 0;
function showBolt() {
	matter++;
	document.getElementById("matter-amount").innerHTML = "Matter: " + matter;
	document.getElementById("bolt").style.display = "inline";
	action = setTimeout(function hideBolt() {
						document.getElementById("bolt").style.display = "none";
						}, 50);
}

