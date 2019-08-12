/* ---------------------------------------------------------- */
/*  PAGE ANIMATED TOP LOADING BARS
/* ---------------------------------------------------------- */


import $ from 'jquery';

class PageLoader {
    constructor() {
        this.initinatePageLoader();
    }

    initinatePageLoader() {

        window.addEventListener('load', function () {
            setTimeout(function () {
                $('#black-home-overlay').addClass('fadeOut');
            }, 1000);
            setTimeout(function () {
                $('#black-home-overlay').remove();
            }, 5000);

        });

    }
}

export default PageLoader;

// var show_loading_bar = function (colour) {

//     if (!$('div#overlay-bar').hasClass('visible')) {

//         //console.log('Show loading loading bar: '+colour);

//         $('div#overlay-bar').addClass('visible ' + colour + ' animate');

//         setTimeout(function () {

//             $('div#overlay-bar').removeClass('visible ' + colour + ' animate');

//         }, 1000);
//     }
// }

