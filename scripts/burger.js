const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mainNavList');

    burger.addEventListener('click', () => {
        nav.classList.toggle('.mainNavList-active');
    });
}

navSlide();