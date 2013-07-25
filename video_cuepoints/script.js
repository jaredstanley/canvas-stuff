window.onload = function(){
	
	initCanvas();
	start();
}

var _width = 640;
var curX=0;
var canvas;
var context;
var ratio;
var pct;
function start(){
	
	$("#vid").on('timeupdate', function(e){
	
		ratio = e.pageX/_width;
	 pct = parseInt(ratio*100);
	 // width on the page
	 // console.log(pct);


	  $("span:last").text(">>> : " + $("#vid")[0].currentTime);
		// if($("#vid")[0].currentTime%5>4){
			// $("#vid")[0].currentTime =45;
		//$("#vid")[0].currentTime = $("#vid")[0].duration*ratio;
		// }
		// console.log($("#vid")[0].currentTime);

		updateCanvas();
	});
	
	$("#vid").on('mousemove', function(e){
		ratio = e.pageX/_width;
		$("#vid")[0].currentTime = $("#vid")[0].duration*ratio;

	});

	$("#vid").on('click', function(){
		$("#vid")[0].play();
	});


	$(".btn").eq(0).on('click', function(e){
		$("#vid")[0].currentTime = 60;
	})

	$(".btn").eq(1).on('click', function(e){
		$("#vid")[0].currentTime = 120;
	})

	$(".btn").eq(2).on('click', function(e){
		$("#vid")[0].currentTime = 200;
	})

}

function updateCanvas(){
	context.clearRect(0,0, canvas.width, canvas.height);

	context.fillStyle= "rgb(20,20,100)";;
	context.fillRect(0,0,canvas.width, canvas.height)

	var ratio2 = $("#vid")[0].currentTime/$("#vid")[0].duration;

	context.fillStyle= "rgb(200,200,100)";;
	context.fillRect(0,0,canvas.width*ratio2, canvas.height)
}

function initCanvas(){
	canvas = document.getElementById("c");
	context = canvas.getContext("2d");
}