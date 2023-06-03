const drop = document.querySelector('#mobile-menu');
const dropitems = document.querySelector('.navbar__menu');

drop.addEventListener('click', function() {
    drop.classList.toggle('is-active');
    dropitems.classList.toggle('active');
});