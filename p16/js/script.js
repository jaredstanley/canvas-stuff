//
var main_canvas,
main_context,
count = 0,
xx=0, yy=0,
posArr = [],
dotRad = 3,
circleRad=120,
speed = 1,
colorsArr = ["#E4F52F","#FFBA14", "#E93707", "#C0044B","#5B0326"];
totalCircles = 5,
curCircle = 0;

var centerY, centerX, stageW, stageH;

window.onload = function(){
        start();
}
//
function start(){
        main_canvas = document.getElementById("c");
        main_context = main_canvas.getContext("2d");
        main_context.globalAlpha = .5;
        main_context.globalCompositeOperation = "lighter";
        stageW = main_canvas.width;
        stageH = main_canvas.height;
        centerX = stageW/2-200;
        centerY = stageH/2-50;

        for (var i = 0; i <= totalCircles; i++) {
            posArr["arr"+i] = [];    
        };

        initTimer();
}

function initTimer(){
        
        window.requestAnimationFrame(initTimer);
        build();
}


function build(){
        main_context.clearRect(0,0,main_canvas.width, main_canvas.height);
        
        drawNode(centerX, centerY, curCircle);

        count+=(speed);

        
}

function drawNode(xpos, ypos){
    var color = colorsArr[curCircle];
    var rad = circleRad/(curCircle+1);
    //draw main outer node circle plus dot
    drawCircle(xpos,ypos,rad, color);

    var c = curCircle+1;
    xpos += rad*Math.sin((count*c)*(Math.PI/180));
    ypos += rad*Math.cos((count*c)*(Math.PI/180));
    curCircle++;
    if(curCircle < totalCircles){
        drawNode(xpos,ypos, curCircle);
    }else{
        curCircle=0;
    }

}

function drawLine(arr, col){
    if(arr.length>700){
        arr.shift();
    }
    for(var i=0; i<arr.length; i++){
        drawDot(arr[i].x, arr[i].y, 1, col);
        arr[i].x+=speed;
    }
}

function drawCircle(x, y, rad, col){
    main_context.fillStyle = col;
    main_context.strokeStyle = col;
    main_context.lineWidth = 2;
    main_context.beginPath();
    main_context.arc(x,y,rad,0,Math.PI*2,true);
    main_context.stroke();
    main_context.globalAlpha = .15;
    main_context.fill();
    main_context.globalAlpha = 1;
    main_context.lineWidth = 1;
    drawDot(x, y, dotRad, col);
        
    var _obj = [];
    _obj.x = x;
    _obj.y = y;
    
    posArr["arr"+curCircle].push(_obj);
    
    drawLine(posArr["arr"+curCircle], col);
        
}

function drawDot(x,y,rad, col){
        main_context.strokeStyle = col;
        main_context.beginPath();
        main_context.arc(x,y,rad,0,Math.PI*2,true);
        main_context.stroke();
                
}
