$(function(){

	smoothTarget();
	logoCarousel();

});

/*
* Add Smooth Scrolling Transition
*/

var smoothTarget = function(){

	$('a[href^="#"]').click(function(event) {

		var id 		= $(this).attr("href");
		var target 	= $(id).offset().top;

		$('html, body').animate({ scrollTop:target }, 500);

		event.preventDefault();
	});

}

/*
* Showcase - Logo Carousel 
*/

var logoCarousel = function(){

	$('.client-logos').owlCarousel({
		autoplay			: true,
		autoplayTimeout		: 3000,
		autoplayHoverPause	: true,
	    loop				: true,
	    margin				: 10,
	    nav					: false,
	    responsive:{
	        0:{
	            items		:1,
	        },
	        768:{
	            items		:3,
	            dots 		: false,
	        },
	        992:{
	            items		: 6,
	            dots 		: false,
	            drag		: false
	        }
	    }
	})
}