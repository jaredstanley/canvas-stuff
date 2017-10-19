var rand = require('seedrandom');
var Twit = require('twit');
var request = require('request');
var fs = require('fs');
var wh = 500;
var Canvas = require('canvas');
var clrMgr = require('./js/ColorManager')
var Image = Canvas.Image
  , canvas = new Canvas(wh, wh)
  , ctx = canvas.getContext('2d');

  function App(){
    //
    this.init=function(){
      //init vars
      //this.rand = function(){return Math.random();}
      this.rand = new Math.seedrandom(6666);
      this.main_canvas = canvas;
    	this.ctx = ctx;
      this.canvasHeight = wh;
    	this.canvasWidth = wh;
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
            //  this.clrMgr.setColor(252,250,0);
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

// console.log(canvas.toDataURL());
var data = canvas.toDataURL().replace(/^data:image\/\w+;base64,/, "");



// var b = canvas.toDataURL().substr(22);
// console.log(data);
// console.log('<img src="' + canvas.toDataURL() + '" />');
fs.writeFile(APP.rand()+'.png', data, 'base64', function(err){
    if (err) throw err
    console.log('File saved.')
})

var bot = new Twit({
  consumer_key:'7rGWd4EDCOC7W6xEqkG7QnzP8',
  consumer_secret:'QtYARDQdnnWQDfnurRKefLNQrOIgc6BK9KGbhOdnhf921DP6Gg',
  access_token:'916041388562702336-q13R5iQF6WWaKyndKGLtDxBynvdkYW5',
  access_token_secret:'MiO8gRX3f6uY5koRkmMEXXTuDPw9WR5tVUL5EzocVrV7s',
  timeout_ms:6*1000
})

// bot.post('statuses/update', {status:"tweeting from the API"},
// function(err,data,res){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data.text+" successfully posted");
//   }
// });
//@realdonaldtrump 25073877
//@j_red 15154698
//@donaldtrump_art 916041388562702336
////////////////
var uid = '15154698';
var processedArr = [];

// var timer = setInterval(getTimeline, 6*1000);
//getTimeline();
function getTimeline(){
  console.log("getTimeline");
  bot.get('statuses/user_timeline', {user_id: uid, count:6}, function(err, data, res){
    if(err){
      console.log(err);
    }else{
      if(isAlreadyProcessed(data[0].id)){
        console.log("up to date");
        return;
      }else{
        console.log("gonna create images");
        data.forEach(function(d){
          if(!isAlreadyProcessed(d.id)){
            //
            createImage(d);
          }
        })
      }
    }
  })
}
//
function isAlreadyProcessed(id){
  for (var i = 0; i < processedArr.length; i++) {
    if(processedArr[i] == id){
      return true;
    }
  }
  return false;
}

function createImage(data) {
  console.log("creating an image from ", data.text);
  console.log("\n");

  processedArr.push(data.id);

}


function StringManager() {
  //
  this.init = function(){
    this.valuesArr = [];
    this.shapeSourceArr = [];
    this.ptsArr = [];
    this.urlParams = {};
    //
    this.tweet="If Republican Senate doesn't get rid of the Filibuster Rule & go to a simple majority, which the Dems would do, they are just wasting time!";
    this.tweet="Henry Wayne Stanley is soooo cool";
    this.tweet="Edie Jean Stanley Edie JeanStanley";
    // this.tweet="d ot";
    this.tweet="that doesn't make sense!!! it was when I defeated Legend of Zelda breath of the Wild";
    this.tweet="...d/idn't do it so now we have a big deal with Dems holding them up (as usual) on Debt Ceiling approval. Could have been so easy-now a mess!";
    this.tweet="Wonderful coordination between Federal, State and Local Governments in the Great State of Texas - TEAMWORK! Record setting rainfall.";
    // this.tweet='\"Trump just won on law & order and now he\'s delivering the goods.\" -';
    this.tweet='L IZs hair is SOOOO HOT!';
    //
    this.string = this.tweet;
    //setURLParams checks to see if a url var is available; if so it sets 'this.string' to the urlParam val
    // this.setURLParams();
    //prepTweet cleans up the string, sets it to 140 chars if needed, etc
    this.string = this.prepTweet(this.string);
    //
    for (var i = 0; i <this.string.length; i++) {
      this.valuesArr.push(this.string.charCodeAt(i));
    }
    // console.log(this.valuesArr);
    var lucky = this.valuesArr[61]%6+1;
    var vert = 0;
    if (this.valuesArr[77] <= 50){
      //creates two pts waaay down below
      vert = 100000;
    }
    //
    // console.log(APP.rand());
    this.shapeSourceArr = [
      {x:(this.valuesArr[6]), y:this.valuesArr[7]},
      {x:(APP.centerW-this.valuesArr[6])*lucky, y:APP.centerH-this.valuesArr[7]},
      {x:this.valuesArr[8], y:this.valuesArr[9]*(-lucky)},
      {x:APP.centerW+(this.valuesArr[10]), y:this.valuesArr[11]*(this.valuesArr[95]/42)},
      {x:APP.centerW+this.valuesArr[12], y:APP.centerH+this.valuesArr[13]*(this.valuesArr[93]/42.5)*lucky+vert},
      {x:APP.centerW-this.valuesArr[84], y:APP.centerH+this.valuesArr[15]*(this.valuesArr[91]/48.5)*-lucky+vert}
    ];
    //
    // create random pts for shapeSourceArr
    // var it = Math.floor(this.valuesArr[3]/10);
    // // // console.log(it);
    // for (var i = 0; i < it;  i++) {
    //   this.shapeSourceArr.push({x:APP.rand()*APP.canvasWidth,y:APP.rand()*APP.canvasHeight})
    // }
    // create roughly circular pts for shapeSourceArr
    // this.shapeSourceArr = [{x:250, y:10},{x:400, y:150},{x:450, y:300},{x:250, y:400},{x:50, y:350},{x:100, y:100}];
    //
    // this.debug(this.shapeSourceArr);
    //
    //
    // console.log(this.shapeSourceArr);
    this.ptsArr = this.shapeSourceArr.slice();
    this.v1 = this.valuesArr[87];
    this.v2 = this.valuesArr[86];
    this.v3 = this.valuesArr[85];
    this.v4 = this.valuesArr[83];
    this.v5 = this.valuesArr[81];

    this.iter = Math.floor(this.v1/10) +4;
    this.iter = Math.min(12, this.iter);
    // this.iter = 3;
    this.randomness = this.valuesArr[80]+20;
    // this.randomness = 1;
    // console.log(this.randomness);
    APP.createBGShape();

  };
  //
  this.prepTweet = function(str){
    var s = str;
    // console.log("before", s.length);

    while(s.length < 140){
      // console.log("notyet");
      s = s.concat(str);
    }
    s = s.slice(0,140);
    // console.log("now ", s.length);
    console.log(s);

    return s;
  }
  //
  this.debug = function(arr){
    arr.forEach(function(e,i){
      APP.ctx.fillStyle="rgb(0,0,0)";
      APP.ctx.beginPath();
      APP.ctx.arc(e.x, e.y, 3, 0, Math.PI*2, false);
      APP.ctx.fill();
    });
  }
}

///////
