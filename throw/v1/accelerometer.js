var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0;

var decay = .94;
function initAccelerometer(){	
	var sphere = document.getElementById("sphere");

	if (window.DeviceMotionEvent != undefined) {
		window.ondevicemotion = function(e) {
			ax = event.accelerationIncludingGravity.x * 5;
			ay = event.accelerationIncludingGravity.y * 5;
			document.getElementById("accelerationX").innerHTML = parseInt(e.accelerationIncludingGravity.x*10);
			document.getElementById("accelerationY").innerHTML = parseInt(e.accelerationIncludingGravity.y*10);
			document.getElementById("accelerationZ").innerHTML = parseInt(e.accelerationIncludingGravity.z*10);

			if ( e.rotationRate ) {
				document.getElementById("rotationAlpha").innerHTML = parseInt(e.rotationRate.alpha);
				document.getElementById("rotationBeta").innerHTML = parseInt(e.rotationRate.beta);
				document.getElementById("rotationGamma").innerHTML = parseInt(e.rotationRate.gamma);
			}		
		}

		setInterval( function() {
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
			y+= (vy / 50);
			x +=(vx / 50);
			
			boundingBoxCheck();
			
			sphere.style.top = y + "px";
			sphere.style.left = x + "px";
			
		}, 25);
	} 

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
