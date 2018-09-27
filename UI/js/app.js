const menu = document.querySelector('.header__menu');
const icon = document.querySelector('.header__menu-icon');
let detailsBtn = document.querySelectorAll('.details-toggle');



icon.addEventListener('click', () => {
    menu.classList.toggle('u-show');
})


detailsBtn = Array.from(detailsBtn);
detailsBtn.map((e) => {
    e.addEventListener('click', () => {
        let details = e.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild;
        // console.log(details)
        details.classList.toggle('u-show');
    })
})
