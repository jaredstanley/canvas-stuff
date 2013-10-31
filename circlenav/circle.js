var x = 0, y = 0;
var decay = .94;
var canvas; 
var ctx;
var count = 0;
var bool = 0;
var total = 0;
var scoresArr = [];
var itemSize=55;
var numberOfPoints,
circleRadius,
angleIncrement,
xx,
yy;
var center;

var anglex, angley;
var freq = .5;
var amplitude = 111;
var curx, cury;


function init(){	
	// console.log($('#accelerationY'));
	canvas = document.getElementById("nav");
	center = canvas.height/2+120;
	ctx = canvas.getContext('2d');
	drawNav();
	initTimer();
}

function initTimer(){
	window.requestAnimationFrame(initTimer);
	update();
}

function update(){
	drawNav();
}

function drawNav(){
	ctx.clearRect(0, 0, 320, 480);
	//countIt(scoresArr);
	// ctx.beginPath();
	ctx.fillStyle = "rgba(200,200,200,.5)";
	// ctx.arc(canvas.width/2,center, 100, 0,2*Math.PI,false);
	// ctx.fill();

	drawItemsInCircle();
}

function drawItemsInCircle(){
	
	numberOfPoints=6;
	circleRadius=100;
	angleIncrement=360/numberOfPoints;

	for(var i=0;i<numberOfPoints;i+=1){
	//	ctx.fillStyle=randColor(angleIncrement*i,1,1,1);
		xx=(circleRadius*Math.cos((angleIncrement*i)*(Math.PI/180)));
		yy=(circleRadius*Math.sin((angleIncrement*i)*(Math.PI/180)));
		xx+=(canvas.width/2);
		yy+=center;
		ctx.beginPath();
		ctx.arc(xx,yy,itemSize,0,Math.PI*2,true);
		ctx.fill();
	}
}




function update3(){
	anglex+=freq;
	angley+=freq;
	curx=Math.cos(anglex)*(amplitude);
	cury=Math.sin(angley)*(amplitude);
	curx+=center;cury+=center;
	ctx.arc(curx,cury,itemSize,0,Math.PI*2,false);
	ctx.fill();
}



