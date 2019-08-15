class QuickNav {
    constructor() {
        this.quickNavBtn = document.querySelector('.quickNavBtn');
        this.overlayQuickNav = document.querySelector('.overlayQuickNav');
        this.closeIconQuickNav = document.querySelector('.closeIconQuickNav');
        this.events();
        console.log('constructor read');
    }

    events() {
        this.quickNavBtn.addEventListener('click', this.openQuickNav.bind(this));
        this.closeIconQuickNav.addEventListener('click', this.closeQuickNav.bind(this));
        console.log('click event registered');
    }

    openQuickNav() {
        this.overlayQuickNav.classList.add('quick-nav--is-open');
        console.log(this.overlayQuickNav);
    }

    closeQuickNav() {
        this.overlayQuickNav.classList.remove('quick-nav--is-open');
    }
}

export default QuickNav;