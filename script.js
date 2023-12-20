function menuShow() {
    const menuMobile = document.querySelector('.responsive-nav-list');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open');
    }
}