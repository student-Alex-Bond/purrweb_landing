window.addEventListener('DOMContentLoaded', () => {
    const cookie = document.querySelector('.cookie');
    const button = cookie.querySelector('.cookie__btn');

    const animateImage = document.querySelector('.our-mission__img')

    //view cookie
    const timerId = setTimeout(() => {
        cookie.style.transform = `none`;

    }, 5000);
    button.addEventListener('click', () => {
        clearTimeout(timerId)
        cookie.style.transform = `translateY(18rem)`;
    });

    //animte block out-mission

    animateImage.style.transform = `translateX(0rem) rotate(90deg)`;
});