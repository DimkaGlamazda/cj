if (typeof $.cj == 'undefined') $.cj = {};

$.cj.projectsAutocount = {

	triggerContainer : '[data-projectsAutocount=container]',
	
	fields : '[data-projectsAutocount=field]',

	init : function () {

		var w_top = $(window).scrollTop();
		var e_top = $(this.triggerContainer).offset().top;

		if(w_top + 600 >= e_top)
		{
			$(this.fields).spincrement({duration : 3000, decimalPlaces : null, thousandSeparator : null});
		}
	}
};