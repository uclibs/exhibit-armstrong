$(function() {
			var pull 		= $('.pull');
				menu 		= $('.armstrong-nav ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
			
			/*MAIN NAVIGATION MENU ONLY--FIXED TO TOP*/
			/*menu fixed to top of screen on scrolling*/
			 // get initial top offset of navigation
    var floating_navigation_offset_top = $('#armstrong-nav-menu').offset().top;
             
    // define the floating navigation function
    var floating_navigation = function(){
                // current vertical position from the top
        var scroll_top = $(window).scrollTop();
         
        // if scrolled more than the navigation, change its
                // position to fixed to float to top, otherwise change
                // it back to relative
        if (scroll_top > floating_navigation_offset_top) {
            $('#armstrong-nav-menu').css({ 'position': 'fixed', 'top':0, 'z-index': 10000});
        } else {
            $('#armstrong-nav-menu').css({ 'position': 'relative'});
        }  
    };
     
    // run function on load
    floating_navigation();
     
    // run function every time you scroll
    $(window).scroll(function() {
         floating_navigation();
    });
		});  
	
    