$(function() {
	/* Intro */
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/* Features */
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/* Experience */
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeIn');
		$('.skills-bar-container').addClass('animated fadeIn');
        $('.wp3-1').addClass('progress1-delay');
        $('.wp3-2').addClass('progress2-delay');
        $('.wp3-3').addClass('progress3-delay');
        $('.wp3-4').addClass('progress4-delay');
        $('.wp3-5').addClass('progress5-delay');
	}, {
		offset: '50%'
	});

	/* Resume Button */
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated bounceIn');
	}, {
		offset: '75%'
	});

	/* Portfolio */
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/* Paper Plane */
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});

	// for preloader
	// setTimeout(function(){
	// 	$('body').addClass('loaded');
	// }, 2800);

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            // $(".navbar").addClass("navbar-shadow");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            // $(".navbar").removeClass("navbar-shadow");
        }
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	$('#experience a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // $("#to-top").mouseover(function() {
    //     $("#to-top-copy").animate({opacity: "1"}, "slow");
    // });
    // $("#to-top").mouseout(function() {
    //     $("#to-top-copy").animate({opacity: "0"}, "slow");
	// });

	// Paper airplane animation
	function shake() {
		$("#email-icon").toggleClass("shk");
	}

	var shake_interval = setInterval(shake, 5000);

	$('#submit-button').hover(function() {
		$('#email-icon').css('transform', 'translate(45%, -45%) scale(0.65)');
		clearInterval(shake_interval);
	}, function() {
		$('#email-icon').css('transform', 'translate(0, 0) scale(1)');
		shake_interval = setInterval(shake, 5000);
	});

	// Dark mode
	var dark_mode = false;

	function toggleDarkMode() {
		dark_mode = $("#dark-toggle").prop("checked");
		$("#about").toggleClass("dark-about", dark_mode);
		$("#tl-dr").toggleClass("dark-tl-dr", dark_mode);
		$("#services").toggleClass("dark-services", dark_mode);
		$("#experience").toggleClass("dark-experience", dark_mode);
		$("#portfolio").toggleClass("dark-portfolio", dark_mode);				
		$(".modal-header").toggleClass("dark-modal-header", dark_mode);				
		$(".modal-body").toggleClass("dark-modal-body", dark_mode);			
		$(".modal-footer").toggleClass("dark-modal-footer", dark_mode);				
		$("#contact").toggleClass("dark-contact", dark_mode);
	}

	toggleDarkMode();
	
	$("#dark-toggle").click(toggleDarkMode);
	// End dark mode
});