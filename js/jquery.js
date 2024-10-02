// slider jQuery (home page)

$(document).ready(function () {
    console.log('JQuery is attached');

    // jQuery selectors
    var $slider = $('.carousel');
    var $sliderContainer = $('.carousel-image-container');
    var $slides = $('.carousel-image');
    var $prevButton = $('#prev');
    var $nextButton = $('#next');

    var currindex = 0;
    var slideInterval;

    function updateDimensions() {
        var slideWidth = $slider.width();
        var slidesCount = $slides.length;
        var totalWidth = slideWidth * slidesCount;

        // Set the container width and the initial margin
        $sliderContainer.css({
            width: totalWidth,
            marginLeft: -currindex * slideWidth
        });

        // Set the slide width
        $slides.css({
            width: slideWidth
        });
    }

    function moveSlider() {
        var slideWidth = $slider.width();
        var newMarginLeft = -currindex * slideWidth;

        $sliderContainer.css({
            marginLeft: newMarginLeft
        });
    }

    function moveToNextSlide() {
        currindex = (currindex + 1) % $slides.length;
        moveSlider();
    }

    function moveToPrevSlide() {
        currindex = (currindex - 1 + $slides.length) % $slides.length;
        moveSlider();
    }

    function startSlider() {
        slideInterval = setInterval(() => {
            moveToNextSlide();
        }, 2000);
    }

    function resetSlider() {
        clearInterval(slideInterval);
        startSlider();
    }

    // Initial setup
    updateDimensions();
    startSlider();

    // Recalculate dimensions on window resize
    $(window).resize(function () {
        updateDimensions();
    });

    // Button click events
    $nextButton.click(function () {
        moveToNextSlide();
        resetSlider();
    });

    $prevButton.click(function () {
        moveToPrevSlide();
        resetSlider();
    });
});






