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
	
	$("div").mousemove(function(e){
	

	//curX+= (e.pageX-curX)/10;

	ratio = e.pageX/_width;
	 pct = parseInt(ratio*100);
	 // width on the page
	 // console.log(pct);


	  // var dimensions = "( " + _width + ", " + e.pageX +", "+ parseInt(pct) +", "+ratio+" )";
	  // var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
	  // var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
	  // $("span:first").html("( e.pageX, e.pageY ) : " + pageCoords+"<br/>");
	  // $("span:last").text("( e.clientX, e.clientY ) : " + clientCoords);
	  // var imgurl = "sequence/vid_"+(parseInt(pct+1))+".jpg";
	// console.log(curX);
	  // $('#main').css('background-image', "url("+imgurl+")");
	  // $("span:last").text("( e.clientX, e.clientY ) : " + dimensions);
	  $("span:last").text(">>> : " + $("#vid")[0].currentTime);
		// if($("#vid")[0].currentTime%5>4){
			// $("#vid")[0].currentTime =45;
		$("#vid")[0].currentTime = $("#vid")[0].duration*ratio;
		// }
		console.log($("#vid")[0].currentTime);

		updateCanvas();
	});
	
	

}

function updateCanvas(){
	// var tot = console.log($("#vid")[0].duration);
	var ratio2 = $("#vid")[0].currentTime/$("#vid")[0].duration;
	// var prct = parseInt(tot*ratio2);
	// console.log(prct);

	context.fillStyle= "rgb(200,200,100)";;
	context.fillRect(0,0,canvas.width*ratio2, canvas.height)
}

function initCanvas(){
	canvas = document.getElementById("c");
	context = canvas.getContext("2d");

	context.fillStyle= "rgb(20,20,100)";;
	context.fillRect(0,0,canvas.width, canvas.height)
}