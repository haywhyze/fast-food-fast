const menu = document.querySelector('.header__menu');
const icon = document.querySelector('.header__menu-icon');

icon.addEventListener('click', () => {
    if (menu.classList.contains('u-show')) 
        menu.classList.remove('u-show'); 
    else 
        menu.classList.add('u-show');
})