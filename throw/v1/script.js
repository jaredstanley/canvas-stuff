$(document).ready(function(){

var pct; //float btwn 0-1;
initAccelerometer();

addEventListener("touchstart", doTouchStart, false);
addEventListener("touchmove", doTouchMove, false);

function doTouchStart(e){
	
	if(calIsVisible == false){
		e.preventDefault();
		showCalendar();		
	}else{
			
	}

}

function doTouchMove(e){
	e.preventDefault();
}


hideCalendar();

firstTimeDate();

$('#moon').click(function(){
	showCalendar();

});

function showCalendar(){
	//console.log('show Calendar');
	// $('#datepicker').show();
	calIsVisible = true;
}

function hideCalendar(){
	//console.log('hide calendar');
	// $('#datepicker').hide();
	calIsVisible = false;
}

function showDate(d){
	// calculateDateAndPhase(d);

   	// $('#moon .phase').hide();
    //console.log(parseInt(calculateDateAndPhase( d )*100));
    
    // var layerToShow = parseInt(Math.floor(pct*totalFrames));
    // console.log(layerToShow+" pct="+pct);
    // var labelToShow = parseInt(Math.floor(pct*moonLabelsArr.length));
   // console.log(layerToShow+" <||> "+labelToShow);
   // $('#date').html(labelToShow+" layer #"+layerToShow+" "+parseInt(pct*100)+"%");
    //$('#date').append("<strong> "+moonLabelsArr[labelToShow]+" </strong>");
    // console.log('test '+ moonLabelsArr[labelToShow]+" "+ labelToShow);
    // var labelSplit = moonLabelsArr[labelToShow].replace(' ', '<br />');
    // $('#panelleft #dayofweek').html(dowArray[dayOfWeek]);
    // $('#panelleft #date').html(day);
    // $('#panelright #month').html(monthArray[month-1]);
    // $('#panelright #year').html(year);
    // console.log(labelSplit);
    // $('#panelright #status').html(labelSplit);
    // setPointer();

    // $('#moon .phase').eq(layerToShow).show();
   	//calculateDateAndPhase(d);
}

function calculateDateAndPhase(d){
	var dNumsArr = d.split("/")
	date = new Date(dNumsArr[2], dNumsArr[0]-1, dNumsArr[1]); //birthday = new Date(1995,11,17); year / month / day // 10/30/2012 from picker
	
	day = date.getDate();
	dayOfWeek = date.getDay();
	month = date.getMonth()+1;
	year = date.getFullYear();

	//
	// var daysElapsed = millsToDays(date.getTime()-origDate.getTime() ); //days elapsed since origDate
	// var daysSinceLast = daysElapsed%synodicMonth; 
	// pct = daysSinceLast/synodicMonth;
	//

	//$('#date').html("<br>"+date+"<br>"+origDate+"<br>"+parseInt(daysSinceLast/synodicMonth*10)+"<br>");
	/*$('#date').append(" <br> "
		+daysSinceLast+" <br> "
		+pct+" %");*/
	return pct;

}

function setPointer(){
	var _pct = parseInt(pct*100);
	//if 0-50, add 50
	if(_pct<50){
		_pct+=50;
	}else{ _pct -= 50};
	
	$('#iconstrip #pointer').css('left', _pct+"%");
}

function firstTimeDate(){
	var date = new Date();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var y = date.getFullYear();

	var now = m + "/" + d + "/" + y;
	//calculateDateAndPhase(now);
	showDate(now);

}


});



