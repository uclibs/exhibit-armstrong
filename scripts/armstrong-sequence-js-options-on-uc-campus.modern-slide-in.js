$(document).ready(function(){	
    var options1 = {
        nextButton: false,
        prevButton: false,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 4000,
        preloader: true,
        preloadTheseFrames: [1],
        /*preloadTheseImages: [
            "images-armstrong/thumb-1.jpg",
            "images-armstrong/thumb-2.jpg",
            "images-armstrong/thumb-3.jpg"
        ]*/
    };

    var Sequence1 = $("#sequence-on-uc-campus").sequence(options1).data("sequence");
	
});
