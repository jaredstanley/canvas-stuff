
 module.exports.ColorManager = function() {
  //
  this.rr = 0;
  this.gg = 0;
  this.bb = 0;
  this.setColor = function(r,g,b){
    this.c={};
    if(r==undefined){
      // console.log("gonna calculate the color myself");
      this.c.r=Math.floor(APP.strMgr.valuesArr[36]*(APP.strMgr.valuesArr[72]/60));;
      this.c.g=Math.floor(APP.strMgr.valuesArr[33]*(APP.strMgr.valuesArr[3]/100));;
      this.c.b=Math.floor(APP.strMgr.valuesArr[43]*(APP.strMgr.valuesArr[13]/60));
    }else{
      // console.log("color's passed in, ",r, g, b);
      // console.log("color's passed in ");
      this.c.r = r;
      this.c.g = g;
      this.c.b = b;
    }
    // console.log(this.c);
    // return c;
  }
  //
  this.updateValues = function(){


    if(APP.strMgr.ptsArr[3].x>=APP.strMgr.ptsArr[4].x){
      // console.log("first");
      this.rr = APP.strMgr.ptsArr[3].x/(APP.strMgr.ptsArr[0].y/2);
      this.gg = APP.strMgr.ptsArr[4].x/(APP.strMgr.ptsArr[0].y/2);
      this.bb = APP.strMgr.ptsArr[2].x/(APP.strMgr.ptsArr[0].y/2);
      bb=55;
    }else if(APP.strMgr.ptsArr[2].x>=APP.strMgr.ptsArr[1].x){
      // console.log("second");
      this.rr = APP.strMgr.ptsArr[3].x*(APP.strMgr.ptsArr[5].y%2);
      this.gg = APP.strMgr.ptsArr[4].x*(APP.strMgr.ptsArr[6].y%2);
      this.bb = APP.strMgr.ptsArr[2].x*(APP.strMgr.ptsArr[4].y%2);
    }else{
      // console.log("thirddd");
      this.rr = (APP.strMgr.ptsArr[5].y%3)*255;
      this.gg = (APP.strMgr.ptsArr[6].y%2)*255;
      this.bb = (APP.strMgr.ptsArr[4].y%5)*255;
    }
    this.rr=Math.floor(Math.abs(Math.min(this.rr, 255)));
    this.gg=Math.floor(Math.abs(Math.min(this.gg, 255)));
    this.bb=Math.floor(Math.abs(Math.min(this.bb, 255)));
    //
    // console.log(rr, gg, bb);
  }
}
