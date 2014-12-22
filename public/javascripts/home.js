$(function() {
	$('.banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: false              //  Support responsive design. May break non-responsive designs
	});
	$(".signin").colorbox({
		inline:true, 
		width:"300px",
		height:"200px",
		onClosed:function(){$(".invalidUser").html("");}			
	});	
	
	$(".logMeIn").click(function(){
		if($(".userName").val() == "krishna" && $(".password").val() == "pass1234") {
			$.colorbox.close()	
			$(".signin").hide();
			$(".topMenus").show();
			$("#loggedUserName").html($(".userName").val());
		} else {			
			$(".invalidUser").html("Invalid User");
			$.colorbox.resize()
		}
		
	});	
});