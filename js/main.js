$(document).ready(function() {

	// console.log($(window).width())
	// console.log($(window).height())

	var demo1 = $("#demo1").slippry({
		transition: 'fade',
		useCSS: true,
		speed: 1000,
		pause: 3000,
		auto: true,
		preload: 'visible',
		adaptiveHeight: false
	});

	// $('.bxslider').bxSlider();

});