$(document).ready(function()
    {
        $(".article").mouseenter(function()
        {
            $("#uc-magazine-description").text($(this).attr("data-description"));
			 
        })
		
		.mouseleave(function()

        {
           $("#uc-magazine-description").text(function() {
       return $(this).attr("title");  
        });
    });
 });
 
  