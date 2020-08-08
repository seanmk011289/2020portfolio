import gsap from 'gsap';
import  { CSSRulePlugin, TimelineMax } from "gsap/all";

gsap.registerPlugin(CSSRulePlugin);

export default class HeroReveal {

    constructor() {

        this.heroText = document.querySelector(".hero-section__title");
        this.heroParagraph = document.querySelector(".hero-section__subtitle");
        this.heroButton = document.querySelector(".hero-section__btn");
        this.heroWaves = document.querySelector(".hero-section__bottom-svg");
        this.heroWaves2 = document.querySelector(".hero-section__bottom-svg-2");
        this.heroTopSVGtop = document.querySelector('.hero-section__top-svg-top');
        this.heroTopSVGmid = document.querySelector('.hero-section__top-svg-middle');
        this.heroTopSVGbot = document.querySelector('.hero-section__top-svg-bottom');

        this.heroReveal()

    }

    heroReveal() {

        //Hero Text reveal
        var ruleOne = CSSRulePlugin.getRule(`.hero-section__title-gray::after`);
        var ruleTwo = CSSRulePlugin.getRule(`.hero-section__title-green::after`);

        let heroTL = new TimelineMax({

        })

        //Hero top svg
        heroTL.fromTo(this.heroTopSVGtop,{y:-500, opacity:0}, {duration: 0.5, y:0, opacity:1, ease:"bounce", transformOrigin:"center"})
        heroTL.fromTo(this.heroTopSVGmid, {y:-500, opacity:0}, {duration: 0.5, y:0, opacity:1, ease:"bounce"}, '-=.25')
        heroTL.fromTo(this.heroTopSVGbot, {y:-500, opacity:0}, {duration: 0.5, y:0, opacity:1, ease:"bounce"}, '-=.25')
    
        heroTL.from(this.heroText, {y: 100, duration: 1, ease: 'power3.out'}, '-=.25')
        heroTL.to(ruleOne, {cssRule: {scaleY: 0}, duration: 1.5, ease: 'power3.out'}, '-=1');
        heroTL.to(ruleTwo, {cssRule: {scaleY: 0}, duration: 1.5, ease: 'power3.out'}, '-=1.5');

        // Hero Paragraph, button, and waves
        heroTL.from(this.heroParagraph, {opacity: 0, y:50, duration:0.75, ease: 'ease-out'}, '-=.5')
        heroTL.from(this.heroButton, {opacity: 0, duration: 1, y: 50, ease: 'power3.out'})
        heroTL.from(this.heroWaves, {opacity: 0, y:150, duration: 1, ease: 'power3.out'}, '-=1')
        heroTL.from(this.heroWaves2, {opacity: 0, y:150, duration: 1, ease: 'power3.out'}, '-=0.75')
        
    }
} 

