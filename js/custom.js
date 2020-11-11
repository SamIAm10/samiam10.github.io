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

    $("#to-top").mouseover(function() {
        $("#to-top-copy").animate({opacity: "1"}, "slow");
    });
    $("#to-top").mouseout(function() {
        $("#to-top-copy").animate({opacity: "0"}, "slow");
	});

	// paper airplane button animation
	$('#submit-button').hover(function() {
		$('.email-icon').css('transform', 'translate(45%, -45%) scale(0.65)');
	}, function() {
		$('.email-icon').css('transform', 'translate(0, 0) scale(1)');
	});

	// Dark mode
	var dark_mode = false;

	$("#dark-toggle").click(function() {
		dark_mode ? dark_mode = false : dark_mode = true;
		$("#about").toggleClass("dark-about");
		$("#about a").toggleClass("dark-about-a");
		$("#tl-dr").toggleClass("dark-tl-dr");
		$("#tl-dr h3").toggleClass("dark-tl-dr-h3");
		$("#services").toggleClass("dark-services");
		$("#experience").toggleClass("dark-experience");
		$("#experience a").toggleClass("dark-experience-a");
		$("#experience .skill-icon").toggleClass("dark-experience-skill-icon");
		$("#experience .places-worked").toggleClass("dark-experience-places-worked");
		$("#portfolio").toggleClass("dark-portfolio");				
		$(".modal-header").toggleClass("dark-modal-header");				
		$(".modal-header h6").toggleClass("dark-modal-header-h6");				
		$(".modal-header .close").toggleClass("dark-modal-header-close");				
		$(".modal-body").toggleClass("dark-modal-body");			
		$(".modal-body a").toggleClass("dark-modal-body-a");			
		$(".modal-body .tech_used").toggleClass("dark-modal-body-tech_used");			
		$(".modal-body #visit-btn").toggleClass("dark-modal-body-visit-btn");
		$(".modal-footer").toggleClass("dark-modal-footer");				
		$(".modal-footer .btn").toggleClass("dark-modal-footer-btn");
		$("#contact").toggleClass("dark-contact");
		$("#contact .email-button").toggleClass("dark-contact-email-button");
	});

	$(".modal-body #visit-btn").hover(function() {
		if (dark_mode) {
			$(this).css("background-color", "rgb(0, 181, 181)");
		}
	}, function() {
		if (dark_mode) {
			$(this).css("background-color", "");
		}
	});

	$("#contact .email-button").hover(function() {
		if (dark_mode) {
			$(this).css("background-color", "rgb(0, 181, 181)");
		}
	}, function() {
		if (dark_mode) {
			$(this).css("background-color", "");
		}
	});
	// End dark mode

});