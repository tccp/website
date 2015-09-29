tcc.helpers = tcc.helpers || {
	debug: true
};

/**
 * Create a news ticker using owl carousel
 * 
 */
tcc.helpers.init_news_ticker = function() {
	if (tcc.debug || this.debug) console.log("Creating News Ticker");

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 5,
		nav: false,
		autoplay: true,
		dots: false, 
		stagePadding: 100, 
		autoplayTimeout: 1500,
		autoplayHoverPause: true,
		center: true, 
		responsive: {
			0: {
				items: 2,
				stagePadding: 10
			},
			600: {
				items: 3,
				stagePadding: 50
			},
			1000: {
				items: 4,
				stagePadding: 100
			}
		}
	});


};