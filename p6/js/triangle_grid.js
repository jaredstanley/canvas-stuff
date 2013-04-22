var icount = 0; //iteration count (total)
var dcount = 1; //draw count (to be reset at top of page on draw)
var colorInc = Math.random()*360;
var cObj = new RGBAColor(0, 200, 130, 1);
//
var b_canvas,
contxt,
curX = 0,
curY = 0, 
size = 25,
margin = 3,
itemsInRow =40,
curRowNum;

var numberOfPoints,
circleRadius,
angleIncrement,
xx,yy;

//
function start(){
	var interval = setTimeout(update,30);
	// var interval = setInterval(update,30);
	console.log("start");

	b_canvas = document.getElementById("c");
	contxt = b_canvas.getContext("2d");
	
}

function update() {

  drawShape1();
  drawShape2();
  drawShape3();
	drawShape4();
	drawShapes();

}



function drawShape1(){


contxt.fillStyle="rgb(178,198,32)";
contxt.beginPath();
contxt.moveTo(238,38);
contxt.bezierCurveTo(234,39,230,40,227,41);
contxt.bezierCurveTo(223,43,220,45,217,49);
contxt.bezierCurveTo(215,52,213,56,211,61);
contxt.bezierCurveTo(210,67,209,73,209,81);
contxt.bezierCurveTo(209,92,209,104,209,119);
contxt.bezierCurveTo(209,134,209,149,209,165);
contxt.bezierCurveTo(209,181,209,196,209,211);
contxt.bezierCurveTo(209,226,209,239,209,249);
contxt.bezierCurveTo(209,265,212,276,217,283);
contxt.bezierCurveTo(223,290,229,293,237,293);
contxt.bezierCurveTo(244,293,250,292,255,291);
contxt.bezierCurveTo(260,289,265,286,269,282);
contxt.bezierCurveTo(273,278,276,272,278,266);
contxt.bezierCurveTo(280,259,281,251,281,241);
contxt.lineTo(281,231);
contxt.lineTo(289,231);
contxt.lineTo(289,250);
contxt.bezierCurveTo(289,266,285,279,276,288);
contxt.bezierCurveTo(267,297,254,302,238,302);
contxt.bezierCurveTo(230,302,222,300,214,296);
contxt.bezierCurveTo(206,292,200,286,195,278);
contxt.bezierCurveTo(191,274,189,268,187,262);
contxt.bezierCurveTo(186,256,184,248,184,239);
contxt.bezierCurveTo(183,230,183,220,183,208);
contxt.bezierCurveTo(183,195,183,181,183,165);
contxt.bezierCurveTo(183,143,183,125,183,110);
contxt.bezierCurveTo(183,96,184,83,186,74);
contxt.bezierCurveTo(187,66,190,59,194,52);
contxt.bezierCurveTo(198,46,203,41,209,38);
contxt.bezierCurveTo(218,32,228,29,238,29);
contxt.bezierCurveTo(239,29,240,29,241,29);
contxt.bezierCurveTo(242,29,244,29,245,29);
contxt.lineTo(244,28);
contxt.bezierCurveTo(246,29,247,29,247,29);
contxt.bezierCurveTo(253,30,258,32,261,34);
contxt.bezierCurveTo(265,36,268,37,270,38);
contxt.bezierCurveTo(272,39,274,39,276,38);
contxt.bezierCurveTo(279,37,280,33,280,28);
contxt.bezierCurveTo(281,28,281,28,281,29);
contxt.bezierCurveTo(282,29,282,29,282,29);
contxt.lineTo(289,29);
contxt.lineTo(289,95);
contxt.lineTo(281,95);
contxt.bezierCurveTo(281,91,280,87,280,83);
contxt.bezierCurveTo(279,79,279,75,278,71);
contxt.bezierCurveTo(277,67,275,62,273,58);
contxt.bezierCurveTo(273,57,272,56,270,53);
contxt.bezierCurveTo(269,51,266,48,263,46);
contxt.bezierCurveTo(260,43,257,41,253,40);
contxt.bezierCurveTo(248,38,243,38,238,38);
contxt.fill();

contxt.fillStyle="rgb(178,198,32)";
contxt.beginPath();
contxt.moveTo(412,260);
contxt.lineTo(412,300);
contxt.lineTo(310,300);
contxt.lineTo(310,290);
contxt.bezierCurveTo(312,291,314,291,315,290);
contxt.bezierCurveTo(316,290,317,289,318,287);
contxt.bezierCurveTo(320,285,320,283,320,279);
contxt.lineTo(320,49);
contxt.bezierCurveTo(320,45,320,43,318,41);
contxt.bezierCurveTo(317,39,316,38,315,38);
contxt.bezierCurveTo(314,37,312,37,310,38);
contxt.lineTo(310,29);
contxt.lineTo(356,29);
contxt.lineTo(356,38);
contxt.bezierCurveTo(354,37,352,37,351,38);
contxt.bezierCurveTo(350,38,349,39,348,41);
contxt.bezierCurveTo(347,43,346,45,346,49);
contxt.lineTo(346,290);
contxt.lineTo(382,290);
contxt.bezierCurveTo(387,290,391,288,394,285);
contxt.bezierCurveTo(397,283,399,279,400,275);
contxt.bezierCurveTo(401,271,402,266,402,260);
contxt.lineTo(412,260);
contxt.fill();

contxt.fillStyle="rgb(178,198,32)";
contxt.beginPath();
contxt.moveTo(461,279);
contxt.bezierCurveTo(461,283,461,285,463,287);
contxt.bezierCurveTo(464,289,465,290,466,290);
contxt.bezierCurveTo(467,291,469,291,471,290);
contxt.lineTo(471,300);
contxt.lineTo(425,300);
contxt.lineTo(425,290);
contxt.bezierCurveTo(427,291,429,291,430,290);
contxt.bezierCurveTo(431,290,432,289,433,287);
contxt.bezierCurveTo(434,285,435,283,435,279);
contxt.lineTo(435,49);
contxt.bezierCurveTo(435,45,434,43,433,41);
contxt.bezierCurveTo(432,39,431,38,430,38);
contxt.bezierCurveTo(429,37,427,37,425,38);
contxt.lineTo(425,29);
contxt.lineTo(471,29);
contxt.lineTo(471,38);
contxt.bezierCurveTo(469,37,467,37,466,38);
contxt.bezierCurveTo(465,38,464,39,463,41);
contxt.bezierCurveTo(461,43,461,45,461,49);
contxt.lineTo(461,279);
contxt.fill();

contxt.fillStyle="rgb(178,198,32)";
contxt.beginPath();
contxt.moveTo(636,38);
contxt.bezierCurveTo(634,37,632,37,631,38);
contxt.bezierCurveTo(630,38,629,39,628,41);
contxt.bezierCurveTo(627,43,626,45,626,49);
contxt.lineTo(626,279);
contxt.bezierCurveTo(626,283,627,285,628,287);
contxt.bezierCurveTo(629,289,630,290,631,290);
contxt.bezierCurveTo(632,291,634,291,636,290);
contxt.lineTo(636,300);
contxt.lineTo(590,300);
contxt.lineTo(590,290);
contxt.bezierCurveTo(592,291,594,291,595,290);
contxt.bezierCurveTo(596,290,597,289,598,287);
contxt.bezierCurveTo(600,285,600,283,600,279);
contxt.lineTo(600,71);
contxt.bezierCurveTo(594,98,588,121,582,142);
contxt.bezierCurveTo(580,151,578,160,576,168);
contxt.bezierCurveTo(574,177,572,185,570,191);
contxt.bezierCurveTo(569,198,567,204,566,208);
contxt.bezierCurveTo(565,212,565,215,565,215);
contxt.lineTo(549,215);
contxt.bezierCurveTo(547,209,545,202,543,195);
contxt.bezierCurveTo(541,187,539,180,537,172);
contxt.bezierCurveTo(535,164,533,156,531,148);
contxt.bezierCurveTo(529,140,527,133,526,125);
contxt.bezierCurveTo(521,107,517,89,512,71);
contxt.lineTo(512,279);
contxt.bezierCurveTo(512,282,512,285,513,287);
contxt.bezierCurveTo(514,288,515,289,517,289);
contxt.bezierCurveTo(518,290,520,290,521,289);
contxt.lineTo(521,300);
contxt.lineTo(489,300);
contxt.lineTo(489,289);
contxt.bezierCurveTo(491,290,493,290,494,289);
contxt.bezierCurveTo(495,289,496,288,497,287);
contxt.bezierCurveTo(499,285,499,282,499,279);
contxt.lineTo(499,49);
contxt.bezierCurveTo(499,45,499,43,497,41);
contxt.bezierCurveTo(496,39,495,38,494,38);
contxt.bezierCurveTo(493,37,491,37,489,38);
contxt.lineTo(489,29);
contxt.lineTo(526,29);
contxt.lineTo(564,172);
contxt.lineTo(600,29);
contxt.lineTo(636,29);
contxt.lineTo(636,38);
contxt.fill();

contxt.fillStyle="rgb(178,198,32)";
contxt.beginPath();
contxt.moveTo(766,114);
contxt.bezierCurveTo(766,123,765,130,762,136);
contxt.bezierCurveTo(760,142,757,148,754,152);
contxt.bezierCurveTo(751,156,748,159,744,161);
contxt.bezierCurveTo(740,163,737,164,734,164);
contxt.bezierCurveTo(737,164,740,165,744,167);
contxt.bezierCurveTo(747,169,751,173,754,177);
contxt.bezierCurveTo(757,181,760,186,762,193);
contxt.bezierCurveTo(765,199,766,207,766,216);
contxt.lineTo(766,248);
contxt.bezierCurveTo(766,255,765,261,762,267);
contxt.bezierCurveTo(759,273,756,279,752,284);
contxt.bezierCurveTo(748,289,744,292,739,295);
contxt.bezierCurveTo(734,298,729,300,725,300);
contxt.lineTo(689,300);
contxt.bezierCurveTo(679,300,669,300,657,299);
contxt.lineTo(657,290);
contxt.bezierCurveTo(659,291,661,291,662,290);
contxt.bezierCurveTo(663,289,664,288,665,287);
contxt.bezierCurveTo(666,285,667,282,667,279);
contxt.lineTo(667,50);
contxt.bezierCurveTo(667,46,666,44,665,42);
contxt.bezierCurveTo(664,41,663,40,662,39);
contxt.bezierCurveTo(661,39,659,39,657,39);
contxt.lineTo(657,30);
contxt.lineTo(716,30);
contxt.bezierCurveTo(725,30,732,31,739,34);
contxt.bezierCurveTo(745,37,750,40,754,45);
contxt.bezierCurveTo(758,50,761,55,763,61);
contxt.bezierCurveTo(765,66,766,72,766,78);
contxt.lineTo(766,114);
contxt.fill();


contxt.fillStyle="rgb(255,255,255)";
contxt.beginPath();
contxt.moveTo(693,38);
contxt.lineTo(693,160);
contxt.lineTo(712,160);
contxt.bezierCurveTo(717,160,722,159,727,156);
contxt.bezierCurveTo(732,154,736,149,739,142);
contxt.bezierCurveTo(739,141,739,140,739,138);
contxt.bezierCurveTo(740,137,740,136,740,134);
contxt.lineTo(741,133);
contxt.bezierCurveTo(741,130,742,127,742,124);
contxt.bezierCurveTo(742,121,742,117,742,114);
contxt.lineTo(742,71);
contxt.bezierCurveTo(742,64,741,59,739,54);
contxt.bezierCurveTo(737,50,734,46,732,44);
contxt.bezierCurveTo(729,42,726,41,723,40);
contxt.bezierCurveTo(720,39,717,39,714,38);
contxt.lineTo(693,38);
contxt.fill();

contxt.fillStyle="rgb(255,155,255)";
contxt.beginPath();
contxt.moveTo(693,291);
contxt.lineTo(709,291);
contxt.bezierCurveTo(716,291,722,289,728,285);
contxt.bezierCurveTo(735,280,739,274,741,264);
contxt.bezierCurveTo(741,262,742,259,742,257);
contxt.bezierCurveTo(742,255,742,252,742,249);
contxt.lineTo(742,215);
contxt.bezierCurveTo(742,210,742,205,741,201);
contxt.lineTo(741,200);
contxt.lineTo(741,199);
contxt.bezierCurveTo(741,198,740,197,740,195);
contxt.bezierCurveTo(740,194,739,193,739,191);
contxt.bezierCurveTo(736,184,732,178,727,175);
contxt.bezierCurveTo(722,171,717,169,712,169);
contxt.lineTo(693,169);
contxt.lineTo(693,291);
contxt.fill();







}

