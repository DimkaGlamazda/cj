if (typeof $.cj == 'undefined') $.cj = {};

$.cj.cssAnimate = {

	triggerContainer : '[data-css-animate=trigger]',
	newsItem : '.news-item',
	actionType : 'animated fadeInUp',

	init : function(){
		var w_top = $(window).scrollTop();
		var e_top = $(this.triggerContainer).offset().top;

		if(w_top + 600 >= e_top)
		{
			$.each($(this.newsItem), function(i, e){
				setTimeout(function(){
					$(e).addClass($.cj.cssAnimate.actionType).css('visibility', 'visible');

				}, ((i * 1000) / 5));
				
			});
		}
	}
};