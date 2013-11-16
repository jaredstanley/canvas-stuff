//
var main_canvas,
main_context,
increment = .30,
mX, mY,
count = 0,
xx=0, yy=0,
posArr = [],
numberOfPoints = 6,
radius = 80,
mainRadius=200,
angleIncrement,
isClicked = true;
isPressed = false,
isAligned = true,
colorArr = ['#EC008B','#A42B39','#F6893E', '#CE118C', '#FFF100','#ED1847'];
var beginDragMouseX;
var curPos = 0;

var center;

window.onload = function(){
	start();
}
//
function start(){
	//init vars
	main_canvas = document.getElementById("c");
	main_context = main_canvas.getContext("2d");
	center = main_canvas.width/2;
	//more init
	setItemCount();
	addListeners();
	//go time
	initTimer();

}

function setItemCount(){
	posArr = [];
	angleIncrement=360/numberOfPoints;
	for(var i = 0; i<numberOfPoints; i+=1){
		var ang = (angleIncrement*i+270)%360;
		posArr[i] = {
			origAngle : ang,
			curAngle : ang,
			isPressed : false
		}
	}
}

function initTimer(){	
	window.requestAnimationFrame(initTimer);
	build();
}


function build(){
	main_context.clearRect(0,0,main_canvas.width, main_canvas.height);

	for(var i=0;i<posArr.length;i+=1){
		calculateNavItemPosition(i);	
		
		styleNavItem(i);
		
		calculateNavItemRadius(i);
		
		drawNavItem(i);

		drawNavCenter(i);
		// console.log(yy);
	}
}

function drawNavCenter(i){
		var item = posArr[i];

		if(item.isPressed){
			xx = mX;
			yy = mY;			 
		}
	main_context.beginPath();
	main_context.arc(xx,yy,item.radius*.9,0,Math.PI*2,true);
	main_context.fill();
	
}

function drawNavItem(i){
	main_context.arc(xx,yy,posArr[i].radius,0,Math.PI*2,true);
	// main_context.fill();
	main_context.stroke();
		
}

function calculateNavItemRadius(i){
	var rad = radius;
	rad+=Math.max(0,450-yy);
	posArr[i].radius = rad;	
}
function styleNavItem(i){
	var g = main_context.createLinearGradient(xx,yy,200,200);
		g.addColorStop(0,colorArr[i]);
		g.addColorStop(1,colorArr[(i+1)%2]);
		main_context.fillStyle = g;
		main_context.strokeStyle = colorArr[(i+3)%3];
		main_context.lineWidth = 6;
		main_context.beginPath();
		
}
function calculateNavItemPosition(i){
	xx=(mainRadius*Math.cos((posArr[i].curAngle)*(Math.PI/180)));
	yy=(mainRadius*Math.sin((posArr[i].curAngle)*(Math.PI/180)));
	xx+=(main_canvas.width/2);
	yy+=center+450;
	posArr[i].x = xx;
	posArr[i].y = yy;

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
	console.log("pressed");
	beginDragMouseX = e.pageX;
	isPressed = true;
	e.preventDefault();
	mX = e.pageX;
	mY = e.pageY;
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
			item.isPressed = true;
			console.log(i);			
		}
	}
}

function doMove(e){
	e.preventDefault();
	mX = e.pageX;
	mY = e.pageY;
	if(isPressed){
		var newX = e.pageX;
		var draggableArea = Math.abs(main_canvas.width - beginDragMouseX);
		var pct = newX / main_canvas.width;
		// var n = newX - beginDragMouseX;
		// console.log(n);
		for(var i=0;i<numberOfPoints;i+=1){
			var tgt = posArr[i].origAngle+(draggableArea*pct)
			var cur = posArr[i].curAngle;
			// posArr[i].curAngle += (tgt-cur)/11;
			posArr[i].curAngle = tgt;
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

	for (var i = 0; i < posArr.length; i++) {
		posArr[i].isPressed = false;
	}
}
