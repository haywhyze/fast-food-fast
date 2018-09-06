(function() {
    var button = document.getElementById('toggle-menu');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var menu = document.getElementById('main-menu');
        menu.classList.toggle('is-open');
    });
})();

const open = document.querySelectorAll('.open');
const modal = document.querySelector('.modal');

open.forEach(element => {
    element.addEventListener('click', () => {
        modal.classList.add('show');
    })
});