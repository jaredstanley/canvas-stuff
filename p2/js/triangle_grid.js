var icount = 0; //iteration count (total)
var dcount = 1; //draw count (to be reset at top of page on draw)
var colorInc = Math.random()*360;
var cObj = new RGBAColor(0, 200, 130, 1);
//
var b_canvas,
contxt,
curX = 0,
curY = 0, 
size = 15,
margin = 3,
itemsInRow =40,
curRowNum;

//
function start(){
	var interval = setInterval(update,30);
	console.log("start");

	b_canvas = document.getElementById("c");
	contxt = b_canvas.getContext("2d");
	
}

function update() {

	curRowNum = curY/(size+margin);
	// console.log(curRowNum);
		if(curRowNum%2==0){
			//even row
			if(icount%2==0){
				// console.log("A");
				drawTriangleBox("zig");
			}else{
				// console.log("B");
				drawTriangleBox("zag");
			}
		}else{
			//odd row
			if(icount%2==1){
				// console.log("C");
				drawTriangleBox("zig");
			}else{
				// console.log("D");
				drawTriangleBox("zag");
			}

		}
	
	countIt();
	
	curX = (size + margin ) * ( dcount % itemsInRow);
	curY = (size + margin ) * Math.floor( dcount / itemsInRow);

	icount+=1;
	dcount+=1;

	if(curY>550){
		dcount = 0;
		curY = 0;
	}

}

function drawTriangleBox(dir){
	

colorInc+=.44;	

		


	if(dir=="zig"){
		//draw even row

		//top half of square, triangle 1
		contxt.beginPath();
		contxt.fillStyle= randColor(colorInc%360, Math.random()+.5, Math.random()+.5, Math.random()+.5);	

		contxt.moveTo(curX, curY);
		contxt.lineTo(curX+size, curY);
		contxt.lineTo(curX, curY+size);
		contxt.fill();

		//bottom half of square, triangle 2
		contxt.beginPath();
		contxt.fillStyle= randColor(colorInc%360, 1, 1, 1);	
		contxt.moveTo(curX+size, curY);
		contxt.lineTo(curX, curY+size);
		contxt.lineTo(curX+size, curY+size);
		contxt.fill();
	}else{
		//draw odd row		
		//top half of square, triangle 1
		contxt.beginPath();
		contxt.fillStyle= randColor(colorInc%360, 1, 1, 1);	
		contxt.moveTo(curX, curY);
		contxt.lineTo(curX+size, curY+size);
		contxt.lineTo(curX+size, curY);
		contxt.fill();
		//bottom half of square, triangle 2		

		contxt.beginPath();
		contxt.fillStyle= randColor(colorInc%360, 1, Math.random(), 1);	

		contxt.moveTo(curX, curY);
		contxt.lineTo(curX, curY+size);
		contxt.lineTo(curX+size, curY+size);
		contxt.fill();
	}



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
