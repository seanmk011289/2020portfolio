import gsap from 'gsap';
import { TimelineMax, CSSRulePlugin } from 'gsap/all'

export default class ResumeObserver {

    constructor() {

        this.sections = document.querySelectorAll('.page-section');

        //About Selectors
        this.aboutTitle = document.querySelector('.about-section__title')
        this.aboutSubtitle = document.querySelector('.about-section__paragraph')
        this.aboutLinks = document.querySelector('.about-section__links-list')

        //Skills Selectors 
        this.skillsTitle = document.querySelector('.skills-section__title')
        this.skillsSubtitle = document.querySelector('.skills-section__subtitle')
        this.skillsFlexItems = document.querySelectorAll('.skills-section__flex-section__flex-item')
        this.skillsOne = this.skillsFlexItems[0];
        this.skillsTwo = this.skillsFlexItems[1];
        this.skillsThree = this.skillsFlexItems[2];
        this.skillsButton = document.querySelector('.skills-section__hover')
        this.skillsUsed = document.querySelectorAll('.used');

        //Experience Selectors 
        this.experienceTitle = document.querySelector('.experience-section__title');
        this.experienceTitles = document.querySelectorAll('.experience-section__flex-item__title');
        [this.expTitle1, this.expTitle2, this.expTitle3] = this.experienceTitles;
        this.experienceSubtitles = document.querySelectorAll('.experience-section__flex-item__subtitle');
        [this.expSubtitle1, this.expSubtitle2, this.expSubtitle3] = this.experienceSubtitles;
        this.experienceParas = document.querySelectorAll('.experience-section__flex-item__paragraph');
        [this.expPara1, this.expPara2, this.expPara3] = this.experienceParas;
        this.experienceLists = document.querySelectorAll('.experience-section__flex-item__list');
        [this.expList1, this.expList2, this.expList3] = this.experienceLists;
        

        this.resumeObserver();

        this.events();

    }

    events() {

        this.skillsButton.addEventListener("mouseover", () => {
            this.addGreen();
        })

        this.skillsButton.addEventListener("mouseout", () => {
            this.removeGreen();
        })
    }

    resumeObserver() {
        const options = {
            rootMargin: '-150px'
        }

        let resumePageObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting && entry.target.dataset.section == "about"){
                    this.aboutAnimation();
                } else if (entry.isIntersecting && entry.target.dataset.section == "skills") {
                    this.skillsAnimation();
                } else if (entry.isIntersecting && entry.target.dataset.section == "experience") {
                    this.experienceAnimation()
                } else if (entry.isIntersecting && entry.target.dataset.section == "self-education") {
                    console.log("Self-education")
                }
            })
        }, options)

        this.sections.forEach(section => {
            resumePageObserver.observe(section);
        })
    }

    aboutAnimation() {

        let aboutTL = new TimelineMax({
        })

        aboutTL.from(this.aboutTitle, {duration:1, y:200, opacity:0, ease:'power3.out'})
        aboutTL.from(this.aboutSubtitle, {duration:1, y:200, opacity:0, ease:'power3.out'}, '-=.5')
        aboutTL.from(this.aboutLinks, {duration:1, y:200, opacity:0, ease:'power3.out'}, '-=.5')
    }

    skillsAnimation() {

        let skillsTL = new TimelineMax({

        })

        var ruleOne = CSSRulePlugin.getRule(`.skills-section__title::after`);
        var ruleTwo = CSSRulePlugin.getRule(`.skills-section__subtitle::after`);

        skillsTL.from(this.skillsTitle, {duration:1, y:200, ease:'power3.out'})
        skillsTL.to(ruleOne, {cssRule: {scaleY: 0}, duration: 1, ease: 'power3.out'}, '-=0.75');
        skillsTL.from(this.skillsSubtitle, {duration:1, y:200, opacity:0, ease:'power3.out'}, '-=0.75')
        skillsTL.to(ruleTwo, {cssRule: {scaleY: 0}, duration: 1, ease: 'power3.out'}, '-=1');

        skillsTL.from(this.skillsOne, {duration:1, y:200, opacity:0, ease:'power3.out'})
        skillsTL.from(this.skillsTwo, {duration:1, y:200, opacity:0, ease:'power3.out'}, '-=0.75')
        skillsTL.from(this.skillsThree, {duration:1, y:200, opacity:0, ease:'power3.out'}, '-=0.75')

        skillsTL.from(this.skillsButton, {duration:1, opacity:0, ease:'power3.out'})

    }

    experienceAnimation() {

        let expTL = new TimelineMax({

        })

        expTL.from(this.experienceTitle, {duration: 1, y:200, opacity:0, ease:'power3.out'})

        expTL.from(this.expTitle1, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=0.75')
        expTL.from(this.expSubtitle1, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=0.75')
        expTL.from(this.expPara1, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=0.75')
        expTL.from(this.expList1, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=0.75')

        expTL.from(this.expTitle2, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1.75')
        expTL.from(this.expSubtitle2, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1.5')
        expTL.from(this.expPara2, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1.25')
        expTL.from(this.expList2, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1')

        expTL.from(this.expTitle3, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1.75')
        expTL.from(this.expSubtitle3, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1.5')
        expTL.from(this.expPara3, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1.25')
        expTL.from(this.expList3, {duration: 1, y:200, opacity:0, ease:'power3.out'}, '-=1')


    }

    addGreen() {
        this.skillsUsed.forEach(used => used.classList.add('skills-section__turn-green'));
    }

    removeGreen() {
        this.skillsUsed.forEach(used => used.classList.remove('skills-section__turn-green'));
    }
}