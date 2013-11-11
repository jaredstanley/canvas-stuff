//
var main_canvas,
main_context,
increment = .30,
count = 100,
xx=0, yy=0,
posArr0 = [],
posArr1 = [],
posArr2 = [],
posArr3 = [],
numberOfPoints = 16,
dotRad = 1,
circleRad=80,
speed = 2,
angleIncrement;

var centerY, centerX, stageW, stageH;

window.onload = function(){
        start();
}
//
function start(){
        main_canvas = document.getElementById("c");
        main_context = main_canvas.getContext("2d");

        stageW = main_canvas.width;
        stageH = main_canvas.height;
        centerX = stageW/2;
        centerY = stageH/2;

        //
        initTimer();
}

function initTimer(){
        
        window.requestAnimationFrame(initTimer);
        build();
}


function build(){
        main_context.clearRect(0,0,main_canvas.width, main_canvas.height);
        // main_context.fillStyle = "rgba(222,222,222,.04)";
        // main_context.fillRect(0,0,stageW, stageH);
        xx = circleRad*Math.sin(count*(Math.PI/180));
        yy = circleRad*Math.cos(count*(Math.PI/180));
        
        yy += centerY;
        var tmpx = centerX-300; 
        xx += tmpx;
                
        drawCircle(tmpx, centerY, circleRad);
        drawDot(tmpx, centerY, dotRad*3, '0,0');
        var obj = [];
        obj.x = tmpx;
        obj.y = centerY;
        posArr0.push(obj);
        drawLine(posArr0,'222,222');

        var obj1 = [];
        obj1.x = xx;
        obj1.y = yy;
        posArr1.push(obj1);

        drawDot(xx, yy, dotRad*4, '255,100');
        drawLine(posArr1, '255,100');
       //

        drawSecondCircle(xx, yy, circleRad);

        count+=(speed*.5);

        
}

function drawSecondCircle(x, y, rad){
        rad = rad/2;
        main_context.strokeStyle = 'rgba(0,0,0,.2)';
        main_context.lineWidth = .5;
        main_context.beginPath();
        main_context.arc(x,y,rad,0,Math.PI*2,true);
        main_context.stroke();

        var _x;
        var _y;
        _x = rad*Math.sin((count*4)*(Math.PI/180));
        _y = rad*Math.cos((count*4)*(Math.PI/180));
        _x+=x;
        _y+=y;
        var obj = [];
        obj.x = _x;
        obj.y = _y;
        posArr2.push(obj);
        drawDot(_x, _y, dotRad*4, "100,0");
        drawLine(posArr2, "100,0");

        drawThirdCircle(_x, _y, rad);

}

function drawThirdCircle(x,y,rad){
        rad = rad/2;
        main_context.strokeStyle = 'rgba(0,0,0,.2)';
        main_context.lineWidth = .5;
        main_context.beginPath();
        main_context.arc(x,y,rad,0,Math.PI*2,true);
        main_context.stroke();

        var _x;
        var _y;
        _x = rad*Math.sin((count*8)*(Math.PI/180));
        _y = rad*Math.cos((count*8)*(Math.PI/180));
        _x+=x;
        _y+=y;
        var obj = [];
        obj.x = _x;
        obj.y = _y;
        posArr3.push(obj);
        drawDot(_x, _y, dotRad*4, "0,155");
        drawLine(posArr3, "0,155");

}

function drawLine(arr, col){
        if(arr.length>700){
                arr.shift();
        }
        for(var i=0; i<arr.length; i++){
                drawDot(arr[i].x, arr[i].y, dotRad/2, col);
                arr[i].x+=speed;
        }
}

function drawCircle(x, y, rad){
        main_context.strokeStyle = 'rgba(0,0,0,.2)';
        main_context.lineWidth = .5;
        main_context.beginPath();
        main_context.arc(x,y,rad,0,Math.PI*2,true);
        main_context.stroke();
        
}

function drawDot(x,y,rad, col){
        // main_context.fillStyle = 'rgba(200, 0, 0, '+(.9)+')';
        main_context.strokeStyle = 'rgba('+col+',0,1)';
        main_context.lineWidth = .5;
        main_context.beginPath();
        main_context.arc(x,y,rad,0,Math.PI*2,true);
        // main_context.fill();
        main_context.stroke();
                
}
