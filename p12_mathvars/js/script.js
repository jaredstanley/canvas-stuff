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
	// radius-=.006;
	// curx = 0;
	curx = Math.cos(anglex)*(amplitude);
	cury = Math.sin(angley)*(amplitude);
	// cury = Math.tan(angley)*(amplitude);

	curx+= center;
	cury+= center;

	main_context.arc(curx, cury, radius, 0, Math.PI*2, false);
	main_context.fill();

}
/*
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

}*/



$(function() {
	$( "#sliderradius" ).slider({
		change: function(event, ui){
			resetGraph(ui);
		}
	});
});

$(function() {
	$( "#slideramplitude" ).slider({
		change: function(event, ui){
			resetGraph(ui);
		}
	});
});

$(function() {
	$( "#sliderincrement" ).slider({
		change: function(event, ui){
			resetGraph(ui);
		}
	});
});

function resetGraph(ui){
	var radval = $('#sliderradius').slider("value");
	var ampval = $('#slideramplitude').slider("value");
	var incval = $('#sliderincrement').slider("value");
	// console.log('resetGraph '+ ui.value);
	// console.log('scoped '+ $('#sliderradius').slider("value"));
	main_context.clearRect(0,0,main_canvas.width, main_canvas.height);
	anglex = 0, 
	angley = 0, 
	freqx = (ampval+1)/100,
	freqy = (ampval+1)/100,
	amplitude = 0,
	radius = ((radval+1)/100)*20,
	curx = 0,
	increment = incval/100,
	cury = 0;
	//initTimer();
	
}

