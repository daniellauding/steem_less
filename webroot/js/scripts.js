$(document).includeReady(function () {

    /* TOP NAV */

    var ul = $('.nav, .breadcrumb, .tabs');

    if (ul.length) {
        ul.children('li').hover(function() {
            $(this).children('ul').show();
        }, function() {
            $(this).children('ul').hide();
        }).children('ul').hide();
    }

    $(".client-nav [rel=twipsy]").twipsy({
      live: true,
      delayOut: 0,
	  placement: 'below'
    });

});