
var icount = 0; //iteration count (total)
var dcount = 1; //draw count (to be reset at top of page on draw)
var colorInc = Math.random()*360;
var cObj = new RGBAColor(0, 200, 130, 1);
//
var b_canvas,
contxt,
newPoint;
var speed = 40;
var range = 100;
var ang = 0;
var ang2 = 0;

window.onload = function(){
	start();
}


//
function start(){
	var interval = setInterval(update,30);
	console.log("start");

	b_canvas = document.getElementById("c");
	contxt = b_canvas.getContext("2d");
	
}

function update() {

	pulse();

}

function pulse(){
	//contxt.clearRect(0, 0, b_canvas.width, b_canvas.height);
	ang+=(speed/1000);
	ang2+=(speed/1000);
	newPoint = Math.sin(ang);
	contxt.fillStyle= "#006666";
	contxt.beginPath();
	range-=.05;
	var x = Math.cos(ang2)*range;
	var y = newPoint*range;

    x += b_canvas.width/2;
    y += b_canvas.height/2;
    contxt.arc(x, y, 1, 0, Math.PI*2, true);
	contxt.fill(); 
	
	countIt(Math.round(ang*10));
}


function countIt(num){
  
  contxt.fillStyle="#666666";
  contxt.font="30px sans-serif";
  contxt.fillText(":"+num+":", 100, 100);

}


