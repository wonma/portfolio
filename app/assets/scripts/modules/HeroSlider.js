import $ from 'jquery';

class HeroSlider {
    constructor() {
        this.els = $(".hero-slider");
        this.initSlider();
    }

    initSlider() {
        this.els.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 1200,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            dots: false
        });
    }
}

export default HeroSlider;