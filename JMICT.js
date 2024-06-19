const drop = document.querySelector('#mobile-menu');
const dropitems = document.querySelector('.menu');

drop.addEventListener('click', function() {
    drop.classList.toggle('is-active');
    dropitems.classList.toggle('active');
});