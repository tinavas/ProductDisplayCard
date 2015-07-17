$(".component--container.carousel").owlCarousel({
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2]
});

$("#owl-example").owlCarousel({
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3],

    autoPlay : true,
    stopOnHover : true,

    lazyLoad : true,
    lazyFollow : true,
    lazyEffect : "fade",

    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    navigation : false,
    navigationText : ["prev", "next"],
    rewindNav : true,
    scrollPerPage : false,

    pagination : false,
    paginationNumbers : false,
});