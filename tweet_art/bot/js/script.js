function App(){
  //
  this.init=function(){
    //init vars
    // this.rand = function(){return Math.random();}
    this.rand = new Math.seedrandom(666);
    this.main_canvas = document.getElementById("c");
  	this.ctx = this.main_canvas.getContext("2d");
    this.canvasHeight = this.main_canvas.height;
  	this.canvasWidth = this.main_canvas.width;
    this.centerH = this.canvasHeight/2;
  	this.centerW = this.canvasWidth/2;
    this.firstTime = true;
    //
    //instantiate Managers
    this.strMgr = new StringManager();
    this.clrMgr = new ColorManager();
    this.strMgr.init();
    //
  }
  //
  this.createBGShape=function(){
    // console.log(this.strMgr.ptsArr.length);
    var p=this.strMgr.iter;
    this.clrMgr.setColor(33,33,33);
    // var p=7;
    for (var h = 0; h < p; h++) {

      var arr=this.strMgr.ptsArr;

      for (var i = 0; i < p; i++) {
        this.addHalfPoints(arr);
        this.drawShape();
        this.clrMgr.updateValues();

        if(i%4!=0){
            this.clrMgr.setColor();
        }else{
          //  this.clrMgr.setColor(55,250,220);
          this.clrMgr.setColor(this.clrMgr.rr,this.clrMgr.gg,this.clrMgr.bb);
        }
        // this.clrMgr.setColor(rr,gg,bb);
        // this.clrMgr.setColor(222,150,20);
      }
    }
    // console.log(this.strMgr.ptsArr.length);

  }

  this.drawShape=function(){
    // console.log("drawShape called");
    if(this.firstTime){
      // console.log("drawShape", this.strMgr.string.charCodeAt(0));
        //draw a circle
        if(this.strMgr.string.charCodeAt(0)%6==0){
          this.ctx.save();
          this.ctx.fillStyle="rgba(255,255,255,0.31)";
          this.ctx.arc(this.centerW, this.centerH, this.canvasWidth*0.45, 0, Math.PI*4);
          this.ctx.fill();
          this.ctx.restore();
        }
          this.firstTime=false;
      }
      this.ctx.fillStyle="rgba("+this.clrMgr.c.r+","+this.clrMgr.c.g+","+this.clrMgr.c.b+",0.012)";
      // console.log(this.rand());
      if(this.rand()%2==0){
        this.ctx.globalCompositeOperation = 'soft-light';
      }else{
        this.ctx.globalCompositeOperation = 'multiply';
        // this.ctx.globalCompositeOperation = 'overlay';
        // this.ctx.globalCompositeOperation = 'color-dodge';
      }
      this.ctx.beginPath();
      this.ctx.moveTo(this.strMgr.ptsArr[0].x, this.strMgr.ptsArr[0].y);
      for (var i = 0; i < this.strMgr.ptsArr.length; i++) {
        var itm = this.strMgr.ptsArr[i];
          // console.log(itm.x, itm.y);
            // this.ctx.lineTo(itm.x, itm.y);
            if(i%3==0){
              this.ctx.quadraticCurveTo(itm.x, itm.y, itm.x+(this.rand()-this.rand())*10, itm.y+(this.rand()-this.rand())*40);
            }else{
              this.ctx.lineTo(itm.x, itm.y);
            }
      }
      this.ctx.fill();
  }

  this.addHalfPoints=function(arr){
    if(arr.length>31000){
      return false;
    }
    // console.log("addHalfPoints() called");
    var newArr = [];
  //  this.ctx.beginPath();
    //
    for (var i = 0; i < arr.length; i++) {
      if(i==0){
        //*|* first one
        newArr.push(arr[i]);
      }else{
        //*|* main loop
        var newPt = this.createNewPoint(arr[i], arr[i-1]);
        newArr.push(newPt);
        //
        newArr.push(arr[i]);
      }
    }
    //*|* last one! Wrap back to connect to the first point at the end of the loop
    var newPt = this.createNewPoint(arr[arr.length-1], arr[0]);
    newArr.push(newPt);
    //
    this.strMgr.ptsArr = newArr;
    newArr = [];
  }
  //
  this.createNewPoint=function(p1, p2){
      var p = {};
      var xx =(p1.x+p2.x) / 2;
      var yy = (p1.y+p2.y) / 2;
      //
      var rrr = this.rand();
      var ang =rrr *(2*Math.PI);
      var r= rrr*this.strMgr.randomness;
      var x = xx+r*Math.cos(ang);
      var y = yy+r*Math.sin(ang);
      //
      p.x = x;
      p.y = y;

      return p;
  }
  //
}
var APP = new App();
APP.init();
