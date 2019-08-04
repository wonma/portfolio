import $ from 'jquery';

class DoubleSlider {
    constructor() {
        this.sliderImage = $(".slider-image");
        this.sliderContent = $(".slider-content");
        this.status = $('.pagingInfo');
        this.initDoubleSlider();
    }

    initDoubleSlider() {
        this.sliderImage.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.slider-content',
            // fade: true
            // autoplaySpeed: 2000,
            // autoplay: true
        });

        var theStatus = this.status;
        this.sliderContent.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            theStatus.text(i + '/' + slick.slideCount);
        });

        this.sliderContent.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-image',
            arrows: true,
            fade: true,
            prevArrow: '<button class="slick-arrow slick-prev"><span class="icon__arrow icon__arrow--left"></span></button>',
            nextArrow: '<button class="slick-arrow slick-next"><span class="icon__arrow icon__arrow--right"></span></button>',
            focusOnSelect: true
        })
    }
}

export default DoubleSlider;