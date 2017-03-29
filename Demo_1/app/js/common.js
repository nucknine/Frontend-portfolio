

$(document).ready(function(){

  //preloader
  $(window).on('load', function () {
    var $preloader = $('#preloader-page'),
        $dots   = $preloader.find('.preloader-dots');
    $dots.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

  // $(window).load(function(){
  // $('#preloader-dots').fadeOut('slow',function(){
  //   $(this).remove();
  // });
  // });


  //svg
  svg4everybody({});

  //burger-menu
	$('.burger-icon').click(function(){
		$('.burger-icon__line_line1').toggleClass('burger-icon__line_line-open1');
		$('.burger-icon__line_line2').toggleClass('burger-icon__line_line-open2');
		$('.burger-icon__line_line3').toggleClass('burger-icon__line_line-open3');
		$('.burger-menu').toggleClass('burger-menu_visible');
		$('.page-overlay').toggleClass('page-overlay_visible');
		$('body').toggleClass('overflow');
	});
	$('.page-overlay').click(function(){
		$('.burger-icon__line_line1, .burger-icon__line_line2, .burger-icon__line_line3, .burger-menu, .page-overlay, body, .burger-icon, .video').removeClass('burger-icon__line_line-open1 burger-icon__line_line-open2 burger-icon__line_line-open3 burger-menu_visible page-overlay_visible overflow burger-icon_hide video_visible');
	});

	$('.burger-menu').click(function(){
		return false;
	});

	$('#js-watch-video-head, #js-watch-video-content').click(function(){
		$('.video').addClass('video_visible');
		$('.page-overlay').addClass('page-overlay_visible');
		$('.burger-icon').toggleClass('burger-icon_hide');
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
      $('.counter__digit').countTo(); //countTo
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

//testimonials
  $('.testimonials-title, .testimonials-carousel').css('opacity',0);

  $('#jq-testimonials-waypoint').waypoint(function() {
      $('.testimonials-title, .testimonials-carousel').addClass('animated fadeInUp');
  }, { offset: '70%' });

//recent-post
  $('.recent-post-title, .post-box').css('opacity',0);

  $('#jq-recent-post-waypoint').waypoint(function() {
      $('.recent-post-title').addClass('animated fadeInUp');
  }, { offset: '70%' });

  $(".post-box").waypoint(function () {
    itemQueue.push(this.element);
    processItemQueue();
    }, {
    offset: '80%'
    })

//get-started
  $('.get-started-title').css('opacity',0);

  $('#jq-get-started-waypoint').waypoint(function() {
      $('.get-started-title').addClass('animated fadeIn');
  }, { offset: '70%' });

//footer
	$('.footer-menu__menu-block, .footer-menu__about').css('opacity',0);
	$('#jq-footer-waypoint').waypoint(function() {
      $('.footer-menu__menu-block, .footer-menu__about').addClass('animated fadeIn');
  }, { offset: '50%' });

//stellar

var parallax = function() {
		$(window).stellar({
      horizontalScrolling: false,
      responsive: true
    });
	};

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

console.log(isIE);

if(!isIE)
{
    parallax();
}



//counters
 // 	var elems = [];
 //  	elems = $(".counter__digit");

 //  	function count(x) {
 //  	var y = 0;
 //  	countTimer = setInterval(function(){
 //  		y+=10;
 //  		if (y <= x){
 //  			count(y);
 //  		}
 //  		else {
 //  			countTimer = null;
 //  		}
 //  	}, 2);
 //  	}

 //  	for (var i = 0; i<elems.length; i++) {
 //        var text = $(elems[i]).text();
 //        count(text);
 //  	}

});


// var goToTop = function() {

// 		$('.js-gotop').on('click', function(event){

// 			event.preventDefault();

// 			$('html, body').animate({
// 				scrollTop: $('html').offset().top
// 			}, 500, 'easeInOutExpo');

// 			return false;
// 		});

// 		$(window).scroll(function(){

// 			var $win = $(window);
// 			if ($win.scrollTop() > 200) {
// 				$('.js-top').addClass('active');
// 			} else {
// 				$('.js-top').removeClass('active');
// 			}

// 		});

// 	};


// 	// Loading page
// 	var loaderPage = function() {
// 		$(".fh5co-loader").fadeOut("slow");
// 	};

// 	var counter = function() {
// 		$('.js-counter').countTo({
// 			 formatter: function (value, options) {
// 	      return value.toFixed(options.decimals);
// 	    },
// 		});
// 	};

// 	var counterWayPoint = function() {
// 		if ($('#fh5co-counter').length > 0 ) {
// 			$('#fh5co-counter').waypoint( function( direction ) {

// 				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 					setTimeout( counter , 400);
// 					$(this.element).addClass('animated');
// 				}
// 			} , { offset: '90%' } );
// 		}
// 	};

// 	var parallax = function() {

// 		if ( !isMobile.any() ) {
// 			$(window).stellar({
// 				horizontalScrolling: false,
// 				hideDistantElements: false,
// 				responsive: true

// 			});
// 		}
// 	};

// 	var testimonialCarousel = function(){

// 		var owl = $('.owl-carousel-fullwidth');
// 		owl.owlCarousel({
// 			items: 1,
// 			loop: true,
// 			margin: 0,
// 			nav: false,
// 			dots: true,
// 			smartSpeed: 800,
// 			autoHeight: true
// 		});

// 	};


// 	$(function(){
// 		mobileMenuOutsideClick();
// 		offcanvasMenu();
// 		burgerMenu();
// 		contentWayPoint();
// 		dropdown();
// 		goToTop();
// 		loaderPage();
// 		counterWayPoint();
// 		counter();
// 		parallax();
// 		testimonialCarousel();
// 	});


// }());