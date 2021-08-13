$(function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close'),
        link = document.querySelectorAll('.menu__link');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active')
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active')
    });

    link.forEach(el => {
        el.addEventListener('click', () => {
            menu.classList.remove('active')
        })

    });

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    };

});

