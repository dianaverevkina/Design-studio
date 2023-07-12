//Открыть/закрыть меню бургер
let icon = document.querySelectorAll('.icon');
let menu__list = document.querySelector('.menu__list');
let back = document.querySelector('body');

icon.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      menu__list.classList.toggle('active');
      back.classList.toggle('lock');
   }
});

//Подключение слайдера для блока Reviews
let swiper = new Swiper('.slider', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   keybord: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },

   loop: true,
   speed: 700,

   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 200,
         centeredSlides: true,
      },
      690: {
         slidesPerView: 2,
           spaceBetween: 30,
      },
   },
})