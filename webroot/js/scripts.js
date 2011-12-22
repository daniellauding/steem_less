$(document).includeReady(function () {

    /* TOP NAV */

    var horizontal_ul = $('.nav, .breadcrumb, .tabs');
    var vertical_ul = $('.vertical-nav');
	

    if (horizontal_ul.length) {
        horizontal_ul.children('li').hover(function() {
            $(this).children('ul').show();
        }, function() {
            $(this).children('ul').hide();
        }).children('ul').hide();
    }

    if (vertical_ul.length) {
        vertical_ul.find('li a').toggle(function() {
			$(this).parent().addClass('expanded');
            $(this).parent().children('ul').show();
		return false;
        }, function() {
			$(this).parent().removeClass('expanded');
            $(this).parent().children('ul').hide();
        }).parent().children('ul').hide();
    }

	
    $(".client-nav [rel=twipsy]").twipsy({
      live: true,
      delayOut: 0,
	  placement: 'below'
    });

	$("table.tablesorter").tablesorter({ sortList: [[1,0]] });

});