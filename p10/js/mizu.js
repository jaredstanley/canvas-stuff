

//
var main_canvas,
main_context,
ang = 0, 
freq = .08,
vel = 0,
stiffness = 1.04,
dampening = .99,
dir = 1;

var v = [];  
var posX = []; 
var posY = []; 
var n=300; 
var width = 1000;
var spacing = width/n;
var waterlevel = 100;

start();
//
function start(){
	main_canvas = document.getElementById("c");
	main_context = main_canvas.getContext("2d");

	initWaves();
	initTimer();
}

function initWaves(){
    for(var i=0; i < n; i++) {
        v.push(0);
    }
    
 }
  
function initTimer(){
	window.requestAnimationFrame(initTimer);
	update();
}


function update() {
	main_context.clearRect(0,0,width,width);
	main_context.beginPath();
	main_context.moveTo(0,width);
	var tgt = Math.round(n*.88); // % across the surface the target point will be located
	increaseVel();
	
	for(var i=0; i<n; i++){
		posX[i] = spacing*i;
		if(i<tgt){
			//water
			v[i] = (v[i+1]);
		}else if(i==tgt){
			//target
			ang+=freq;
			v[i] = Math.sin(ang)*vel;	
		}else if(i>tgt){
			//gelatin
			v[i] = (v[i-1]/stiffness);
		}
		v[i]*=dampening;
        posY[i] = v[i] + waterlevel;
        //
        main_context.lineTo(posX[i], posY[i]);	 
		
	}
	main_context.lineTo(width, width);
	main_context.fillStyle = '#BFEFFF';
	main_context.fill();

}

function increaseVel(){
	
	if(dir==1){
		vel+=.2;
		if(vel>100){
			dir=0;
		}
	}else{
		vel-=.8;
		if(vel<0){
			dir=1;
		}
	}
}


