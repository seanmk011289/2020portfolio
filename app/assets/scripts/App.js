import '../styles/styles.css'
import '../styles/styles.scss'

import Swup from 'swup';

import Glider from './modules/Glider'
import HomepageGSAP from './modules/HomepageGSAP'
import HomepageAnimations from './modules/HomepageAnimations'
import HeroReveal from './modules/HeroReveal'
import ResumeHero from './modules/ResumeHero';
import ResumeObserver from './modules/ResumeObserver';

//SWUP

const swup = new Swup();

new HeroReveal();

let formModal

function init() {

    if (document.querySelector('.hero-section')) {

        let blogModal

        document.querySelectorAll('.open-form-modal').forEach(el => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                if(typeof formModal == "undefined") {
                    import(/*webpackChunkName: "formModal"*/ './modules/FormModal').then((modal) => {
                        formModal = new modal.default()
                        setTimeout(() => formModal.openFormModal(e), 20)
                    }).catch(() => {
                        console.log("There was an issue")
                    })
                } else {
                    formModal.openFormModal(e);
                }
            })
        })

        document.querySelector('.blog-section__button').addEventListener("click", (e) => {
                e.preventDefault();
                if(typeof blogModal == "undefined") {
                    import(/*webpackChunkName: "blogModal"*/ './modules/BlogModal').then((modal) => {
                        blogModal = new modal.default()
                        setTimeout(() => blogModal.openBlogModal(e), 20)
                    }).catch(() => {
                        console.log("There was an issue")
                    })
                } else {
                    blogModal.openBlogModal(e);
                }
            })

        new HomepageGSAP();
        new HomepageAnimations();
        new Glider();
        
    }


    if (document.querySelector('.resume-hero')) {
        new ResumeHero();
        new ResumeObserver();
        
        document.querySelectorAll('.open-form-modal').forEach(el => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                if(typeof formModal == "undefined") {
                    import(/*webpackChunkName: "formModal"*/ './modules/FormModal').then((modal) => {
                        formModal = new modal.default()
                        setTimeout(() => formModal.openFormModal(e), 20)
                    }).catch(() => {
                        console.log("There was an issue")
                    })
                } else {
                    formModal.openFormModal(e);
                }
            })
        })
    }
}

init();

document.addEventListener('swup:contentReplaced', function () {
    init();
});




//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}







