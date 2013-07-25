console.log('test');
var count = 0;
var nav;

$('document').ready(function(){
	init();
})

function init(){
	console.log('init');
	
	var p = setInterval(move, 200);
}

function move(){
	//console.log('move '+ nav);
	count -= 3;
	nav = $('#nav').css('left', count);
}