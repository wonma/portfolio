import $ from 'jquery';

class DoubleSlider {
    constructor() {
        this.sliderImage = $(".slider-image");
        this.sliderContent = $(".slider-content");
        this.initDoubleSlider();
    }

    initDoubleSlider() {
        this.sliderImage.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.slider-content'
        });

        this.sliderContent.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-image',
            dots: true,
            arrows: true,
            fade: true,
            focusOnSelect: true
        })
    }
}

export default DoubleSlider;