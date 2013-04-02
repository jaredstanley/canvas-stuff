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
	//drawItemsInCircle();
	//countIt();
	refresh_phyllo_offset(contxt, 400, 400, 33);
	refresh_circle_of_circles(contxt, 400, 400, 33);
	icount+=1;

}

function drawItem(){

	//colorInc+=1;	
	drawItemsInCircle();
	

}

function refresh_circle_of_circles(dc, width, height, frame_number) {
          dc.clearRect(0,0,width,height);

          
   // dc.fillStyle='#000';
    var nbr_circles = 28;
    
    var lg_rad = (width/2) * .85;
    var lg_circ = 2*Math.PI*lg_rad;
    var sm_rad = (lg_circ / nbr_circles) / 2-(2);
    var cx = width/2;
    var cy = height/2;
    
    for (var i = 1; i <= nbr_circles; ++i) {
      dc.fillStyle='rgba(0,0,0,'+(Math.random()+.5)+')';
      dc.beginPath();
      var angle = i*2*Math.PI/nbr_circles;
      var x = cx + Math.cos(angle) * lg_rad;
      var y = cy + Math.sin(angle) * lg_rad;
      dc.arc(x, y, sm_rad, 0, 2*Math.PI, false);
      dc.fill();
    }
     
}


function refresh_phyllo_offset(dc, width, height, frame_number) {
    dc.clearRect(0,0,width,height);          
   
    var nbr_circles = 1000;
    var deviation = 5/8.0;
    var phi = (Math.sqrt(5)+1)/2 - 1;            // golden ratio
    var golden_angle = phi*2*Math.PI;            // golden angle
    
    var lg_rad = width * .45;
    var lg_area = Math.pow(lg_rad,2)*Math.PI;
    
    var mean_area = lg_area / nbr_circles;
    
    var min_area = mean_area * (1-deviation);
    var max_area = mean_area * (1+deviation);
    
    var cum_area = 0;
    
    var fudge = .87; // Fudge factor, since our circles don't actually fill up space entirely.
    
    var cx = width/2+400;
    var cy = height/2+200;
    
    for (var i = 1; i <= nbr_circles; ++i) {
       dc.fillStyle='rgba(0,0,0,'+(Math.random()+.4)+')';
      dc.beginPath();
    
      var angle = i*golden_angle;
    
      var ratio = i / nbr_circles;
      var sm_area = min_area + ratio * (max_area - min_area);
      var sm_rad = Math.sqrt( sm_area / Math.PI );
    
      cum_area += sm_area;
    
      var spiral_rad = Math.sqrt( cum_area / Math.PI );
      var x = cx + Math.cos(angle) * spiral_rad;
      var y = cy + Math.sin(angle) * spiral_rad;
      dc.arc(x, y, sm_rad * fudge, 0, 2*Math.PI, false);
      dc.fill();
    }
     
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

		contxt.beginPath();
		contxt.arc(xx, yy, size, 0, Math.PI*2, true); 
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
