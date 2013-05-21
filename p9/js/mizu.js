

//
var main_canvas,
main_context,
curX = 0,
curY = 0, 
size = 15,
tgtX=0,
ang = 0, 
vel = 0,
dir = 1,
tgtY = 0,
newX = 0,
newY = 0,
spacing = 3,
dotArray = [];

var h = [];  // buffers for heights
        var v = [];  // buffers for velocities
        var vrtX = [];  // vertices - WAS A VECTOR
        var vrtY = [];  // vertices - WAS A VECTOR
        var indX = []; // indices - WAS A VECTOR
        var indY = [];
        var s, 
        n=300; 
        var rad = Math.round(n/12);


start();
//
function start(){
	main_canvas = document.getElementById("c");
	main_context = main_canvas.getContext("2d");
	
	initWaves(1600, 1600);
	 initTimer();

	 
	
}

function initWaves(wi, hi){
    var step = wi/(n-1);
    for(var i=0; i < n; i++) {
        h.push(100); 
        v.push(Math.random()*5);
    }
    
 }
  
function initTimer(){
	window.requestAnimationFrame(initTimer);
	update();
}


function update() {
	main_context.clearRect(0,0,1100,1100);
	chance = Math.random();
	main_context.beginPath();
	  var tgt = Math.round(n/1.3); 
	  increaseVel();
	for(var i=0; i<n; i++){
		if(i==tgt){
			ang+=.08;
			v[i] = Math.sin(ang)*vel;	
			
		}else if(i<tgt){
			v[i] = (v[i+1]);
		}else if(i>tgt){
			v[i] = (v[i-1]/1.04);
		}
		v[i]*=.99;
        h[i] += v[i] * 0.05;
        vrtX[i] = spacing*i;
        vrtY[i] = h[i];
        //console.log(vrtX[i]);
         //if(i== tgt){
         	main_context.arc(vrtX[i], vrtY[i], 1, 0,2*Math.PI, false);	 
         //}   
	}
	main_context.fill();

}

function increaseVel(){
	
	if(dir==1){
		vel+=.2;
		if(vel>100){
			dir=0;
		}
	}else{
		vel--;
		if(vel<0){
			dir=1;
		}
	}
}


