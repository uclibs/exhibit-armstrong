$(document).ready(function() {

    // var frames = ;

    /*$("#sequence-nav-button .sequence-prev, #sequence-nav-button .sequence-next").css("display", "block");*/
    var options4 = {
        autoPlay: true,
        nextButton: false,
        prevButton: false,
         moveActiveFrameToTop: true,
        navigationSkip: false
    };

    var sequence4 = $("#sequence-collection").sequence(options4).data("sequence");

    sequence4.beforeNextFrameAnimatesIn = function() {                   
        if(!this.cycle) {
            showNavButtons(sequence4.nextFrameID);   
        }
        
        $(".sequence-nav-caption").fadeOut(500, function() {
            changeText(sequence4.nextFrameID);
        });
    };

    sequence4.afterLoaded = function() {
        changeText(sequence4.settings.startingFrameID);
    }

    showNavButtons(sequence4.nextFrameID);

    function changeText(frameID) {
        $(".sequence-nav-caption").text(
            $("#sequence-collection li:nth-child("+(frameID)+") img").attr("data-sequence-caption")
        ).fadeIn(500);
    }

    function showNavButtons(id) {
        switch(id) {
            case 1:
            $(".collection-prev").fadeOut(500);
            $(".collection-next").fadeIn(500);
            break;
            
            /*case undefined:
            $(".collection-prev").fadeOut(500);
            break;*/
            
            case sequence4.numberOfFrames:
            $(".collection-next").fadeOut(500);
            $(".collection-prev").fadeIn(500);
            break;
            
            default:
            $(".collection-next, .collection-prev").fadeIn(500);
            break;
        }
    }
    
    $("#sequence-collection").on("click", "li img", function() {
        var frameID = $(this).parent("li").index() + 1;
        sequence4.nextFrameID = frameID;
        sequence4.goTo(frameID);
    });
	
});

