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
		posArr[i] = angleIncrement*i;
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
	for(var i=0;i<numberOfPoints;i+=1){
		xx=(mainRadius*Math.cos((posArr[i])*(Math.PI/180)));
		yy=(mainRadius*Math.sin((posArr[i])*(Math.PI/180)));
		xx+=(main_canvas.width/2);
		if(i==1){
			// console.log(yy);
			alph = .5;
		}else{
			alph = .041;
		}
		
		yy+=center+450;
		
		//incremented transparency fillStyle
		// main_context.fillStyle = 'rgba(143, 121, 190, '+((i+1)*.1)+')';
		//even fillStyle
		main_context.fillStyle = 'rgba(0, 0, 0, '+alph+')';
		main_context.strokeStyle = 'rgba(0,0,0,.3)';
		main_context.lineWidth = .5;
		main_context.beginPath();
		main_context.arc(xx,yy,radius,0,Math.PI*2,true);
		// main_context.arc(xx,yy,radius*(i*.1)+10,0,Math.PI*2,true);
		main_context.fill();
		main_context.stroke();
		// console.log(yy);
		//rotate each item around the circumference
		// posArr[i] = (posArr[i]+1)%360;
		// if(isClicked){
		// 	posArr[i] = (posArr[i]+1)%360;
		// }
	}
	//this line scales the main radius, creating overlapping stroked shapes
	// if(isClicked){
	// 	count+=.009;
	// 	mainRadius = Math.sin(count)*80;
	// }

	
}


function addListeners(){

	main_canvas.addEventListener("mouseup", doMouseUp, false);
	main_canvas.addEventListener("touchend", doTouchEnd, false);
	main_canvas.addEventListener("mousemove", doMove, false);
	main_canvas.addEventListener("touchmove", doMove, false);
	
}

function doMove(e){
		
	e.preventDefault();

	var newX = e.pageX;
	var dist = newX - curPos;
	// console.log(dist);	

	for(var i=0;i<numberOfPoints;i+=1){
		posArr[i] = (posArr[i]+dist)%360;
	}


	curPos = newX;

}

function doMouseUp(e){
	clicked();	
	e.preventDefault();
}

function doTouchEnd(e){
	e.preventDefault();
	clicked();
}

function clicked(){
	isClicked = !isClicked;
	// if(isClicked){
	// 	numberOfPoints = parseInt(Math.random() * 40)+4;
	// 	console.log(numberOfPoints);
	// 	setItemCount();
	// }
	// console.log(isClicked);
}
