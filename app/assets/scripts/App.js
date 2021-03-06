import '../styles/styles.css'
import '../styles/styles.scss'

import Swup from 'swup';

import Glider from './modules/Glider';
import HomepageObserver from './modules/HomepageObserver';
import HomepageAnimations from './modules/HomepageAnimations';
import HeroReveal from './modules/HeroReveal';
import ResumeHero from './modules/ResumeHero';
import ResumeObserver from './modules/ResumeObserver';

//SWUP
let options = {
    LINK_SELECTOR: 'a',
    debugMode: true,
};

const swup = new Swup(options);

new HeroReveal();

function init() {

    let formModal

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

        new HomepageObserver();
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







