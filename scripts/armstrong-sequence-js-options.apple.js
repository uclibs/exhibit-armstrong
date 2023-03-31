$(document).ready(function(){
	
    $status = $(".status");
    var options1 = {
        autoPlay: false,
        autoPlayDelay: 4000,
        pauseOnHover: false,
        hidePreloaderDelay: 500,
        nextButton: true,
        prevButton: true,
		pagination: false, 
        pauseButton: false,
        preloader: true,
        hidePreloaderUsingCSS: false,                   
        animateStartingFrameIn: true,    
        navigationSkipThreshold: 200,
        preventDelayWhenReversingAnimations: true,
        customKeyEvents: {
            80: "pause"
        }
    };

    var sequence1 = $("#sequence-time-essays").sequence(options1).data("sequence");

    sequence1.afterNextFrameAnimatesIn = function() {
        if(sequence1.settings.autoPlay && !sequence1.hardPaused && !sequence1.isPaused) {
            $status.addClass("active").css("opacity", 1);
        }
        $("#sequence-time-essays .prev, #sequence-time-essays .next").css("cursor", "pointer").animate({"opacity": 1}, 500);
    };
    sequence1.beforeCurrentFrameAnimatesOut = function() {
        if(sequence1.settings.autoPlay && !sequence1.hardPaused) {
            $status.css({"opacity": 0}, 500).removeClass("active");
        }
        $("#sequence-time-essays .prev, #sequence-time-essays .next").css("cursor", "auto").animate({"opacity": .7}, 500);
    };
	
	
});

