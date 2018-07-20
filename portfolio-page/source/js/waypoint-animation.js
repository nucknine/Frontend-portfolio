var animateCss = () => {
    var checkDistance = (scrollTop, elem) => {
        let offset = elem.offsetTop,
            windowMargin = Math.ceil(window.innerHeight / 3),
            topBorder = offset - scrollTop - windowMargin,
            bottomEdge = elem.offsetHeight + offset,
            bottomBorder = scrollTop + windowMargin - bottomEdge;

        console.log(topBorder, bottomBorder);
        // console.log(offset, elem.offsetHeight);

    }

    return {
        init: function() {
            window.addEventListener('scroll', () => {
                var scrollTop = window.scrollTop;
                var elem = document.querySelector('.animate');

                checkDistance(scrollTop, elem);
            })
        }
    }
};

export function waypoint () {
    var way = new animateCss();

    way.init();
}