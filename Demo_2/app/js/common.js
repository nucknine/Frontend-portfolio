$(document).ready(function() {
$('#popup-image').magnificPopup({
	items: {
    	src: '../img/project-image1-mini.jpg'
    },
	type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		}
});
});




