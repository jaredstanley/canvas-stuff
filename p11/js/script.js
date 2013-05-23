//
var main_canvas,
main_context,
anglex = 0, 
angley = 0, 
freqx = .5,
freqy = .5,
amplitude = 0,
radius = 2,
curx = 0,
increment = .3,
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
	main_context.fillStyle = '#BFffff';
}
  
function initTimer(){
	window.requestAnimationFrame(initTimer);
	// update2();
	update();
}

function update() {
	//main_context.clearRect(0,0,width,width);
	main_context.beginPath();
	amplitude+=(increment);
	anglex+=freqx;
	angley+=freqy;
	// curx = 0;
	curx = Math.cos(anglex)*(amplitude);
	cury = Math.sin(angley)*(amplitude);
	// cury = Math.tan(angley)*(amplitude);

	curx+= center;
	cury+= center;

	main_context.arc(curx, cury, radius, 0, Math.PI*2, false);
	main_context.fill();

}
function update2() {
	//main_context.clearRect(0,0,width,width);
	main_context.beginPath();
	amplitude+=(freqx);	
	// amplitude=200;	
	anglex+=freqx;
	angley+=freqy;
	curx = Math.cos(anglex)*200;
	cury = Math.sin(angley)*amplitude;

	curx+= center;
	cury+= center;

	main_context.arc(curx, cury, radius, 0, Math.PI*2, false);
	main_context.fill();

}



