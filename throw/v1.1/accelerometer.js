var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0;

var decay = .94;
var canvas; 
var ctx;

function initAccelerometer(){	
	// console.log($('#accelerationY'));
	canvas = document.getElementById("graph");
	ctx = canvas.getContext('2d');
	var sphere = document.getElementById("sphere");
	var moveData = [];
	if (window.DeviceMotionEvent != undefined) {
		window.ondevicemotion = function(e) {
			ax = event.accelerationIncludingGravity.x * 5;
			ay = event.accelerationIncludingGravity.y * 5;
			moveData.xdeg = parseInt(e.accelerationIncludingGravity.x*10);
			moveData.ydeg = parseInt(e.accelerationIncludingGravity.y*10);
			moveData.zdeg = parseInt(e.accelerationIncludingGravity.z*10);
			document.getElementById("accelerationX").innerHTML = moveData.xdeg;
			document.getElementById("accelerationY").innerHTML = moveData.ydeg;
			document.getElementById("accelerationZ").innerHTML = moveData.zdeg;
			
			if ( e.rotationRate ) {
				moveData.alpha = parseInt(e.rotationRate.alpha);
				moveData.beta = parseInt(e.rotationRate.beta);
				moveData.gamma = parseInt(e.rotationRate.gamma);
				document.getElementById("rotationAlpha").innerHTML = moveData.alpha;
				document.getElementById("rotationBeta").innerHTML = moveData.beta;
				document.getElementById("rotationGamma").innerHTML = moveData.gamma;
			}
			drawGraph(moveData);		
		}

		setInterval( move, 25);
	} 

}

function drawGraph(d){
	ctx.clearRect(10, 0, 200, 300);
	ctx.fillStyle = "#321";
	ctx.fillRect(10, 0,4, Math.abs(d.xdeg));
	ctx.fillRect(30, 0,4, Math.abs(d.ydeg));
	ctx.fillRect(50, 0,4, Math.abs(d.zdeg));
	ctx.fillStyle = "#432";
	ctx.fillRect(110, 0,4, Math.abs(d.alpha));
	ctx.fillRect(130, 0,4, Math.abs(d.beta));
	ctx.fillRect(150, 0,4, Math.abs(d.gamma));
}

function move(){
	var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
	if ( landscapeOrientation) {
		vx = vx + ay;
		vy = vy + ax;
	} else {
		vy = vy - ay;
		vx = vx + ax;
	}
	vx = vx * decay;
	vy = vy * decay;
	y += (vy / 50);
	x += (vx / 50);
	
	boundingBoxCheck();
	
	sphere.style.top = y + "px";
	sphere.style.left = x + "px";

}

function boundingBoxCheck(){
	if (x<0) { x = 0; vx = -vx; }
	if (y<0) { y = 0; vy = -vy; }
	if (x>document.documentElement.clientWidth-50) {
			 x = document.documentElement.clientWidth-50; 
			 vx = -vx; 
	}
	if (y>document.documentElement.clientHeight-50) { 
			y = document.documentElement.clientHeight-50; 
			vy = -vy; 
	}
	
}