function drawShape2(){
contxt.fillStyle="rgb(252,176,6)";
contxt.beginPath();
contxt.moveTo(752,127);
contxt.lineTo(752,64);
contxt.lineTo(775,64);
contxt.bezierCurveTo(778,78,784,89,793,96);
contxt.bezierCurveTo(802,103,813,107,827,107);
contxt.bezierCurveTo(835,107,841,105,846,102);
contxt.bezierCurveTo(851,98,854,93,854,87);
contxt.bezierCurveTo(854,82,852,78,848,75);
contxt.bezierCurveTo(844,72,837,70,827,67);
contxt.lineTo(803,61);
contxt.bezierCurveTo(786,57,774,52,765,44);
contxt.bezierCurveTo(757,36,753,26,753,14);
contxt.bezierCurveTo(753,0,759,-10,770,-19);
contxt.bezierCurveTo(780,-28,795,-32,812,-32);
contxt.bezierCurveTo(821,-32,829,-31,836,-29);
contxt.bezierCurveTo(844,-26,851,-22,858,-17);
contxt.lineTo(865,-29);
contxt.lineTo(884,-29);
contxt.lineTo(884,27);
contxt.lineTo(862,27);
contxt.bezierCurveTo(859,15,853,6,845,0);
contxt.bezierCurveTo(836,-6,826,-9,815,-9);
contxt.bezierCurveTo(807,-9,801,-8,797,-5);
contxt.bezierCurveTo(793,-1,790,2,790,8);
contxt.bezierCurveTo(790,12,792,15,795,18);
contxt.bezierCurveTo(798,20,802,23,808,24);
contxt.lineTo(838,31);
contxt.bezierCurveTo(857,35,870,42,879,50);
contxt.bezierCurveTo(888,58,892,68,892,81);
contxt.bezierCurveTo(892,96,886,108,876,117);
contxt.bezierCurveTo(865,126,850,130,830,130);
contxt.bezierCurveTo(821,130,812,129,804,126);
contxt.bezierCurveTo(796,123,787,119,779,113);
contxt.lineTo(773,127);
contxt.lineTo(752,127);
contxt.fill();




}

