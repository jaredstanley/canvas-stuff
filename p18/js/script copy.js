var icount = 0; //iteration count (total)
var cObj = new RGBAColor(0, 0, 0, 0);
//
var main_canvas,
main_ctx,
size = 10,
itemArr = [];

var numberOfPoints = 77;
var angleIncrement = 360/numberOfPoints;
var tgt;
var wind = {
		x:-.31,
		y:0
	}
var gravity = {
	x:0,
	y:.9

}

//
window.onload = function(){
	init();
	
}
//
function init(){
	main_canvas = document.getElementById("c");
	main_ctx = main_canvas.getContext("2d");
	var loc = {x:0,y:0};
	for (var i = 0; i < numberOfPoints; i++) {
		loc.x = Math.random()*main_canvas.width;
		loc.y = Math.random()*main_canvas.height;
		// console.log(loc.y);

		itemArr[i] = new Dot(loc,Math.random()*3+1);
		itemArr[i].pos = i;
		itemArr[i].fill = randColor(angleIncrement*i*.4-60, 2, 2, .1);
	}

	createTarget();
	initTimer();	
}

function createTarget(){
	var loc = {
		x:main_canvas.width/2,
		y:main_canvas.height/2
	}
	tgt = new Dot(loc, 1);
	// tgt.fill = randColor(2,222,222,.1);

}

function updateTgt(){
	if(Math.abs(tgt.velocity.y<.5)){
		var t = {
         	x:(Math.random()-Math.random())*.13,
         	y:(Math.random()-Math.random())*.23 
         	}
    	tgt.addIt(t);
	}

	tgt.checkBounds(main_canvas.width, main_canvas.height);
	tgt.updateValues();

	tgt.draw();
	
}

function initTimer(){	
	window.requestAnimationFrame(initTimer);
	update();
}


function update() {
	
	drawItems();
	countIt();

}


function drawItems(){
	main_ctx.clearRect(0,0, main_canvas.width, main_canvas.height);
	var item;
	 updateTgt();
	for (var i = 0; i < itemArr.length; i+=1) {
		item = itemArr[i];
		 main_ctx.fillStyle= item.fill;	
         var t = {
         	x:(Math.random()-Math.random())*2,
         	y:(Math.random()-Math.random())*.3 
         }
         //item.addIt(t);
         //item.applyForce(wind);
         //item.applyForce(gravity);
         // console.log('test> '+tgt.location.x);
         item.gotoTgt(tgt);
         item.updateValues();
         
         

        //item.checkBounds(main_canvas.width, main_canvas.height);
		item.draw();
		
        //angleIncrement+=Math.random()*5;
     }
    


}




