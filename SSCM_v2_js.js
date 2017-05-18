// $("li").click(function(){
// 	$(this).addClass("active").siblings().removeClass("active");
// });

//
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();  
});


	
$('nav a:lt(5)').click(function(){
	if ( $(document).width() < 768 ) {
		$('#navbar-collapse-1').toggleClass('in').attr('aria-expanded','false');
	}
});



setInterval(gotoTop, 100);
function gotoTop() {
	if ( $(document).scrollTop() <= 250 ) {
		$('#gotoTop').css("display", "none");
	}
	if ( $(document).scrollTop() > 250 ) {
		$('#gotoTop').css("display", "block");
	}
};
 

setInterval(play, 3000);
var index = 1;
function play(){
	index++;
	
	if ( index == 1 ) {
		document.getElementById('showing_1').style.display = 'block';
		document.getElementById('showing_2').style.display = 'none';
	}
	if ( index == 2 ) {
		document.getElementById('showing_1').style.display = 'none';
		document.getElementById('showing_2').style.display = 'block';
		index = 0;
	}
};



var prevHighlightEndFunc = null;
function menuclicked(evt){
	var targetid = evt.href.split('#');
	targetid = targetid[targetid.length-1];
	var targetele = document.getElementById(targetid);
	
	if ( prevHighlightEndFunc != null ) {
		prevHighlightEndFunc();
		prevHighlightEndFunc = null;
	}
	targetele.parentElement.classList.add('highlight');
	var removed = false;
	var endFunc = function () {
		if ( removed == false ) {
			targetele.parentElement.classList.remove('highlight');
			removed = true;
		}
	}
	prevHighlightEndFunc = endFunc;
	setTimeout(function(){
		endFunc();
	}, 3000);
}

