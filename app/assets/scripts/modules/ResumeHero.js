import gsap from 'gsap';
import  {  TimelineMax } from "gsap/all";

export default class ResumeHero {

    constructor() {

        this.resumeHero = document.querySelector('.resume-hero');
        this.circleOne = document.querySelector('.resume-hero__bg-svg #one');
        this.circleTwo = document.querySelector('.resume-hero__bg-svg #two');
        this.circleThree = document.querySelector('.resume-hero__bg-svg #three');
        this.circleFour = document.querySelector('.resume-hero__bg-svg #four');
        this.circleFive = document.querySelector('.resume-hero__bg-svg #five');
        this.circleSix = document.querySelector('.resume-hero__bg-svg #six');
        this.circleSeven = document.querySelector('.resume-hero__bg-svg #seven');

        this.resumeTopSVGtop = document.querySelector('.resume-hero__top-svg-top');
        this.resumeTopSVGmid = document.querySelector('.resume-hero__top-svg-middle');
        this.resumeTopSVGbot = document.querySelector('.resume-hero__top-svg-bottom');

        this.resumeHeroLinks = document.querySelectorAll('.resume-hero__link')

        this.resumeHeroObserver()

        this.resumeCirclesCaller = () => this.resumeCirclesMove();

        this.events()
    }

    events() {
        this.resumeHeroLinks.forEach(link => {
            link.addEventListener("mouseover", () => {
                console.log(this.resumeTopSVGtop);
                this.addResumeHeroScale();
            })
        })

        this.resumeHeroLinks.forEach(link => {
            link.addEventListener("mouseout", () => {
                this.removeResumeHeroScale();
            })
        })
    }

    resumeHeroObserver() {

        let resumeObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    window.addEventListener("scroll", this.resumeCirclesCaller)
                } else {
                    window.removeEventListener("scroll", this.resumeCirclesCaller)
                }
            })
        })
        resumeObserver.observe(this.resumeHero)
    }

    resumeCirclesMove() {
        let moveOne = window.pageYOffset * 0.3;
        let moveTwo = window.pageYOffset * 0.4;
        let moveThree = window.pageYOffset * 0.8;
        let moveFour = window.pageYOffset * 0.8;
        let moveFive = window.pageYOffset * 0.5;
        let moveSix = window.pageYOffset * 0.5;
        let moveSeven = window.pageYOffset * 0.5;

        this.circleOne.style.transform = `translatey(${moveOne}px)`
        this.circleTwo.style.transform = `translatey(${moveTwo}px)`
        this.circleThree.style.transform = `translatey(${moveThree}px)`
        this.circleFour.style.transform = `translatey(${moveFour}px)`
        this.circleFive.style.transform = `translatey(${moveFive}px)`
        this.circleSix.style.transform = `translatey(${moveSix}px)`
        this.circleSeven.style.transform = `translatey(${moveSeven}px)`

    }

    addResumeHeroScale() {
        this.resumeTopSVGtop.classList.add('resume-hero__top-svg-top-animate');
        this.resumeTopSVGmid.classList.add('resume-hero__top-svg-middle-animate');
        this.resumeTopSVGbot.classList.add('resume-hero__top-svg-bottom-animate');
    }

    removeResumeHeroScale(){
        this.resumeTopSVGtop.classList.remove('resume-hero__top-svg-top-animate');
        this.resumeTopSVGmid.classList.remove('resume-hero__top-svg-middle-animate');
        this.resumeTopSVGbot.classList.remove('resume-hero__top-svg-bottom-animate');
    }
}