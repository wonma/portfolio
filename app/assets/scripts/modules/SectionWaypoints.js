import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints.min';

class SectionWaypoints {
    constructor() {
        this.pageSections = $('.myself-section');
        this.secondaryNav = $('.secondary-nav');
        this.sectionLinks = $('.secondary-nav a');
        this.header = $('.site-header--dynamic');
        // this.headerTriggerPoint = $('.hero__heading--sub');
        this.colorTheLink();
        this.headerControl();
    }

    headerControl() {
        var that = this;
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos && currentScrollPos > 400) { /* 이전스크롤위치가 현재스크롤위치보다 아래이면 */
                that.header[0].style.top = "0px"; /* 나오기 */
                that.secondaryNav[0].style.top ="120px";
            } else  {
                that.header[0].style.top = "-120px"; /* 숨기 */
                that.secondaryNav[0].style.top = "0px";

            }
            prevScrollpos = currentScrollPos;
        }

        // new Waypoint({
        //     element: that.secondaryNav,
        //     handler: function(direction){
        //         if(direction =="up") {
        //             $(that.header).addClass("hide-dynamic-header");
        //         }
        //          else {
        //             $(that.header).removeClass("hide-dynamic-header");
        //         }
        //     },
        //     offset: "15%"

        // })    
    }

    colorTheLink() {
        var theObject = this;
        this.pageSections.each(function(){
            var eachSection = this;

            new Waypoint({
                element: eachSection,
                handler: function(direction){
                    if (direction == "down") {
                        var matchingLinkInfo = eachSection.getAttribute("data-matching-link");
                        theObject.sectionLinks.removeClass("is-current-link");
                        $(matchingLinkInfo).addClass("is-current-link");
                    }
                },
                offset: "23%"
            })

            new Waypoint({
                element: eachSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var matchingLinkInfo = eachSection.getAttribute("data-matching-link");
                        theObject.sectionLinks.removeClass("is-current-link");
                        $(matchingLinkInfo).addClass("is-current-link");
                    }
                },
                offset: "-80%"
            })

        })
    }
}


export default SectionWaypoints;