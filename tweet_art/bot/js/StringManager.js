
function StringManager() {
  //
  this.init = function(){
    this.valuesArr = [];
    this.shapeSourceArr = [];
    this.ptsArr = [];
    this.urlParams = {};
    //
    this.tweet="If Republican Senate doesn't get rid of the Filibuster Rule & go to a simple majority, which the Dems would do, they are just wasting time!";
    // this.tweet="Henry Wayne Stanley ";
    this.tweet="Edie Jean Stanley Edie JeanStanley";
    // this.tweet="d ot";
    // this.tweet="that doesn't make sense!!! it was when I defeated Legend of Zelda breath of the Wild";
    // this.tweet="...d/idn't do it so now we have a big deal with Dems holding them up (as usual) on Debt Ceiling approval. Could have been so easy-now a mess!";
    // this.tweet="Wonderful coordination between Federal, State and Local Governments in the Great State of Texas - TEAMWORK! Record setting rainfall.";
    // this.tweet='\"Trump just won on law & order and now he\'s delivering the goods.\" -';
    //
    this.string = this.tweet;
    //setURLParams checks to see if a url var is available; if so it sets 'this.string' to the urlParam val
    this.setURLParams();
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
    // this.randomness = 18;
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
  this.setURLParams = function(){
    	var searchStr = decodeURI(window.location.search.substring(1));
      var paramArr = searchStr.split('&');
        for(var i = 0; i < paramArr.length; i++){
            var KeyValPair = paramArr[i].split('=');
            this.urlParams[KeyValPair[0]] = KeyValPair[1];
        }
    	//console.log(KeyValPair, " |||||| " ,this.urlParams);
     	if(this.urlParams.string!=undefined && this.urlParams.string.length>0){
        var t = this.string.replace('#','_');

        this.string = this.urlParams.string;
     	}

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
