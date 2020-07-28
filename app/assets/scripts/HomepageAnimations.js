
import gsap from 'gsap'

export default class HomepageAnimations {

    constructor() {
        //DOM Selectors

        ////Hero Elements
        this.heroCurves = document.querySelector('.hero-section__bottom-svg');
        this.heroTopSVG = document.querySelector('.hero-section__top-svg');
        this.heroButton = document.querySelector('.hero-section__btn');
        this.heroTopSVGtop = document.querySelector('.hero-section__top-svg-top');
        this.heroTopSVGmid = document.querySelector('.hero-section__top-svg-middle');
        this.heroTopSVGbot = document.querySelector('.hero-section__top-svg-bottom');

        this.gsapAnimationHero();

        this.events();

    }


    ////EVENT LISTENERS

    events() {

        this.heroButton.addEventListener('mouseover', () => {
            this.addShadow();
            this.addHeroScale();
            this.addHeroTextShadow();
        })


        this.heroButton.addEventListener('mouseout', () => {
            this.removeShadow();
            this.removeHeroScale();
            this.removeHeroTextShadow()
        })

        window.addEventListener("scroll", () => {
            this.scrollCurves();
        })

    }

    ////FUNCTIONS

    addShadow() {
        this.heroButton.classList.add('btn--hover-lg-shadow');
    }

    removeShadow() {
        this.heroButton.classList.remove('btn--hover-lg-shadow');
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
    
    gsapAnimationHero() {

        gsap.from(this.heroTopSVGtop, {duration: 0.5, y: -500, ease:"bounce", delay: 1, transformOrigin:"center"})
        gsap.from(this.heroTopSVGmid, {duration: 0.5, y: -500, ease:"bounce", delay: 1.2})
        gsap.from(this.heroTopSVGbot, {duration: 0.5, y: -500, ease:"bounce", delay: 1.4})
       

    }


}