$(document).includeReady(function () {

	/* Horizontal Nav */

    var horizontal_ul = $('.nav, .breadcrumb, .tabs');

    if (horizontal_ul.length) {
        horizontal_ul.children('li').hover(function() {
            $(this).children('ul').show();
        }, function() {
            $(this).children('ul').hide();
        }).children('ul').hide();
    }

	/* Vertical Nav */
	
    var vertical_ul = $('.vertical-nav');

    if (vertical_ul.length) {
        vertical_ul.find('li.sub a.toggle-sub').toggle(function() {
			$(this).parent().addClass('expanded');
            $(this).parent().children('ul').show();
		return false;
        }, function() {
			$(this).parent().removeClass('expanded');
            $(this).parent().children('ul').hide();
        }).parent().children('ul').hide();
    }

	/* Twipsy */
	
    $(".client-nav [rel=twipsy]").twipsy({
      live: true,
      delayOut: 0,
	  placement: 'below'
    });

	/* TWIPSY POP */
	
	$(".edit")
      .twipsy({
        html: true,
        trigger: focus,
        title: function(){
          return $(".twipsy-pop").html();
        }
      });
		
		
	$(".edit").toggle(function(){
		$(this).twipsy('show');
		$("tablesorter").twipsy('hide');
	}, function(){
		$(this).twipsy('hide');
	});
	

	/* Tablesort */

	$("table.tablesorter").tablesorter({ sortList: [[1,0]] });
	
	/* FIND CURRENT PAGE AND HIGHLIGHT IT (from page_header) */
	
	var page_header = $('div.page-header > h1').clone().children().remove().end().text().trim()

	$('ul.vertical-nav li:contains(' + page_header + ')').addClass("active");   
	
	$('.product-type li a, .production-type li a, .pricing-options li a, .quantity-options li a').toggle(function(){
			$('.product-type li, .production-type li, .pricing-options li, .quantity-options li').removeClass('active');
			$(this).parent().addClass('active');
		return false;
		}, function() {
			$(this).parent().removeClass('active');
        })

});