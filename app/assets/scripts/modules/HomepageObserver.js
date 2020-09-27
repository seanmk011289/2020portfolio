import gsap from 'gsap';
import  {CSSRulePlugin, TimelineMax, ScrollTrigger} from "gsap/all";
import  { SplitText } from "gsap";

gsap.registerPlugin(ScrollTrigger);


export default class HomepageObserver {
    constructor() {

        //DOM ELEMENTS

        //MY WORK SECTION ELEMENTS
        this.myworkSection = document.querySelector('.my-work-section')
        this.myworkTitle = document.querySelector('.my-work-section__title')
        this.myworkSubtitle = document.querySelector('.my-work-section__subtitle')

        //RECENT WORK SECTION 
        this.recentWorkTitle = document.querySelector('.recent-work-section__title');

        //RECENT WORK SECTION 
        this.skillSectionTitle = document.querySelector('.skills-section--home__title');
       

        //Blog Elements 
        this.blogSection = document.querySelector('.blog-section');
        this.blogSVG = document.querySelector('.blog-guide-path');
        this.blogTitle = document.querySelector('.blog-section__title')
        this.blogSubtitle = document.querySelector('.blog-section__subtitle');
        this.blogButton = document.querySelector('.blog-section__button');
        this.blogSwitch = false;

        //CTA Section
        this.ctaSection = document.querySelector('.cta-section')
        this.CTAs = document.querySelectorAll('.cta-section__flex-item');
        [this.firstCTA, this.secondCTA, this.thirdCTA] = this.CTAs;

        this.myWorkAnimations();

        this.recentWorkAnimations();

        this.skillsAnimation();

        this.blogSectionObserver();

        this.ctaSectionObserver();

        this.events();
    }

    //Listeners
    events() {
        
    }


        //MY WORK Section Animation

        myWorkAnimations() {
            gsap.from(this.myworkTitle, {  
                scrollTrigger: {
                    trigger: this.myworkTitle,
                    start: "top bottom",
                    toggleActions: 'restart none none reset'
                },
                duration: 1, 
                y:200, 
                ease: "power3.out"
            })
        }


        //Recent work section animation

        recentWorkAnimations() {

            gsap.from(this.recentWorkTitle, {  
                    scrollTrigger: {
                        trigger: this.recentWorkTitle,
                        start: "top bottom",
                        toggleActions: 'restart none none reset'
                    },
                    duration: 1, 
                    y:200, 
                    ease: "power3.out"
                })
    
            // let options = {
            //     root:null,
            //     threshold:.1
            // }

            // let recentWorkObserver = new IntersectionObserver(entries => {
            //     entries.forEach(entry => {
            //         if(entry.isIntersecting){
            //             gsap.from(this.recentWorkTitle, { duration: 1, y:200, ease: "power3.out"})
            //         }
            //     })
            // }, options)

            // recentWorkObserver.observe(this.recentWorkSection);

    }



    //Blog animations and experiment with a Promise

        skillsAnimation() {
            gsap.from(this.skillSectionTitle, {  
                scrollTrigger: {
                    trigger: this.skillSectionTitle,
                    start: "top bottom",
                    toggleActions: 'restart none none reset'
                },
                duration: 1, 
                y:200, 
                ease: "power3.out"
            })
        }



        blogGSAP() {

                var blogTl = new TimelineMax({
                    
                 });
     
                 blogTl.from(this.blogTitle, {duration: 1, opacity:0, y:200, ease:'power3.out'}, 0.5)
                 blogTl.from(this.blogSubtitle, {duration: 1, opacity:0, y:200, ease:'power3.out'}, '-=0.5')
                 blogTl.from(this.blogButton, {duration: 0.75, opacity:0, y:200, ease:'power3.out'}, '-=0.3')

        }

        blogDraw() {
            this.blogSVG.classList.add('blog-guide-path--animate');
        }

        blogUndraw() {
            this.blogSVG.classList.remove('blog-guide-path--animate');
        }


        blogSectionObserver() {

            const options = {
                root:null,
                rootMargin: '-150px'
            }
    
            const blogObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.blogGSAP()
                        this.blogDraw();
                        } else {
                            this.blogUndraw();
                        }
                    })
            }, options)
    
            blogObserver.observe(this.blogSection);
    }


    ///CTA Section Animatoins

    ctaSectionTimeline() {

        var ctaTL = new TimelineMax({
        })

        ctaTL.from(this.firstCTA, {duration:1, y:300, opacity:0, ease:'power3.out'})
        ctaTL.from(this.secondCTA, {duration:1, y:300, opacity:0, ease:'power3.out'}, '-=0.75')
        ctaTL.from(this.thirdCTA, {duration:1, y:300, opacity:0, ease:'power3.out'}, '-=0.75')
    }

    ctaSectionObserver() {

        const options = {
            rootMargin: '-300px'
        }

        let ctaObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    this.ctaSectionTimeline();
                }
            })
        }, options)

        ctaObserver.observe(this.ctaSection);
    }

}







