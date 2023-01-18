
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

   // slidesPerView: 1,

   watchOverflow: true,

   spaceBetween: 70,

   loop: true,

   loopedSlides: 4,

   speed: 700,

   breakpoints: {
      320: {
         slidesPerView: 1,
         centeredSlides: true,
      },
      940: {
         slidesPerView: 2,
         centeredSlides: true,
      },
   },
})