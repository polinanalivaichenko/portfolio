$(function(){
    $('.project-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 300,
    infinite: true,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
    });
});