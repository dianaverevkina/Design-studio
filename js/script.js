
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