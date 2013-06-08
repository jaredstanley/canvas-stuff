
var cObj = new RGBAColor(0, 200, 130, 1);
//
var b_canvas,
contxt;

var count = 0,
x = 0, y=0, grad;

var pointed = {
	x: 0,
	y: 0,
	rad: 2,
	ang:0,
	inc:.05,
	range:100,
	tgtX:0,
	tgtY:0
};

var pointer = {
	x: 300, 
	y: 300,
	dx: 0, 
	dy: 0,
	radians: 0,
	degrees: 0,
	rotation: 0
};


window.onload = function(){
	start();
}


//
function start(){

	b_canvas = document.getElementById("c");
	contxt = b_canvas.getContext("2d");

	// grad = contxt.createLinearGradient(0,0,100, b_canvas.width);
	// grad.addColorStop(0, "rgb(255, 222, 255)");
	// grad.addColorStop(1, "rgb(0, 0, 0)");
	// contxt.fillStyle = grad;
	

	var interval = setInterval(update,30);
	console.log("start");
	
}

function update() {

	draw();

}

function draw(){
	contxt.clearRect(0,0,500,500);
	updatePointed();
	
	updatePointer();
	count++;
	//countIt(count);
}

function updatePointer(){
	pointer.dx = pointed.x-pointer.x;
	pointer.dy = pointed.y-pointer.y;
	pointer.radians = Math.atan2(pointer.dy, pointer.dx);
	pointer.degrees = pointer.radians * (180/Math.PI);

	contxt.save();
	contxt.translate(b_canvas.width/2, b_canvas.width/2);
	 //contxt.translate(pointer.x, pointer.y);
	contxt.rotate(pointer.radians);
	contxt.fillStyle = grad;
	contxt.fillRect(0, 0, 50, 1);
	contxt.restore();
 	countIt(count);
}

// function updatePointed(){
// 	pointed.ang+=pointed.inc;
// 	var npX = -100;
// 	// var npX = Math.cos(pointed.ang)*pointed.range;
// 	var npY = Math.sin(pointed.ang/.55)*pointed.range;
	
// 	pointed.x = npX+(b_canvas.width/2);
// 	pointed.y = npY+(b_canvas.width/2);

// 	contxt.beginPath();
// 	contxt.arc(pointed.x, pointed.y, pointed.rad, 0, Math.PI*2);
// 	contxt.fill();
// }


function updatePointed(){
	pointed.x+=(pointed.tgtX-pointed.x)/20;
	pointed.y+=(pointed.tgtY-pointed.y)/20;

	contxt.beginPath();
	contxt.arc(pointed.x, pointed.y, 4, 0, Math.PI*2);
	contxt.fill();

	if((Math.abs(pointed.x-pointed.tgtX)<1) || (Math.abs(pointed.y-pointed.tgtY)<1)){
		pointed.tgtX = Math.random()*500;
		pointed.tgtY = Math.random()*500;
	}
}

function countIt(num){
  
  contxt.fillStyle="#666666";
  contxt.font="30px sans-serif";
  contxt.fillText(":"+(num|0)+":", 100, 100);

}


