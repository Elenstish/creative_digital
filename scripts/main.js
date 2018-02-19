

$(document).ready(function() {

// --------- burger
	$buttons = $('._navLinks');
	$('._navLinks, ._burger').click(function() {
	$buttons.toggleClass('active');
    return;
	});

// --------- scroll down
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
	    'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
	    window.location.hash = target;
	 	});
	});

// --------- scroll up
	$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

// ----------- slider team
	$('.responsive').slick({
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    responsive: [
    	{
			breakpoint: 992,
      		settings: {
        		slidesToShow: 2,
        		slidesToScroll: 1,
        		centerMode: false,
                initialSlide: 0,
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1,
        		centerMode: false,
                initialSlide: 0,
      	}
    	}
  	]
	});
});




