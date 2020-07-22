class HeroAnimations {
    constructor(){

        //DOM Selectors
        this.heroCurves = document.querySelector('.hero-section__bottom-svg');
        this.heroTopSVG = document.querySelector('.hero-section__top-svg');
        this.heroButton = document.querySelector('.hero-section__btn');
        this.heroTopSVGtop = document.querySelector('#top');
        this.heroTopSVGmid = document.querySelector('#middle');
        this.heroTopSVGbot = document.querySelector('#bottom');

        //Make sure to call the events method
        this.events()

    }

        //Event Listeners
        events() {

            this.heroButton.addEventListener('mouseover', () => {
                this.addShadow();
                this.addHeroScale();
            })


            this.heroButton.addEventListener('mouseout', () => {
                this.removeShadow();
                this.removeHeroScale();
            })

        }

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
        
}

export default HeroAnimations;