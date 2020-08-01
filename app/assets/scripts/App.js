
import '../styles/styles.css'
import '../styles/styles.scss'

import Swup from 'swup';

import Glider from './modules/Glider'
import HomepageGSAP from './modules/HomepageGSAP'
import HomepageAnimations from './modules/HomepageAnimations'
import HeroReveal from './modules/HeroReveal'



//SWUP
const swup = new Swup();

new HeroReveal();


function init() {

    if (document.querySelector('.hero-section')) {
        new HomepageGSAP();
        new HomepageAnimations();
        new Glider();
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







