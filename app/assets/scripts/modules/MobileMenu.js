class MobileMenu {
    constructor() {
        this.hamburgerIcon = document.querySelector('.hamburger');
        this.overlayMenu = document.querySelector('.overlay-nav');
        this.events();
    }

    events() {
        this.hamburgerIcon.addEventListener('click', this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        console.log('clicked')
        this.overlayMenu.classList.toggle('overlay-nav--is-open');
        this.hamburgerIcon.classList.toggle('hamburger--is-close-icon');
    }
}

export default MobileMenu;