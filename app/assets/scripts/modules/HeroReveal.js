import gsap from 'gsap';
import  { CSSRulePlugin, TimelineMax } from "gsap/all";
gsap.registerPlugin(CSSRulePlugin);

export default class HeroReveal {
    constructor() {
        
        this.heroText = document.querySelector(".hero-section__title");
        this.heroParagraph = document.querySelector(".hero-section__subtitle");
        this.heroButton = document.querySelector(".hero-section__btn");
        this.heroWaves = document.querySelector(".hero-section__bottom-svg");
        this.heroTopSVGtop = document.querySelector('.hero-section__top-svg-top');
        this.heroTopSVGmid = document.querySelector('.hero-section__top-svg-middle');
        this.heroTopSVGbot = document.querySelector('.hero-section__top-svg-bottom');

        this.heroReveal()

    }

    heroReveal() {

        //Hero Text reveal
        var ruleOne = CSSRulePlugin.getRule(`.hero-section__title-gray::after`);
        var ruleTwo = CSSRulePlugin.getRule(`.hero-section__title-green::after`);
    
        gsap.from(this.heroText, {y: 150, duration:1, ease: 'power3.out', delay:0.5})
        gsap.to(ruleOne, {cssRule: {scaleY: 0}, duration: 1.5, ease: 'power3.out', delay:0.5});
        gsap.to(ruleTwo, {cssRule: {scaleY: 0}, duration: 1.5, ease: 'power3.out', delay:1.75});
    
    
        // Hero Paragraph, button, and waves
        gsap.from(this.heroParagraph, {opacity: 0, y: 50, duration:0.75, ease: 'ease-out', delay:2.5})
        gsap.from(this.heroButton, {opacity: 0, duration:0.75, ease: 'ease-out', delay:2.5})
        gsap.from(this.heroWaves, {opacity: 0, y:150, duration:0.75, ease: 'ease-out', delay: 2.5})
    
        //Hero top svg
        gsap.from(this.heroTopSVGtop, {duration: 0.5, y: -500, ease:"bounce", delay: 1, transformOrigin:"center"})
        gsap.from(this.heroTopSVGmid, {duration: 0.5, y: -500, ease:"bounce", delay: 1.2})
        gsap.from(this.heroTopSVGbot, {duration: 0.5, y: -500, ease:"bounce", delay: 1.4})
        
    }
} 

