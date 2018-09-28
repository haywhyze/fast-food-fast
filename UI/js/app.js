const menu = document.querySelector('.header__menu');
const icon = document.querySelector('.header__menu-icon');
let detailsBtn = document.querySelectorAll('.details-toggle');
let adminBtn = document.querySelectorAll('.btn--small');
const close = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');


icon.addEventListener('click', () => {
    menu.classList.toggle('u-show');
})



detailsBtn = Array.from(detailsBtn);
detailsBtn.map((e) => {
    e.addEventListener('click', () => {
        let details = e.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild;
        console.log(details)
        details.classList.toggle('u-show');
    })
})

adminBtn = Array.from(adminBtn);
adminBtn.map((e) => {
    e.addEventListener('click', () => {
        let adminConfirm = document.querySelector('.confirm').parentNode;
        adminConfirm.classList.toggle('u-show');
    })
})

close.addEventListener('click', () => {
    modal.classList.remove('u-show');
})