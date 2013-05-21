

//
var main_canvas,
main_context,
curX = 0,
curY = 0, 
size = 15,
tgtX=0,
ang = 0, 
tgtY = 0,
newX = 0,
newY = 0,
dotArray = [];

var h = [];  // buffers for heights
        var v = [];  // buffers for velocities
        var vrtX = [];  // vertices - WAS A VECTOR
        var vrtY = [];  // vertices - WAS A VECTOR
        var indX = []; // indices - WAS A VECTOR
        var indY = [];
        var s, n=40, clicked = false, calm = 360;
        var rad = Math.round(n/12);


start();
//
function start(){
	main_canvas = document.getElementById("c");
	main_context = main_canvas.getContext("2d");
	
	initWaves(600, 600);
	 initTimer();

	 
	
}

function initWaves(wi, hi){
            var step = wi/(n-1);
            for(var i=0; i < n; i++) {
                h.push(calm); 
                v.push(Math.random()*5);
            }
            for(var i=0; i < n  ; i++){
                vrtX.push(i*step/calm); 
                vrtY.push(i*step); 
            }
            for(var i=0; i < n-1; i++){
                indX.push(2*i, 2*i+1, 2*i+2);
                indY.push(2*i+1, 2*i+2, 2*i+3);
            }
 }
      
 function he(i) { 
 	return h[(i+n)%n]; }    // "cycled" access to array 'h'
     


function initTimer(){
	window.requestAnimationFrame(initTimer);
	update();
}


function update() {
	main_context.clearRect(0,0,600,600);
	chance = Math.random();
	for(var i=0; i<n; i++){
		if(i==22){
			ang+=.4;
			v[i] = Math.sin(ang)*100;
			
		}else{
			v[i] += ((he(i-1)+he(i+1)) + calm) /3 - h[i];
        	v[i] *= 0.98;    // damping
        	
		}
        // computing velocity from neighbouring heights
        h[i] += v[i] * 0.05;
        vrtX[i] = i;
        vrtY[i] = h[i];
        //console.log(vrtX[i]);
        main_context.beginPath();
	    main_context.arc(vrtX[i]+(10*i), vrtY[i], 1, 0,2*Math.PI, false);	
	    
	    main_context.fill();
        
	}


}



