window.onload = function(){
	 var canvas = document.getElementById("lab1");
	
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.quadraticCurveTo(20,100,200,20);
	ctx.stroke();
};