class QuickNav {
    constructor() {
        this.quickNavBtn = document.querySelector('.quickNavBtn');
        this.overlayQuickNav = document.querySelector('.overlayQuickNav');
        this.closeIconQuickNav = document.querySelector('.closeIconQuickNav');
        this.scrim = document.querySelector('.overlay-scrim');
        this.events();
        console.log('constructor read');
    }

    events() {
        this.quickNavBtn.addEventListener('click', this.openQuickNav.bind(this));
        this.quickNavBtn.addEventListener('click', this.openScrim.bind(this));

        this.closeIconQuickNav.addEventListener('click', this.closeQuickNav.bind(this));
        this.closeIconQuickNav.addEventListener('click', this.closeScrim.bind(this));

        console.log('click event registered');
    }

    openQuickNav() {
        this.overlayQuickNav.classList.add('quick-nav--is-open');
        console.log(this.overlayQuickNav);
    }

    openScrim() {
        this.scrim.classList.add('scrim-on');
    }

    closeQuickNav() {
        this.overlayQuickNav.classList.remove('quick-nav--is-open');
        this.scrim.classList.remove('scrim-on');
    }
}

export default QuickNav;