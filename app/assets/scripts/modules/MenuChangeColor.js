export default class MenuChangeColor {
    constructor() {
        this.menuItems = document.querySelectorAll('.change-color');
        this.pageSections = document.querySelectorAll('.page-section');
        this.observer();
        this.events();
    }

    events() {
        
    }

    observer() {

        const options = {
            root: null,
            threshold:1,
        }

        let observer = new IntersectionObserver((entries, observer) => {
           entries.forEach(entry => {
               if (entry.isIntersecting && entry.target.dataset.bg=="gray") {
                this.menuItems.forEach(item => item.classList.add('white'))
               } else {
                this.menuItems.forEach(item => item.classList.remove('white'))
               }
           })
            
        }, options)

        this.pageSections.forEach(el => {
            observer.observe(el);
        })
    }
}