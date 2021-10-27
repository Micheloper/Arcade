
//Definir el "container" e el div y estabelecer el primero hijo
var containerElmID = "#fullpage-scroll-container";
$(containerElmID + ' .fullpage-scroll-element:first-child ').addClass("active-page");


//Construir navegación
var navStart = '<ul id="fullpage-scroll-navigation">';

var navCount = '';
$(containerElmID + ' .fullpage-scroll-element').each(function(index){
    if ( index == 0 ){ var activeClass = 'active-nav'}else{ var activeClass = '' }
    var href = $(this).attr("id");
    var li = '<li><a href="#' + href + '" class="' + activeClass + '"></a></li>';
    navCount += (li);

});

var navEnd = '</ul">';

$("body").append(navStart + navCount + navEnd);

//FullPage Scroll js
var isHandlingScroll = 0;

document.addEventListener("wheel", function (e) {
	
  var direction;
  if ( Math.sign(e.deltaY) == 1 ){
        var direction = 1;
      }else if( Math.sign(e.deltaY) == -1 ){
        var direction = 0;
      }
  
  if ( isHandlingScroll == 0 && ( e.deltaY >= 10 || e.deltaY <= -10) ){
    
    

    setTimeout(function() {
      isHandlingScroll = 0;
    }, 1000);
    
    isHandlingScroll = 1;
    pageTransition(direction);
  }
  
    
    if ( isHandlingScroll == 0 && (e.deltaY >= 10 || e.deltaY <= -10) ){
        console.log("scrolled! - " + parseInt(e.deltaY));
      }
  

});


  


$("#fullpage-scroll-navigation li").click(function(e){
  var destination = $(this).find('a').attr('href');
  pageTransition('undefined', destination);
  e.preventDefault();
});


function pageTransition(direction, destination){
   
    
     $(".move-in-direction-0").removeClass('move-in-direction-0');
     $(".move-out-direction-0").removeClass('move-out-direction-0');
     $(".move-in-direction-1").removeClass('move-in-direction-1');
     $(".move-out-direction-1").removeClass('move-out-direction-1');
   
   if (typeof destination == 'undefined') {
	    if(direction == 0){
		    
		    if ( !$('.active-page').prev().hasClass('fullpage-scroll-element') ){
		    	return;
		    }
		    
		    var destination = '#' + $(".active-page").closest('.fullpage-scroll-element').prev().attr('id');
		    
		}else{
			if ( !$('.active-page').next().hasClass('fullpage-scroll-element') ){
		        return;
		    }
      
			var destination = '#' + $(".active-page").closest('.fullpage-scroll-element').next().attr('id');
		}
	}
	
	if (direction == 'undefined') {
	    
	    if( $(".active-page").index() > $(destination).index() ){
		    
		     var direction = 0;
		  }else{
			   var direction = 1;
		  }
	   
	}
	
	$(".active-page").addClass('move-out-direction-' + direction);
    $(destination).addClass('move-in-direction-' + direction);
    $(".move-in-direction-" + direction).addClass('active-page');
    $(".move-out-direction-" + direction).removeClass('active-page');
    $(".active-nav").removeClass('active-nav');
   
    $("#fullpage-scroll-navigation li a[href='" + destination + "']").addClass('active-nav');
}