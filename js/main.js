window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.arrow'
        },
        breakpoints: {
            541: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });

    var menuButton = document.querySelector('.menu-button');
    var menu = document.querySelector('.header');

    function menuButtonHandler() {
        console.log(2);
        menu.classList.toggle('active');
        menuButton.classList.toggle('active');
    };

    menuButton.addEventListener('click', menuButtonHandler);

};