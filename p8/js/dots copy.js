var colorInc = 200;
// var colorInc = Math.random()*360;
var cObj = new RGBAColor(0, 200, 130, 1);
//
var b_canvas,
contxt,
colorsArr = ["#00a19a", "#04bf9d", "#f2e85c","#f53d54","#404040"]
curX = 0,
curY = 0, 
size = 15,
tgtX=0, 
tgtY =0,
dotArray = [];

//
function start(){
	b_canvas = document.getElementById("c");
	contxt = b_canvas.getContext("2d");


	createDots();
	
	initTimer();
	
}

function initTimer(){
	var interval = setInterval(update,20);
	// console.log("start");

	
}

function Dot(i, rad, x, y, speed, color, tgtX, tgtY){
	this.i = i;
	this.rad = rad;
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.color = color;
	this.tgtX = tgtX;
	this.tgtY = tgtY;
	// console.log(tgtX);
}

function createDots(){
	var rad;
	for (var i = 0; i < 500; i++) {
			colorInc-=.33;
		tgtX = Math.random()*600;
		tgtY = Math.random()*600;
		rad = Math.round(Math.random()*5)+3;
	    var dot = new Dot(i, 
	    				rad, 
	    				Math.random()*600, 
	    				Math.random()*600,
	    				Math.random()*3, 
	    				randColor(colorInc%360, .7, .8, 1),
	    				tgtX, tgtY);
	    dotArray.push(dot);
	    // console.log(dot);
	}
}

function update() {
	// console.log('test');
	contxt.clearRect(0,0,900,900);
	for (var i = 0; i < 300; i++) {
	    var item = dotArray[i];
	    contxt.fillStyle = item.color;
	    contxt.beginPath();
	   // console.log(item.x);
	     item.x+=(item.tgtX-item.x)/10;
	   // item.x = item.tgtX;
	    item.y+=(item.tgtY-item.y)/10;

	    if(Math.abs(item.x-item.tgtX)<1){
	    	item.tgtX = Math.random()*600;
	    	item.tgtY = Math.random()*600;
	    }
	    

	    contxt.arc(item.x, item.y, item.rad, 0,2*Math.PI, false);	
	    
	    contxt.fill();

	}
	// console.log('update '+ dotArray[i]);
	
	

}


function randColor(r, g, b, a){

cObj.setFromHSV(r, g, b, a);

var output = cObj.r+","+cObj.g+","+cObj.b;


return "rgb("+output+")";
}
