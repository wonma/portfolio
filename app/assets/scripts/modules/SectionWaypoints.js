import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints.min';

class SectionWaypoints {
    constructor() {
        this.pageSections = $('.myself-section');
        this.sectionLinks = $('.secondary-nav a')
        this.colorTheLink();
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