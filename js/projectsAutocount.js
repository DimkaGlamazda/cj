if (typeof $.cj == 'undefined') $.cj = {};

$.cj.projectsAutocount = {

	triggerContainer : '[data-projectsAutocount=container]',
	
	fields : '[data-projectsAutocount=field]',

	flag : true,

	init : function () 
	{

		if($(this.fields).length == 0)
		{
            return false;
        }
	
		if($.cj.projectsAutocount.flag)
		{
			var w_top = $(window).scrollTop() + $(window).height();
			var e_top = $(this.triggerContainer).offset().top;

			if(w_top >= e_top) 
			{
				$(this.fields).spincrement({duration : 3000, decimalPlaces : null, thousandSeparator : ' '});
				$.cj.projectsAutocount.flag = false;
			}
		}
	}
};