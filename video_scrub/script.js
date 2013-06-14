window.onload = function(){
	start();
}

var _width = 568;
var curX=0;
function start(){
	
	$("div").mousemove(function(e){
	

	curX+= (e.pageX-curX)/10;

	 var ratio = e.pageX/_width;
	 var pct = parseInt(ratio*100);
	 // console.log(pct);


	  var dimensions = "( " + _width + ", " + e.pageX +", "+ parseInt(pct) +", "+ratio+" )";
	  // var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
	  // var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
	  // $("span:first").html("( e.pageX, e.pageY ) : " + pageCoords+"<br/>");
	  // $("span:last").text("( e.clientX, e.clientY ) : " + clientCoords);
	  var imgurl = "sequence/vid_"+(parseInt(pct+1))+".jpg";
	console.log(curX);
	  $('#main').css('background-image', "url("+imgurl+")");
	  $("span:last").text("( e.clientX, e.clientY ) : " + dimensions);
	});
	 

}