
var ScrollAnimation = {

	init : function(){

		// alert(1);
		// this.$scroll = $('.scroll-obj');
		this.$pan    = $('.breadcrumbs');
		// this.$fade   = $('.fade');
		// this.$header = $('.header');

		// $('.fade-child-delay').each(function(i, e) {
			// var $el = $(e);
			// $el.find('.fade').each(function(index, el) {
				// var $this = $(el);
				// $this.css({
					// 'transition-delay':index/24+'s'
				// });
			// });
		// });

	},

	onScroll : function(t){
		var _this = this;
		// alert(1);

		// _this.$scroll.each(function(index, el) {
		// 	var $el = $(el);
		// 	var slow = parseInt($el.data('float').slowmo,10);
		// 	var y = $el.offset().top;
		// 	var oy = (t-y)/slow;
		// 	TweenLite.to($el, 0.5, {
		// 		y:oy,
		// 	});
		// });

		var rX = t/10;
		if( rX < 90 && this.$pan.length ){
			TweenLite.to(_this.$pan, 0.5, {
				rotationX:rX,
				transformPerspective:2000,
				transformOrigin:"center bottom",
			});
		}

		// _this.$fade.each(function(index, el) {
		// 	var $el = $(el);
		// 	var y = $el.offset().top;
		// 	if( y < t + windowHeight ){
		// 		$el.addClass('is_over');
		// 	}
		// });

	}

}

$(function(){
	ScrollAnimation.init();
});

$(window).on('scroll', function(){
	ScrollAnimation.onScroll($(window).scrollTop());
});
