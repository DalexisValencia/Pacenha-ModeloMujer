$(document).ready(function(){
    var slider = $('.abi-slide--inspiration');
    if (slider.length) {
        function buildSlides() {
            var windowWidth = $(window).width();
                if (windowWidth > 900 && !slider.hasClass('slick-initialized')) {
                    slider
                    .on('init', () => {
                        mouseWheel(slider)
                    })
                    .slick({
                        initialSlide: 0,
                        rows: 0,
                        autoplay: false,
                        arrows: false,
                        dots: true,
                        apenndDots: $(".abi-slide--inspiration-dots"),
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        draggable: true,
                        infinite: false,
                        vertical: true,
                        speed: 1000,
                        useTransform: true,
                        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    })
                    
                }
                else if(windowWidth < 900) {
                    $('.abi-slide--inspiration').slick('unslick');
                }
        }
        function mouseWheel(slider) {
            $(window).on('wheel', { slider: slider }, mouseWheelHandler)
        }
        function mouseWheelHandler(event) {
            event.preventDefault()
            // const slider = event.data.$slider
            const delta = event.originalEvent.deltaY
            if(delta > 0) {
                slider.slick('slickNext')
            }
            else {
                slider.slick('slickPrev')
            }
        }

        $(window).resize(function(){
                buildSlides();
        });
        buildSlides();
    }
});