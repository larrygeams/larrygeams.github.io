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

	$('.customer-logos').owlCarousel({
	    loop				: false,
	    margin				: 10,
	    nav					: false,
	    responsive:{
	        0:{
	            items:1,
	            autoplay			:true,
			    autoplayTimeout		:1000,
			    autoplayHoverPause	:true,
	        },
	        768:{
	            items:3,
	            dots : false,
	            autoplay			:true,
			    autoplayTimeout		:1000,
			    autoplayHoverPause	:true,
	        },
	        992:{
	            items: 6,
	            dots : false
	        }
	    }
	})
}