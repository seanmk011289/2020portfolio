import gsap from 'gsap';
import  { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';


export default class HomepageGSAP {
    constructor() {
        //DOM ELEMENTS

        ///HERO ELEMENTS
        this.heroFirst = document.querySelector("#revealOne");
        this.heroSecond = document.querySelector("#revealTwo");
        this.heroThird = document.querySelector("#revealThree");
        this.heroFourth = document.querySelector("#revealFour");
        this.heroText = document.querySelector(".hero-section__title");
        this.heroParagraph = document.querySelector(".hero-section__subtitle");
        this.heroButton = document.querySelector(".hero-section__btn");
        this.heroWaves = document.querySelector(".hero-section__bottom-svg");

        //MY WORK SECTION ELEMENTS
        this.myworkSection = document.querySelector('.my-work-section')
        this.myworkTitle = document.querySelector('.my-work-section__title')
        this.myworkSubtitle = document.querySelector('.my-work-section__subtitle')

        //RECENT WORK SECTION 
        this.recentWorkTitle = document.querySelector('.recent-work-section__title');
        this.recentWorkSubtitle = document.querySelector('.recent-work-section__subtitle');
        this.recentWorkSection = document.querySelector('.recent-work-section');

        this.heroReveal();
        this.myWorkAnimations();
        this.recentWorkAnimations();
        this.events();
    }

    //Listeners
    events() {
        
    }
 
    heroReveal() {

            gsap.registerPlugin(CSSRulePlugin);
    
            var ruleOne = CSSRulePlugin.getRule(`#revealOne:after`);
            var ruleTwo = CSSRulePlugin.getRule(`#revealTwo:after`);
            var ruleThree = CSSRulePlugin.getRule(`#revealThree:after`);
            var ruleFour = CSSRulePlugin.getRule(`#revealFour:after`);
    
            gsap.from(this.heroText, {y: 150, duration:1, ease: 'power2.out', delay:0.5})
            gsap.to(ruleOne, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:0.5});
            gsap.to(ruleTwo, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:0.5});
            gsap.to(ruleThree, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:1.5});
            gsap.to(ruleFour, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:1.5});
    
            gsap.from(this.heroParagraph, {opacity: 0, y: 50, duration:1, delay:2.5})
    
            gsap.from(this.heroButton, {opacity: 0, duration:1, delay:2.5})

            gsap.from(this.heroWaves, {opacity: 0, y:150, duration:0.75, delay: 2.5})
            
        }

        myWorkAnimations() {

                gsap.registerPlugin(ScrollTrigger);

                gsap.from(this.myworkTitle, { duration:1.5, x:-300, opacity:0, ease: "power3.out", 
                    scrollTrigger: {
                    trigger: this.myworkTitle,
                    start: 'center 80%',
                    toggleActions: "play none none none"
                    }
                });

                gsap.from(this.myworkSubtitle, { duration:1.5, x:300, opacity:0, ease: "power3.out", 
                    scrollTrigger: {
                    trigger: this.myworkSection,
                    start: 'center 90%',
                    toggleActions: "play none none none"
                    }
                });


        }

        recentWorkAnimations() {

            gsap.registerPlugin(CSSRulePlugin);

            var recentTitle = CSSRulePlugin.getRule(`.recent-work-section__title::after`);

            gsap.from(this.recentWorkTitle, {duration: 1.3, x:500, opacity:0, ease: "power3.out",
            scrollTrigger: {
            trigger: this.recentWorkSection,
            start:'center 90%',
            toggleActions: 'play none none none'
        }})

        gsap.from(this.recentWorkSubtitle, {duration: 1.3, x:-500, opacity:0, ease: "power3.out",
            scrollTrigger: {
            trigger: this.recentWorkSection,
            start:'center 90%',
            toggleActions: 'play none none none'
        }})

        gsap.to(recentTitle, {cssRule: {scaleX: 0}, duration: 1.3, 
            scrollTrigger: {
                trigger: this.recentWorkSection,
                start:'center 90%',
                toggleActions: 'play none none none'
            }})


        }

}