function drawShape3(){
contxt.fillStyle="rgb(193,255,0)";
contxt.beginPath();
contxt.moveTo(-19,505);
contxt.bezierCurveTo(-14,510,-8,513,-2,515);
contxt.bezierCurveTo(4,517,10,518,18,518);
contxt.bezierCurveTo(32,518,43,514,51,506);
contxt.bezierCurveTo(59,498,63,487,63,473);
contxt.bezierCurveTo(63,458,59,446,51,438);
contxt.bezierCurveTo(44,430,33,426,19,426);
contxt.bezierCurveTo(12,426,5,427,0,430);
contxt.bezierCurveTo(-6,433,-12,438,-18,445);
contxt.lineTo(-38,444);
contxt.lineTo(-29,347);
contxt.bezierCurveTo(-19,350,-9,353,0,354);
contxt.bezierCurveTo(11,356,22,357,33,357);
contxt.bezierCurveTo(44,357,56,356,66,354);
contxt.bezierCurveTo(77,353,88,350,97,347);
contxt.bezierCurveTo(93,362,85,373,73,380);
contxt.bezierCurveTo(60,387,44,390,22,390);
contxt.bezierCurveTo(18,390,14,390,9,389);
contxt.bezierCurveTo(4,389,-2,388,-10,387);
contxt.lineTo(-12,415);
contxt.bezierCurveTo(-4,411,3,408,10,407);
contxt.bezierCurveTo(18,405,26,404,33,404);
contxt.bezierCurveTo(55,404,72,410,86,422);
contxt.bezierCurveTo(100,434,107,450,107,468);
contxt.bezierCurveTo(107,490,100,507,86,520);
contxt.bezierCurveTo(72,532,53,539,28,539);
contxt.bezierCurveTo(6,539,-11,534,-25,525);
contxt.bezierCurveTo(-39,515,-46,503,-46,488);
contxt.bezierCurveTo(-46,481,-43,474,-38,469);
contxt.bezierCurveTo(-33,464,-27,461,-19,461);
contxt.bezierCurveTo(-12,461,-6,463,-1,467);
contxt.bezierCurveTo(2,471,5,477,5,483);
contxt.bezierCurveTo(5,490,3,495,-1,499);
contxt.bezierCurveTo(-6,503,-12,505,-19,505);
contxt.fill();




}


function drawShape4(){




contxt.fillStyle="rgb(0,111,55)";
contxt.beginPath();
contxt.moveTo(121,14);
contxt.lineTo(157,86);
contxt.lineTo(236,97);
contxt.lineTo(178,153);
contxt.lineTo(192,232);
contxt.lineTo(121,195);
contxt.lineTo(50,232);
contxt.lineTo(64,153);
contxt.lineTo(6,97);
contxt.lineTo(86,86);
contxt.lineTo(121,14);
contxt.fill();




}
