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
//head
	$('.page-title').css('opacity',0);
	$('#jq-head-waypoint').waypoint(function() {
      $('.page-title').addClass('animated fadeIn');
  }, { offset: '50%' });
//counters
	$('.counter').css('opacity',0);
	$('#jq-counters-waypoint').waypoint(function() {
      $('.counter').addClass('animated fadeInUp');
  }, { offset: '70%' });

//features
	$('.features-title, .features-content, .features-content__image-preview').css('opacity',0);

	$('#jq-features-waypoint-1').waypoint(function() {
      $('.features-title, #jq-features-waypoint-content-1, #jq-features-waypoint-image-1').addClass('animated fadeInUp');
  }, { offset: '60%' });

	$('#jq-features-waypoint-content-2').waypoint(function() {
      $('#jq-features-waypoint-content-2, #jq-features-waypoint-image-2').addClass('animated fadeInUp');
  }, { offset: '70%' });
//showcase

	$('.showcase-title, .showcase-box, .description-box').css('opacity',0);
	//delay function
	var itemQueue = []
  	var delay = 200
  	var queueTimer

	function processItemQueue () {
    if (queueTimer) return // We're already processing the queue
    queueTimer = window.setInterval(function () {
      if (itemQueue.length) {
        $(itemQueue.shift()).addClass('animated fadeInUp');
        processItemQueue();
      	} else {
        window.clearInterval(queueTimer);
        queueTimer = null;
        	}
		}, delay)
  	}

  	$(".description-box").waypoint(function () {
    itemQueue.push(this.element);
    processItemQueue();
  	}, {
    offset: '80%'
  	})

	$('#jq-showcase-waypoint').waypoint(function() {
      $('.showcase-title').addClass('animated fadeInUp');
  }, { offset: '80%' });

$(".showcase-box").waypoint(function () {
    itemQueue.push(this.element);
    processItemQueue();
  	}, {
    offset: '80%'
  	})

//start-a-course
	$('.startcourse-title, .step-slider, .btn-holder').css('opacity',0);

	$('#jq-start-a-course-waypoint').waypoint(function() {
      $('.startcourse-title, .btn-holder, .step-slider').addClass('animated fadeIn');
  }, { offset: '70%' });

//footer
	$('.footer-menu__menu-block, .footer-menu__about').css('opacity',0);
	$('#jq-footer-waypoint').waypoint(function() {
      $('.footer-menu__menu-block, .footer-menu__about').addClass('animated fadeIn');
  }, { offset: '50%' });

});
