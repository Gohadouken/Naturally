$(document).ready(function(){
	// fade-in for the logo and initial one for the link
	$('#sub_slogan').animate({opacity:'1.0'},2000);
	$('#main_explanation').animate({opacity:'1.0'},4000);
	// ----------------------------------

	// flickity carousel
	$('#main_carousel').flickity({
  		autoPlay: 4000,
  		wrapAround: true,
  		pageDots: false,
	});
	// ----------------------------------
});