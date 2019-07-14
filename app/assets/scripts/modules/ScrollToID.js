import $ from 'jquery';

class ScrollToID {
    constructor() {
        this.elementSharped = $('a[href*="#"]');
        this.scrollToElement();
    }

    scrollToElement() {
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault()

            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top,
                },
                500,
                'linear'
            )
        })
    }
}

export default ScrollToID;