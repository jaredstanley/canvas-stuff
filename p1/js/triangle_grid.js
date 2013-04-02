var icount = 0; //iteration count (total)
var dcount = 0; //draw count (to be reset at top of page on draw)
var colorInc = Math.random()*360;
var cObj = new RGBAColor(0, 200, 130, 1);
//
var b_canvas,
contxt,
curX = 0,
curY = 0, 
size = 15,
margin = 3,
curRowNum;

//
function start(){
	var interval = setInterval(update,5);
	console.log("start");

	b_canvas = document.getElementById("c");
	contxt = b_canvas.getContext("2d");
	
}

function update() {

	curRowNum = curY/size;

		if(curRowNum%2==0){
			//even row
			if(icount%2==0){
				drawTriangleBox("zig");
			}else{
				drawTriangleBox("zag");
			}
		}else{
			//odd row
			if(icount%2==1){
				drawTriangleBox("zig");
			}else{
				drawTriangleBox("zag");
			}

		}
	
	countIt();
	
	curX = (size + margin ) * ( dcount % 40);
	curY = (size + margin ) * Math.floor( dcount / 40);

	icount+=1;
	dcount+=1;

	if(curY>550){
		dcount = 0;
		curY = 0;
	}

}

function drawTriangleBox(dir){
	

colorInc+=.44;	

contxt.beginPath();
		
	contxt.fillStyle= randColor(colorInc%360, 1, 1, 1);	

	if(dir=="zig"){
		//draw even row

		//top half of square, triangle 1
		contxt.moveTo(curX, curY);
		contxt.lineTo(curX+size, curY);
		contxt.lineTo(curX, curY+size);
		
		//bottom half of square, triangle 2
		contxt.moveTo(curX+size, curY);
		contxt.lineTo(curX, curY+size);
		contxt.lineTo(curX+size, curY+size);
	}else{
		//draw odd row		

		//top half of square, triangle 1
		contxt.moveTo(curX, curY);
		contxt.lineTo(curX+size, curY+size);
		contxt.lineTo(curX+size, curY);
		
		//bottom half of square, triangle 2		
		contxt.moveTo(curX, curY);
		contxt.lineTo(curX, curY+size);
		contxt.lineTo(curX+size, curY+size);
	}

contxt.fill();

}


function countIt(){
  contxt.clearRect(100, 33, 150, 45);
  contxt.lineWidth=1;
  contxt.fillStyle="#666666";
  contxt.font="30px sans-serif";
  contxt.fillText(":"+icount+":", 110, 66);


}

function randColor(r, g, b, a){

cObj.setFromHSV(r, g, b, a);

var output = cObj.r+","+cObj.g+","+cObj.b;

if(icount<500){

		//console.log(" ---) "+count%360);
		//console.log("rgb("+output+")");
	}

return "rgb("+output+")";
}
