document.addEventListener("DOMContentLoaded", function() {
    const headerBurger = document.querySelector('.header__burger');
    const burger = document.querySelector('.burger');

    headerBurger.addEventListener('click', function() {
        triggerBurger(headerBurger);
    });

    function triggerBurger(element) {
        element.classList.toggle('active');
        burger.classList.toggle('active')
    }

    burger.addEventListener("click", function(e) {
        if(e.target.classList.contains('burger')) {
            triggerBurger(headerBurger);
        }
    })
})