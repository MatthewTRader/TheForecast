let scrollPosition = window.scrollY;
let headerMain = document.getElementsByClassName('header');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 200) {
        headerMain[0].classList.add('scroll');
    } else {
        headerMain[0].classList.remove('scroll');
    }

});

