var icount = 0; //iteration count (total)
var cObj = new RGBAColor(0, 0, 0, 0);
//
var main_canvas,
main_ctx,
size = 10,
itemArr = [];

var numberOfPoints = 54;
var circleRadius = 200;
var angleIncrement = 360/numberOfPoints;
var xx,yy;
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
	var loc = {
		x:0,
		y:0
	}
	for (var i = 0; i < numberOfPoints; i++) {
		loc.x = Math.random()*main_canvas.width;
		loc.y = Math.random()*main_canvas.height;
		// console.log(loc.y);

		itemArr[i] = new Dot(loc,Math.random()*4);
		itemArr[i].pos = i;
		itemArr[i].fill = randColor(angleIncrement*i*.4-55, 2, 2, .1);
	}

	createTarget();
	initTimer();	
}

function createTarget(){
	var loc = {
		x:main_canvas.width/2,
		y:main_canvas.height/2
	}
	tgt = new Dot(loc, .7);
	tgt.pos = 1000;
	tgt.fill = randColor(0,0,0,1);
}

function updateTgt(){
	var t = {
         	x:(Math.random()-Math.random())*.13,
         	y:(Math.random()-Math.random())*.53 
         }
    tgt.addIt(t);
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
         // item.addIt(t);
         item.applyForce(wind);
         item.applyForce(gravity);
         // console.log('test> '+tgt.location.x);
         item.gotoTgt(tgt);
         item.updateValues();
         // item.location.x += item.acceleration.x;
         // item.location.y += item.acceleration.y;
         // // item.location.x += (Math.random()-Math.random())*2;
         // item.location.y += (Math.random()-Math.random())*2;
         
         

        item.checkBounds(main_canvas.width, main_canvas.height);
		item.draw();
		
        //angleIncrement+=Math.random()*5;
     }


}




