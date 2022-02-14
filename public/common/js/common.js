
// responsive nav	
$(document).ready(function() {
$('#menu').meanmenu();
});

// loading 
$(document).on('ready', function(){
 setTimeout(function(){
   $('.preloader').addClass('loaded');
 }, 4000)
});

// svg animation 
$('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 50){
   $(this).addClass("fadeInDown");
  }
 });
});

// pegetop 
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

// you are here
$(document).ready(function() {
    if(location.pathname != "/") {
        $('#menu ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    } else $('#menu ul li a:eq(0)').addClass('active');
});


// height
var agent = navigator.userAgent;
if(agent.search(/iPhone/) != -1 || 
  agent.search(/iPad/) != -1 ||
  agent.search(/iPod/) != -1 ||
  agent.search(/Android/) != -1){
    var androidVh100 = window.innerHeight / 100 * 90;
    var androidVh50 = window.innerHeight / 2;
    var androidVh5 = window.innerHeight / 10;
    $('.hero-row').css({
      'height': (androidVh100)
    }); 
        $('.desc-row').css({
          'height': (androidVh50)
        }); 
        $('.fix-bar').css({
          'height': (androidVh5)
        }); 
}

// Android
if ( navigator.userAgent.indexOf('Android') > 0 ) {
    $("body").addClass("Android");
};
