class MobileMenu {
    constructor() {
        this.hamburgerIcon = document.querySelectorAll('.hamburger');
        this.overlayMenu = document.querySelector('.overlay-nav');
        this.closeIcon = document.querySelector('.icon__close');
        this.events();
    }

    events() {
        this.hamburgerIcon[0].addEventListener('click', this.openMenu.bind(this));
        this.hamburgerIcon[1].addEventListener('click', this.openMenu2.bind(this));
        this.closeIcon.addEventListener('click', this.closeMenu.bind(this));
    }

    openMenu() {
        this.overlayMenu.classList.add('overlay-nav--is-open'); 
        this.closeIcon.classList.add('icon__close--is-on');
    }

    openMenu2() {
        this.overlayMenu.classList.add('overlay-nav--is-open');
        this.closeIcon.classList.add('icon__close--is-on-at-dynamic');
    }

    closeMenu() {
        this.overlayMenu.classList.remove('overlay-nav--is-open');
        this.hamburgerIcon[0].classList.remove('hamburger--is-close-icon');
        this.hamburgerIcon[1].classList.remove('hamburger--is-close-icon');
        this.closeIcon.classList.remove('icon__close--is-on');
        this.closeIcon.classList.remove('icon__close--is-on-at-dynamic');
    }
}

export default MobileMenu;