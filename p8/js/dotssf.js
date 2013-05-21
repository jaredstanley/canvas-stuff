

var colorInc = 200;
// var colorInc = Math.random()*360;
var cObj = new RGBAColor(0, 200, 130, 1);
//
var main_canvas,
main_context,
source_canvas,
source_context,
sourceImage,
sourceImageData,
colorsArr = ["#00a19a", "#04bf9d", "#f2e85c","#f53d54","#404040"]
curX = 0,
curY = 0, 
size = 15,
tgtX=0, 
tgtY = 0,
newX = 0,
newY = 0,
dotArray = [];
start();
//
function start(){
	main_canvas = document.getElementById("c");
	main_context = main_canvas.getContext("2d");
	source_canvas = document.getElementById("source");
	source_context = source_canvas.getContext("2d");
	

	createDots();
	
	 initTimer();

	initSrcImage();
	
}

function initTimer(){
	//var interval = setInterval(update,20);
	// console.log("start");
	window.requestAnimationFrame(initTimer);
	update();
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
	for (var i = 0; i < 100; i++) {
			// colorInc-=.33;
		tgtX = Math.random()*600;
		tgtY = Math.random()*600;
		rad = 3;
		// rad = Math.round(Math.random()*5)+3;
	    var dot = new Dot(i, 
	    				rad, 
	    				Math.random()*600, 
	    				Math.random()*600,
	    				.1, 
	    				// randColor(colorInc%360, .7, .8, 1),
	    				randColor(180%(Math.round(Math.random()*50)), .7, .8, 1),
	    				tgtX, 
	    				tgtY);
	    dotArray.push(dot);
	    // console.log(dot);
	}
}

function update() {
	// console.log('test');
	// main_context.clearRect(0,0,600,600);
	var hit,item;
	var l = dotArray.length;

	for (var i = 0; i < l; i++) {
	    item = dotArray[i];
	    
	    //to create a neater image, add this below the next chunk where item.x gets set
	    //this actually gets the previous point so it creates some inaccurate color placement
	    //but i like it that way
	    hit = getColorAtPoint(item.x, item.y);
	    if(hit>1){
	    	main_context.fillStyle = "#333333";	
	    }else{
	    	main_context.fillStyle = "#FF5721";
	    	// main_context.fillStyle = item.color;
	    }


	    newX = (item.tgtX-item.x)*item.speed + item.x;
	    newY = (item.tgtY-item.y)*item.speed + item.y;
	   // console.log(item.x);
	     // item.x+=(item.tgtX-item.x)/item.speed

	    // item.y+=(item.tgtY-item.y)/item.speed;
		item.x = newX;
	   	item.y = newY;	     
		if(Math.abs(item.x-item.tgtX)<1){
	    	item.tgtX = Math.random()*600;
	    	item.tgtY = Math.random()*600;
	    }
	    
	    

	    main_context.beginPath();
	    main_context.arc(item.x, item.y, item.rad, 0,2*Math.PI, false);	
	    
	    main_context.fill();

	}
	// console.log('update '+ dotArray[i]);
	
	

}


function getColorAtPoint(x, y){
	   return source_context.getImageData(x,y,1,1).data[0];

	// return main_context.getImageData(x,y,1,1).data;
}

function initSrcImage(){	
	sourceImage = new Image();

      sourceImage.onload = function() {
        source_context.drawImage(sourceImage, 0, 0);
        //getColorAtPoint(Math.random()*600,Math.random()*600);
      
      };
      // sourceImage.src = 'tree.jpg';
      // sourceImage.src = 'dust.gif';
      sourceImage.src = 'sf.gif';
}


function randColor(r, g, b, a){

cObj.setFromHSV(r, g, b, a);

var output = cObj.r+","+cObj.g+","+cObj.b;


return "rgb("+output+")";
}


