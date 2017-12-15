$(document).ready(function(){
	
	$(".panel").hide();
	
	
	$(".flip").click(function(){	
		
		 // hide all other panel other than this panel
		var $thisPanel = $(this).find('.panel');
		$(".panel").not($thisPanel).hide();
		
		// show all other dots other than this dot.
		var $thisDot = $(this).find('.dot_hide');
		$(".dot_hide").not($thisDot).show();
		
		//toggle the dots and panel
		$thisPanel.slideToggle();
		$thisDot.slideToggle();
		 
		
	
	});
	/*==============add botton=============*/
	//top btn
  $(window).scroll(function(){
	  
	  if
		  ($(this).scrollTop()>400){
			  $("#top_btn").fadeIn();
			  
		  }
		else{
			$("#top_btn").fadeOut();
			
		}
	  
	  
	  
	  
  });
	$("#top_btn").click(function(){
		$("body,html").animate({scrollTop:0},1000);
	});
});