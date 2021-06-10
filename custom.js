(function($){
	"use strict";

	jQuery(document).ready(function(){
	 	$('.off_can_trigger a').on('click',function(){
	 		$('.off_canvas_menu_area,.off_canvas_overlay').addClass('active');
	 		return false;
	 	});
	});

	jQuery(document).ready(function(){
	 	$('.off_canvas_close,.off_canvas_overlay').on('click',function(){
	 		$('.off_canvas_menu_area,.off_canvas_overlay').removeClass('active');
	 	});
	});

}(jQuery));
