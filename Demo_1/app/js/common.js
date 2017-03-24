$(document).ready(function(){
	svg4everybody({});
	$('.burger-icon').click(function(){
		$('.burger-icon__line_line1').toggleClass('burger-icon__line_line-open1');
		$('.burger-icon__line_line2').toggleClass('burger-icon__line_line-open2');
		$('.burger-icon__line_line3').toggleClass('burger-icon__line_line-open3');
		$('.burger-menu').toggleClass('burger-menu_visible');
		$('.page-overlay').toggleClass('page-overlay_visible');
		$('body').toggleClass('overflow');
	});
	$('.page-overlay').click(function(){
		$('.burger-icon__line_line1, .burger-icon__line_line2, .burger-icon__line_line3, .burger-menu, .page-overlay, body').removeClass('burger-icon__line_line-open1 burger-icon__line_line-open2 burger-icon__line_line-open3 burger-menu_visible page-overlay_visible overflow');
	});

	$('.burger-menu').click(function(){
		return false;
	});

	$('#js-watch-video-head, #js-watch-video-content').click(function(){
		$('.video').addClass('video_visible');
		$('.page-overlay').addClass('page-overlay_visible');
	});

	$(".owl-carousel").owlCarousel({
  		dots: true,
  		loop: true,
  		items: 1,
  		autoHeight:true
  		});

	// $('#jq-footer-waypoint').css('opacity', 0);
	$('#jq-footer-waypoint').waypoint(function() {
      $('.footer-menu__menu-block, .footer-menu__about').addClass('animated fadeInUp');
  }, { offset: '50%' });

// $('#test').addClass('fadeIn');
	// $('#jq-footer-waypoint').waypoint(function() {
 //      $('#jq-footer-waypoint').fadeIn(3000);
	// });
});
