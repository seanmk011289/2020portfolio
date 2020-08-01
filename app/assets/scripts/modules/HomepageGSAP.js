import gsap from 'gsap';
import  { ScrollTrigger, CSSRulePlugin, TimelineMax } from "gsap/all";


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
        this.heroTopSVGtop = document.querySelector('.hero-section__top-svg-top');
        this.heroTopSVGmid = document.querySelector('.hero-section__top-svg-middle');
        this.heroTopSVGbot = document.querySelector('.hero-section__top-svg-bottom');

        //MY WORK SECTION ELEMENTS
        this.myworkSection = document.querySelector('.my-work-section')
        this.myworkTitle = document.querySelector('.my-work-section__title')
        this.myworkSubtitle = document.querySelector('.my-work-section__subtitle')

        //RECENT WORK SECTION 
        this.recentWorkTitle = document.querySelector('.recent-work-section__title');
        this.recentWorkSubtitle = document.querySelector('.recent-work-section__subtitle');
        this.recentWorkSection = document.querySelector('.recent-work-section');
        this.recentWorkGlider = document.querySelector('.recent-work-section__glider');
        this.recentWorkSection = document.querySelector('.recent-work-section');

        //Blog Elements 
        this.blogSection = document.querySelector('.blog-section');
        this.blogSVG = document.querySelector('.blog-guide-path');
        this.blogTitle = document.querySelector('.blog-section__title')
        this.blogSubtitle = document.querySelector('.blog-section__subtitle');
        this.blogButton = document.querySelector('.blog-section__button');
        this.blogSwitch = false;

        //CTA Section
        this.CTAs = document.querySelectorAll('.cta-section__flex-item');
        [this.firstCTA, this.secondCTA, this.thirdCTA] = this.CTAs;


        this.heroReveal();
        this.myWorkAnimations();
        this.recentWorkAnimations();
        this.blogSectionObserver();
        this.events();
    }

    //Listeners
    events() {
        
    }
 
    heroReveal() {

            gsap.registerPlugin(CSSRulePlugin);


            //Hero Text reveal
            var ruleOne = CSSRulePlugin.getRule(`#revealOne:after`);
            var ruleTwo = CSSRulePlugin.getRule(`#revealTwo:after`);
            var ruleThree = CSSRulePlugin.getRule(`#revealThree:after`);
            var ruleFour = CSSRulePlugin.getRule(`#revealFour:after`);
    
            gsap.from(this.heroText, {y: 150, duration:1, ease: 'power2.out', delay:0.5})
            gsap.to(ruleOne, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:0.5});
            gsap.to(ruleTwo, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:0.5});
            gsap.to(ruleThree, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:1.75});
            gsap.to(ruleFour, {cssRule: {scaleY: 0}, duration: 1, ease: 'power2.out', delay:1.75});


            // Hero Paragraph, button, and waves
            gsap.from(this.heroParagraph, {opacity: 0, y: 50, duration:0.75, ease: 'ease-out', delay:2.5})
            gsap.from(this.heroButton, {opacity: 0, duration:0.75, ease: 'ease-out', delay:2.5})
            gsap.from(this.heroWaves, {opacity: 0, y:150, duration:0.75, ease: 'ease-out', delay: 2.5})

            //Hero top svg
            gsap.from(this.heroTopSVGtop, {duration: 0.5, y: -500, ease:"bounce", delay: 1, transformOrigin:"center"})
            gsap.from(this.heroTopSVGmid, {duration: 0.5, y: -500, ease:"bounce", delay: 1.2})
            gsap.from(this.heroTopSVGbot, {duration: 0.5, y: -500, ease:"bounce", delay: 1.4})
            
        }


        //MY WORK Section Animation

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


        //Recent work section animation

        recentWorkAnimations() {
            
            gsap.registerPlugin(CSSRulePlugin);

            var recentTitle = CSSRulePlugin.getRule(`.recent-work-section__title::after`);

            var recentWorkTl = new TimelineMax({
                paused:true
            });

            recentWorkTl.from(this.recentWorkTitle, { duration: 1, y:200, ease: "power3.out"})
            recentWorkTl.from(this.recentWorkSubtitle, {duration: 1, y:200, opacity:0, ease: "power3.out"}, '-=1')
            recentWorkTl.to(recentTitle, {cssRule: {scaleY: 0}, duration: 1}, '-=1')
            recentWorkTl.from(this.recentWorkGlider, {duration: 1.5, y:100, opacity:0, ease: 'ease-out'}, 1)

            let options = {
                root:null,
                rootMargin:'-250px'
            }

            let recentWorkObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        recentWorkTl.play()
                    }
                })
            }, options)

            recentWorkObserver.observe(this.recentWorkSection);

    }



    //Blog animations and experiment with a Promise

        blogDraw() {
            this.blogSVG.classList.add('blog-guide-path--animate');
            console.log("DREW")
        }

        blogUnDraw() {
            this.blogSVG.classList.remove('blog-guide-path--animate');
        }

        blogPromise() {
            return new Promise((res, rej) => {

                var blogTl = new TimelineMax({
                    
                 });
     
                 blogTl.from(this.blogTitle, {duration: 1, opacity:0, y:200, ease:'power3.out'}, 0.5)
                 blogTl.from(this.blogSubtitle, {duration: 1, opacity:0, y:200, ease:'power3.out'}, '-=0.5')
                 blogTl.from(this.blogButton, {duration: 1, opacity:0, y:200, ease:'power3.out'}, '-=0.3')

                res()
            })

        }


        blogSectionObserver() {

            const options = {
                root:null,
                rootMargin: '-250px'
            }
    
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && this.blogSwitch == false) {
                        this.blogPromise().then(() => {
                            this.blogDraw();
                            this.blogSwitch = true
                        }).catch(() => {
                            console.log("still haven't got it")
                        })
                    } else {
                        this.blogUnDraw();
                        this.blogSwitch = false;
                    }
                })
            }, options)
    
            observer.observe(this.blogSection);
    }


    ///CTA Section Animatoins

}







