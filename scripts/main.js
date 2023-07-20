$(function(){
    $('.project-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 300,
    infinite: true,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="image/arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow arrow-right" src="image/arrow-left.svg" alt="">',
    });
});