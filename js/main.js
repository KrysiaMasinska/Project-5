const burgerBtn = document.querySelector('button');
const barsMenu = document.querySelector('.fa-bars');
const burgerClose = document.querySelector('.fa-times');
const nav = document.querySelector('nav');


burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');

    if (burgerBtn.classList.contains('active')) {
        barsMenu.classList.add('hide');
        burgerClose.classList.remove('hide');
    } else {
        barsMenu.classList.remove('hide');
        burgerClose.classList.add('hide');
    }

});