$(document).includeReady(function () {

	/* Horizontal Nav */

    var horizontal_ul = $('.nav, .breadcrumb, .tabs, .category-menu');

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
	
    $("[rel=twipsy]").twipsy({
      live: true,
      delayOut: 0,
	  placement: 'above'
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

	$('ul.vertical-nav li:contains(" + page_header + ")').addClass("active");   
	
	$('.product-type li a, .production-type li a, .pricing-options li a, .quantity-options li a').toggle(function(){
			$('.product-type li, .production-type li, .pricing-options li, .quantity-options li').removeClass('active');
			$(this).parent().addClass('active');
		return false;
		}, function() {
			$(this).parent().removeClass('active');
     });

	/* Add a row beneath */
	
	$('.add-row').click(function(){
		$(this).parent().closest('tr').clone().appendTo('table');
		return false;
	});
	
	$('.remove-row').click(function(){
		$(this).parent().closest('tr').remove();
		return false;
	});
	
	/* SLIDER */
	
	$('#slideshow').after('<ul class="slideshow-thumbs">').cycle({ 
	    fx:     'turnLeft', 
	    speed:  'fast', 
	    timeout: 0, 
	    pager:  '.slideshow-thumbs', 

	    // callback fn that creates a thumbnail to use as pager anchor 
	    pagerAnchorBuilder: function(idx, slide) { 
	        return '<li><a href="#"><img src="' + slide.src + '" width="50" height="50" /></a></li>'; 
	    } 
	});
	
	/* Rollover btn */
		
	$('.btn-flip').hover(function() {
		$('.btn-flip .price').hide();
		$('.btn-flip .buy').show();
	});
	
	$('.btn-flip .buy').hover(function() {
		$('.btn-flip .buy').hide();
		$('.btn-flip .price').show();
	});
	
	/* Hide and show of the options */
	$('.btn-flip').live('mouseenter mouseleave', function (e) {

		if (e.type == 'mouseenter') {
		  
 		   $(this).find('.price').hide();
		   $(this).find('.buy').show();

		   
		} else {	
		   $(this).find('.buy').show();
		   $(this).find('.price').hide();
		   
		}
	});
	

	

});