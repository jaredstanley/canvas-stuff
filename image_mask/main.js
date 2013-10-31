console.log('test');
var count = 0;
var nav;

$('document').ready(function(){
	init();
})

function init(){
	console.log('init');
	
	var p = setInterval(move, 10);
}

function move(){
	//console.log('move '+ nav);
	count --;
	nav = $('#nav').css('left', count);
}