var icount = 0; //iteration count (total)
var cObj = new RGBAColor(0, 0, 0, 0);
//
var main_canvas,
main_ctx,
randomG = 10;
var low = 200, high = 200;
var low2 = 200, high2 = 200;
var numberOfPoints = 22;
var circleRadius = 200;
var angleIncrement = 360/numberOfPoints;
var xx,yy;
var tgt;
var wind = {
		x:-.31,
		y:0
	}
var gravity = {
	x:0,
	y:.9

}

//
window.onload = function(){
	init();
	
}
//
function init(){
	main_canvas = document.getElementById("c");
	main_ctx = main_canvas.getContext("2d");
	
	initTimer();	
}

function initTimer(){	
	window.requestAnimationFrame(initTimer);
	update();
}


function update() {
	
	drawItems();
	// countIt();

}


function drawItems(){
	// main_ctx.clearRect(0,0, main_canvas.width, main_canvas.height);     
    randomG = randomNorm(main_canvas.width/2, main_canvas.width/2);
    if(randomG<low){
    	low = randomG;
    	console.log("x is: "+low+" "+high);
    }else if(randomG>high){
    	high = randomG;
    	console.log("x is: "+low+" "+high);
    }
    var x = randomG;
    randomG = randomNorm(main_canvas.height/2, main_canvas.height/2);
    if(randomG<low2){
    	low2 = randomG;
    	console.log("y is: "+low2+" "+high2);
    }else if(randomG>high2){
    	high2 = randomG;
    	console.log("x is: "+low2+" "+high2);
    }
    var y = randomG;
    // randomG = randomBMT()[0]*100;
    // console.log(randomG);
    // randomG+=main_canvas.width/2;
    main_ctx.fillStyle = 'rgba(0,50,50,.2);'
    main_ctx.beginPath();
	main_ctx.arc(x, y, 2, 0, Math.PI*2, true); 
	
	// main_ctx.arc((Math.random()-Math.random())*100+main_canvas.width/2, 300, 1.5, 0, Math.PI*2, true); 
	main_ctx.fill();
	// console.log(randomG);

     }
   




