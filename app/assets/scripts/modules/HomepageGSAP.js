import gsap from 'gsap';
import  { CSSRulePlugin, TimelineMax } from "gsap/all";

gsap.registerPlugin(CSSRulePlugin);


export default class HomepageGSAP {
    constructor() {

        //DOM ELEMENTS

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
        this.recentWorkSubtitle2 = document.querySelector('.recent-work-section__subtitle2');
        this.recentWorkBehance = document.querySelector('.recent-work-section__behance-button');

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

        this.myWorkObserver();
        this.recentWorkAnimations();
        this.blogSectionObserver();
        this.ctaSectionObserver();
        this.events();
    }

    //Listeners
    events() {
        
    }


        //MY WORK Section Animation

        myWorkObserver() {

            const options = {
                rootMargin: "-150px"
            }

            let myWorkObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        gsap.from(this.myworkTitle, { duration:1.5, x:-300, opacity:0, ease: "power3.out"});
                        gsap.from(this.myworkSubtitle, { duration:1.5, x:300, opacity:0, ease: "power3.out"});
                    }
                })
            }, options)
            myWorkObserver.observe(this.myworkSection);
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
            recentWorkTl.from(this.recentWorkGlider, {duration: 1, y:100, opacity:0, ease: 'ease-out'})
            recentWorkTl.from(this.recentWorkSubtitle2, {duration: 1, y:100, opacity:0, ease: 'ease-out'}, "-=.5")
            recentWorkTl.from(this.recentWorkBehance, {duration: 1, y:100, opacity:0, ease: 'ease-out'}, "-=.5")


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







