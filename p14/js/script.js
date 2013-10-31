//
var main_canvas,
main_context,
anglex = 0, 
angley = 0, 
freqx = .5,
freqy = .5,
amplitude = 0,
radius = 3,
curx = 0,
increment = .30,
count = 0,
posArr = [],
cury = 0;

var center;

window.onload = function(){
	start();
}
//
function start(){
	main_canvas = document.getElementById("c");
	main_context = main_canvas.getContext("2d");

	init();
	initTimer();
}

function init(){
	center = main_canvas.width/2;
	main_context.fillStyle = 'rgba(143, 121, 190, .5)';
}
  
function initTimer(){
	initArr();
	window.requestAnimationFrame(initTimer);
	// update2();
	//update();
	build();
}

function initArr(){
	for(var i = 0; i<6; i+=1){
		posArr[i] = 360/[i];
	}
}

function build(){
	count++;
	main_context.clearRect(0,0,main_canvas.width, main_canvas.height);
	var radius = 100;
	var numberOfPoints=6;
	var mainRadius=100;
	var angleIncrement=360/numberOfPoints+count;

	for(var i=0;i<numberOfPoints;i+=1){
		// main_context.fillStyle=randColor(angleIncrement*i,1,1,1);
		angleIncrement = posArr[i];
		xx=(mainRadius*Math.cos((angleIncrement*i)*(Math.PI/180)));
		yy=(mainRadius*Math.sin((angleIncrement*i)*(Math.PI/180)));
		xx+=(main_canvas.width/2);
		yy+=center;
		main_context.beginPath();
		main_context.arc(xx,yy,radius,0,Math.PI*2,true);
		main_context.fill();
		var holder = posArr[i];
		holder+=1;
		//copying the array, not incrementing
		posArr[i] = holder;
		// console.log("yo");
	}
}


/*
//fibbonacci
function update() {
	//main_context.clearRect(0,0,width,width);
	main_context.beginPath();
	amplitude+=(increment);
	anglex+=freqx;
	angley+=freqy;
	// radius-=.006;
	// curx = 0;
	curx = Math.cos(anglex)*(amplitude);
	cury = Math.sin(angley)*(amplitude);
	// cury = Math.tan(angley)*(amplitude);

	curx+= center;
	cury+= center;

	main_context.arc(curx, cury, radius, 0, Math.PI*2, false);
	main_context.fill();

}*/

function update() {
	//ovals/patterns
	//main_context.clearRect(0,0,width,width);
	main_context.beginPath();
	amplitude+=(freqx);	
	amplitude=100;	
	anglex+=freqx;
	angley+=freqy;
	curx = Math.cos(anglex)*200;
	cury = Math.sin(angley)*amplitude;

	curx+= center;
	cury+= center;

	main_context.arc(curx, cury, radius, 0, Math.PI*2, false);
	main_context.fill();

}



