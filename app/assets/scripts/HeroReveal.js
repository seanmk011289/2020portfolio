import gsap from 'gsap';

import { CSSRulePlugin } from 'gsap/CSSRulePlugin';


export default class HeroReveal {
    constructor() {

        // DOM Elements
         this.heroFirst = document.querySelector("#revealOne");
         this.heroSecond = document.querySelector("#revealTwo");
         this.heroThird = document.querySelector("#revealThree");
         this.heroFourth = document.querySelector("#revealFour");

         this.heroText = document.querySelector(".hero-section__title");

         this.heroParagraph = document.querySelector(".hero-section__subtitle");
         this.heroButton = document.querySelector(".hero-section__btn");

         this.events();

    }

    events() {

        gsap.registerPlugin(CSSRulePlugin);

        var ruleOne = CSSRulePlugin.getRule(`#revealOne:after`);
        var ruleTwo = CSSRulePlugin.getRule(`#revealTwo:after`);
        var ruleThree = CSSRulePlugin.getRule(`#revealThree:after`);
        var ruleFour = CSSRulePlugin.getRule(`#revealFour:after`);

        gsap.from(this.heroText, {y:-50, duration:1, ease: 'power2.out'})
        gsap.to(ruleOne, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out'});
        gsap.to(ruleTwo, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out'});
        gsap.to(ruleThree, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out'});
        gsap.to(ruleFour, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out'});

        gsap.from(this.heroParagraph, {opacity: 0, y: 50, duration:1, delay:1})

        gsap.from(this.heroButton, {opacity: 0, duration:1, delay:1})



    }
}






