window.onload = function(){
	 var canvas = document.getElementById("lab1");
	var ctx = canvas.getContext("2d");
	
	
	var gradient = ctx.createLinearGradient(0,0,170,0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");
	
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.quadraticCurveTo(20,200,200,20);
	ctx.strokeStyle="#FF0000";
	ctx.lineWidth = 5;
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(20,30);
	ctx.quadraticCurveTo(30,200,200,30);
	ctx.strokeStyle=gradient;
	ctx.lineWidth = 5;
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.lineTo(20,100);
	ctx.lineTo(70,100);
	ctx.closePath();
	ctx.stroke();
};