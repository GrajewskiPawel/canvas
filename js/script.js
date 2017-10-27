window.onload = function(){
	var canvas = document.getElementById("myCanvas");
	var canvas2 = document.getElementById("myCanvas2");
	var ctx2 = canvas2.getContext("2d");
	var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(0,0,150,75);
		ctx.strokeStyle='blue';
		ctx.moveTo(0,0);
		ctx.lineTo(200,100);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(95,50,40,0,2*Math.PI);
		ctx.stroke();
		var grd = ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0, "red");
		grd.addColorStop(1,"white");
		ctx.fillStyle = grd;
		ctx.fillRect(10,10,150,80);
		ctx.fillStyle = "#000000";
		ctx.font = "30px Arial";
		ctx.fillText("Hello World",10,50);
	
		ctx2.beginPath();
		ctx2.moveTo(20,20);
		ctx2.quadraticCurveTo(20,100,200,20);
		ctx2.stroke();
	
		ctx2.beginPath();
		ctx2.moveTo(20, 20);
		ctx2.bezierCurveTo(20, 100, 200, 100, 200, 20);
		ctx2.stroke();
	
		ctx2.shadowBlur = 10;
		ctx2.shadowOffsetX = 20;
		ctx2.shadowColor = "Black";
		ctx2.fillStyle = "red";
		ctx2.fillRect(20,20,100,80);
		
};