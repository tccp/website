var tcc = tcc || {
	debug: true
};

/**
 * Initalize any JS
 * 
 */
tcc.init = function(){
	$( document ).ready(function() {
		tcc.helpers.init_news_ticker();
	});
}();


