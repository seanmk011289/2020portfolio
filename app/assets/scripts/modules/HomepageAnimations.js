

export default class HomepageAnimations {

    constructor() {
        //DOM Selectors

        ////Hero Elements
        this.heroSection = document.querySelector('.hero-section');
        this.heroCurves = document.querySelector('.hero-section__bottom-svg');
        this.heroTopSVG = document.querySelector('.hero-section__top-svg');
        this.heroButton = document.querySelector('.hero-section__btn');
        this.heroButton2 = document.querySelector('.hero-section__btn2');
        this.heroTopSVGtop = document.querySelector('.hero-section__top-svg-top');
        this.heroTopSVGmid = document.querySelector('.hero-section__top-svg-middle');
        this.heroTopSVGbot = document.querySelector('.hero-section__top-svg-bottom');

        this.scrollCurvesTrigger = () => this.scrollCurves();

        this.heroSectionObserver();

        this.events();

    }


    ////EVENT LISTENERS

    events() {

        this.heroButton.addEventListener('mouseover', () => {
            this.addShadow();
            this.addHeroScale();
        })
        this.heroButton2.addEventListener('mouseover', () => {
            this.addShadow2();
            this.addHeroScale();
        })


        this.heroButton.addEventListener('mouseout', () => {
            this.removeShadow();
            this.removeHeroScale();
        })

        this.heroButton2.addEventListener('mouseout', () => {
            this.removeShadow2();
            this.removeHeroScale();
        })

    }

    ////FUNCTIONS

    heroSectionObserver() {
        let heroObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    window.addEventListener("scroll", this.scrollCurvesTrigger);
                } else {
                    window.removeEventListener("scroll", this.scrollCurvesTrigger);
                }
            })
        })

        heroObserver.observe(this.heroSection);
    }

    addShadow() {
        this.heroButton.classList.add('btn--hover-lg-shadow');
    }
    addShadow2() {
        this.heroButton2.classList.add('btn--hover-lg-shadow');
    }

    removeShadow() {
        this.heroButton.classList.remove('btn--hover-lg-shadow');
    }
    removeShadow2() {
        this.heroButton2.classList.remove('btn--hover-lg-shadow');
    }

    addHeroScale() {
        this.heroTopSVGtop.classList.add('hero-section__top-svg-top-animate');
        this.heroTopSVGmid.classList.add('hero-section__top-svg-middle-animate');
        this.heroTopSVGbot.classList.add('hero-section__top-svg-bottom-animate');
    }

    removeHeroScale() {
        this.heroTopSVGtop.classList.remove('hero-section__top-svg-top-animate');
        this.heroTopSVGmid.classList.remove('hero-section__top-svg-middle-animate');
        this.heroTopSVGbot.classList.remove('hero-section__top-svg-bottom-animate');
    }


    scrollCurves(e) {
        let move = window.pageYOffset;
        this.heroCurves.style.transform = `translatex(-${move}px)`;
    }


}