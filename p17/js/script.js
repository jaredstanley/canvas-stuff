//
var main_canvas,
main_context,
increment = .30,
count = 0,
xx=0, yy=0,
posArr = [],
numberOfPoints = 6,
radius = 80,
mainRadius=200,
angleIncrement,
isClicked = true;
isPressed = false,
colorArr = ['#EC008B','#A42B39','#F6893E', '#CE118C', '#FFF100','#ED1847'];

var curPos = 0;

var center;

window.onload = function(){
	start();
}
//
function start(){
	main_canvas = document.getElementById("c");
	main_context = main_canvas.getContext("2d");

	center = main_canvas.width/2;
	//
	setItemCount();

	initTimer();
	addListeners();
}

function setItemCount(){
	//radius = parseInt(Math.random()*80)+20;
	posArr = [];
	angleIncrement=360/numberOfPoints;
	for(var i = 0; i<numberOfPoints; i+=1){
		posArr[i] = [];
		posArr[i].origAngle = (angleIncrement*i+270)%360;
		posArr[i].curAngle = posArr[i].origAngle;

	}
}

function initTimer(){
	
	window.requestAnimationFrame(initTimer);
	// update2();
	//update();
	build();
}


function build(){
	main_context.clearRect(0,0,main_canvas.width, main_canvas.height);
	var alph;

	//
	for(var i=0;i<posArr.length;i+=1){
		xx=(mainRadius*Math.cos((posArr[i].curAngle)*(Math.PI/180)));
		yy=(mainRadius*Math.sin((posArr[i].curAngle)*(Math.PI/180)));
		xx+=(main_canvas.width/2);
		yy+=center+450;
		posArr[i].x = xx;
		posArr[i].y = yy;
		//even fillStyle
		var g = main_context.createLinearGradient(xx,yy,200,200);
		g.addColorStop(0,colorArr[i]);
		g.addColorStop(1,colorArr[(i+1)%2]);
		main_context.fillStyle = g;
		// main_context.fillStyle = colorArr[i];
		main_context.strokeStyle = colorArr[(i+3)%3];
		main_context.lineWidth = 6;
		main_context.beginPath();
		var rad = radius;
		rad+=Math.max(0,450-yy);
		posArr[i].radius = rad;
		main_context.arc(xx,yy,rad,0,Math.PI*2,true);
		main_context.fill();
		main_context.stroke();
		// console.log(yy);
	}
	//this line scales the main radius, creating overlapping stroked shapes
	// if(isClicked){
	// 	count+=.009;
	// 	mainRadius = Math.sin(count)*80;
	// }

	
}


function addListeners(){

	main_canvas.addEventListener("mousedown", doPressed, false);
	main_canvas.addEventListener("touchdown", doPressed, false);
	main_canvas.addEventListener("mouseup", doMouseUp, false);
	main_canvas.addEventListener("touchend", doTouchEnd, false);
	main_canvas.addEventListener("mousemove", doMove, false);
	main_canvas.addEventListener("touchmove", doMove, false);
	
}


function doPressed(e){
	isPressed = true;
	e.preventDefault();
	var mX = e.pageX;
	var mY = e.pageY;
	var item;
	var dx, dy;
	var dist;
	for (var i = 0; i < posArr.length; i++) {
		item = posArr[i];
		dx = item.x - mX;
		dy = item.y - mY;
		dist = Math.sqrt(dx*dx+dy*dy);
		if(dist < item.radius){
			//you're touching me bro
			console.log(i);			
		}
	}
}

function doMove(e){
	e.preventDefault();
	if(isPressed){
		var newX = e.pageX;
		var pct = newX / main_canvas.width;
		
		for(var i=0;i<numberOfPoints;i+=1){
			posArr[i].curAngle = posArr[i].origAngle+(360*pct);
		}
	}
}

function doMouseUp(e){
	isPressed = false;
	clicked();	
	e.preventDefault();
}

function doTouchEnd(e){
	isPressed = false;
	e.preventDefault();
	clicked();
}

function clicked(){
	isClicked = !isClicked;
}
