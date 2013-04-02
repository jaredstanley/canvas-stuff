var icount = 0; //iteration count (total)
var dcount = 1; //draw count (to be reset at top of page on draw)
var colorInc = Math.random()*360;
var cObj = new RGBAColor(0, 200, 130, 1);
//
var b_canvas,
contxt,
curX = 0,
curY = 0, 
size = 25,
margin = 3,
itemsInRow =40,
curRowNum;

var numberOfPoints,
circleRadius,
angleIncrement,
xx,yy;

//
function start(){
	var interval = setTimeout(update,30);
	// var interval = setInterval(update,30);
	console.log("start");

	b_canvas = document.getElementById("c");
	contxt = b_canvas.getContext("2d");
	
}

function update() {

	//drawItem();
	drawItemsInCircle();
	countIt();
	
	icount+=1;

}

function drawItem(){

	//colorInc+=1;	
	drawItemsInCircle();
	

}

function drawItemsInCircle(){
	 numberOfPoints = 33;
	 circleRadius = 200;
	 angleIncrement = 360 / numberOfPoints; 
	// contxt.fillStyle= randColor(colorInc%360, 1, 1, 1);	
	for (var i = 0; i < numberOfPoints; i+=1) {
	contxt.fillStyle= randColor(angleIncrement*i, 1, 1, 1);	
         xx = (circleRadius * Math.cos((angleIncrement * i) * (Math.PI/180)));
         yy = (circleRadius * Math.sin((angleIncrement * i) * (Math.PI/180) ));
         xx += (400);
         yy += (300);

        // contxt.fillRect(xx,yy,size, size);
		
		contxt.beginPath();
		contxt.arc(xx, yy, size, 0, Math.PI*2, true); 
		//
		contxt.shadowOffsetX = 3;
		contxt.shadowOffsetY = 3;
		contxt.shadowBlur = 8;
		contxt.shadowColor = 'rgba(0,0,0,0.1)';
		contxt.closePath();
		contxt.fill();

        //angleIncrement+=Math.random()*5;
     }


}

function countIt(){
  contxt.clearRect(100, 33, 150, 45);
  contxt.lineWidth=1;
  contxt.fillStyle="#666666";
  contxt.font="30px sans-serif";
  contxt.fillText(":"+icount*numberOfPoints+":", 110, 66);


}

function randColor(r, g, b, a){
	cObj.setFromHSV(r, g, b, a);
	var output = cObj.r+","+cObj.g+","+cObj.b;
	return "rgb("+output+")";
}
