(function($) {
  $(document).ready(function() {
    //Begin Plugin Initalization

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
$('.pretty-embed').prettyEmbed({
    videoID: 'f8-UKqGZ_hs',
    previewSize: 'hd',              // use either this option...
    customPreviewImage: '',         // ...or this option

    // Embed controls
    showInfo: false,
    showControls: true,
    loop: false,

    colorScheme: 'dark',
    showRelated: false,

    useFitVids: false
});
 /*
     * Replace all SVG images with inline SVG
     */
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    //End of Initalization
  });
})(jQuery);
