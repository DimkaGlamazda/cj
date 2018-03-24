if (typeof $.cj == 'undefined') $.cj = {};

$.cj.preloader = {

	block : '#preloader',
	time : 1000,

	init: function () {
		$(this.block).css('height', $(window).height());

		setTimeout(function() {
	        $($.cj.preloader.block).fadeOut('slow');
	    }, this.time);
	}
};