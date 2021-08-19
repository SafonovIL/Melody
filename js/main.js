$(document).ready(function () {
 var currentFloor = 2;
 var floorPath = $(".home-image path");
 var counterUp = $('.counter-up'); /* Кнопка увеличения этажа */
 var counterDown = $('.counter-down'); /* Кнопка уменьшения этажа */

// функция при наведении мышью на этаж
  floorPath.on("mouseover", function () { // каждый отдельный этаж в SVG (переменная, где хранится текущий этаж)
  floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
  currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
  $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
 });

 counterUp.on ('click', function(){ // отслеживаем клик по кнопке вверх
   if (currentFloor < 18) { // проверяем значение этажа (чтобы не было больше 18)
   currentFloor++; // прибавляем один этаж
   usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
   $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
   $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечиваем текущий этаж
   }
 });

 counterDown.on ('click', function(){
  if (currentFloor > 2) {
   currentFloor--;
   usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
   $(".counter").text(usCurrentFloor);
   floorPath.removeClass('current-floor');
   $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
  }
 })


});