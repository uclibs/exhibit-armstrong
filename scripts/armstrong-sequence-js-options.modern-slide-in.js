$(document).ready(function(){	
    var options0 = {
        nextButton: false,
        prevButton: false,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: false,
        autoPlayDelay: 4000,
        preloader: true,
        preloadTheseFrames: [1],
        /*preloadTheseImages: [
            "images-armstrong/thumb-1.jpg",
            "images-armstrong/thumb-2.jpg",
            "images-armstrong/thumb-3.jpg"
        ]*/
    };
	
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: false,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true,
        preloadTheseFrames: [1],
        /*preloadTheseImages: [
            "images-armstrong/thumb-1.jpg",
            "images-armstrong/thumb-2.jpg",
            "images-armstrong/thumb-3.jpg"
        ]*/
    };

    
    var mySequence = $("#sequence-uc-gallery").sequence(options).data("sequence");
    var sequence0 = $("#sequence-timeline").sequence(options0).data("sequence");
	
});
