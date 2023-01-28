$(function () {
  $(".bike-slider, .slider__items").slick({
    arrows: false, // убирает кнопки вперёд назад
    dots: true, // сколько слайдев столько и кнопок
    fade: true, // переход наложения
    autoplay: true, // автомотическое перелистывание
    autoplaySpeed: 2000, // скорость автомотического перелистывания
  })
})
