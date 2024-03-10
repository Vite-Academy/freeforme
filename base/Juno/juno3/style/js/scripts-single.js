$(document).ready(function() {
    'use strict';
	/*-----------------------------------------------------------------------------------*/
    /*	SWIPER
    /*-----------------------------------------------------------------------------------*/
    $('.swiper-container.image-carousel').each(function() {
        $(this).swiper({
            pagination: '.image-carousel-wrapper .swiper-pagination',
            nextButton: '.image-carousel-wrapper .swiper-button-next',
            prevButton: '.image-carousel-wrapper .swiper-button-prev',
            slidesPerView: "auto",
            centeredSlides: false,
            pagination: false,
            spaceBetween: 15,
            grabCursor: true
        });
        var $swipers = $(this);
    });
});