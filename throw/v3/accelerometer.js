var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0;

var decay = .94;
var canvas; 
var ctx;
var count = 0;
var bool = 0;
var total = 0;
var scoresArr = [];

function initAccelerometer(){	
	// console.log($('#accelerationY'));
	canvas = document.getElementById("graph");
	ctx = canvas.getContext('2d');
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
			tick(e);		
			// changeIndicator();
		}

		
	} 

}
function tick(e){
	count++;
	var sum = Math.abs(e.rotationRate.alpha) + Math.abs(e.rotationRate.beta) + Math.abs(e.rotationRate.gamma);
	
	total+=parseInt(sum);
	
	if(count>30){
		count=0;
		if(total>700){
			scoresArr.push(total);
		}else{
			scoresArr = [];
		}
		total = 0;
		
		// if(bool == 0){
		// 	changeIndicator("#f00");
		// 	bool = 1;
		// }else{
		// 	changeIndicator("00f");
		// 	bool = 0;
		// }
	}
}

function drawGraph(d){
	ctx.clearRect(10, 0, 550, 150);
	countIt(scoresArr);
	ctx.fillStyle = "#321";
	ctx.fillRect(10, 0,4, Math.abs(d.xdeg));
	ctx.fillRect(30, 0,4, Math.abs(d.ydeg));
	ctx.fillRect(50, 0,4, Math.abs(d.zdeg));
	ctx.fillStyle = "#432";
	ctx.fillRect(110, 0,4, Math.abs(d.alpha));
	ctx.fillRect(130, 0,4, Math.abs(d.beta));
	ctx.fillRect(150, 0,4, Math.abs(d.gamma));
}

function changeIndicator(col){
	ctx.fillStyle = col;
	ctx.fillRect(170, 0,100, 100);

}

function countIt(num){	
  // ctx.clearRect(10, 200, 100, 100);
  ctx.lineWidth=1;
  ctx.fillStyle="#000";
  ctx.font="12px sans-serif";
  ctx.fillText("> "+num, 10, 140);



}

