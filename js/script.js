function deviceNav(){
    $('.sendwich').click(function() {
        $(this).find('.sendwich-btn').toggleClass('active');
        $(this).siblings('ul').toggleClass('active');
    } );
};



$(document).ready(function(){
    deviceNav();

    $('.slider').slick({
        dots: false,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    });
});
