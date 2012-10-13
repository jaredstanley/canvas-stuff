var count = 0;
var wCount = 0;
var hCount = 0;
var colorInc = Math.random()*360;
var colArr = new Array("a9ab2e", "3b2212", "7d2f1c", "f2782e", "ffa736");

var b_canvas,
b_context,
curX = 0,
curY = 0, 
w = 11,
margin = .5,
size = 20,
curRowNum,
curColor;

var cObj = new RGBAColor(0, 200, 130, 1);

//curColor = 0;

function start(){
	var interval = setInterval(update,15);
	console.log("start");

	b_canvas = document.getElementById("c");
	b_context = b_canvas.getContext("2d");
	
}

function update() {

	
	curRowNum = curY/size;
		if(curRowNum%2==0){
			//even row
			if(count%2==0){
				drawTriangleBox("zig");
			}else{
				drawTriangleBox("zag");
			}
		}else{
			//odd row
			if(count%2==1){
				drawTriangleBox("zig");
			}else{
				drawTriangleBox("zag");
			}

		}
	
	countIt();
	
	curX = (w * 2+ margin ) * ( wCount % 40);
	curY = (w * 2+ margin ) * Math.floor( hCount / 40);

	count+=1;
	wCount++;
	hCount++;

	if(curY>600){
		hCount = 0;
		curY = 0;
	}

}

function drawTriangleBox(dir){
	






colorInc+=.25;	

b_context.beginPath();
		
	b_context.fillStyle= randColor(colorInc%360, 1, 1, 1);	

	if(dir=="zig"){
		

		b_context.moveTo(curX, curY);
		b_context.lineTo(curX+size, curY);
		b_context.lineTo(curX, curY+size);
		//
		b_context.moveTo(curX+size, curY);
		b_context.lineTo(curX, curY+size);
		b_context.lineTo(curX+size, curY+size);
	}else{
		


		b_context.moveTo(curX, curY);
		b_context.lineTo(curX+size, curY+size);
		b_context.lineTo(curX+size, curY);
		//
		b_context.moveTo(curX, curY);
		b_context.lineTo(curX, curY+size);
		b_context.lineTo(curX+size, curY+size);
	}

b_context.fill();

}


function countIt(){
  b_context.clearRect(0, 0, 150, 45);
  b_context.lineWidth=1;
  b_context.fillStyle="#666666";
  b_context.font="30px sans-serif";
  b_context.fillText(":"+count+":", 10, 30);


}

function randColor(r, g, b, a){

cObj.setFromHSV(r, g, b, a);

var output = cObj.r+","+cObj.g+","+cObj.b;

if(count<500){

		//console.log(" ---) "+count%360);
		//console.log("rgb("+output+")");
	}

return "rgb("+output+")";
}
