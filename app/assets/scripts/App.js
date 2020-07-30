import '../styles/styles.css'

import '../styles/styles.scss'

import Glider from './modules/Glider'

import HomepageGSAP from './modules/HomepageGSAP'

import HomepageAnimations from './modules/HomepageAnimations'

import MenuChangeColor from './modules/MenuChangeColor'

//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}

let glider = new Glider();

let homepageGSAP = new HomepageGSAP();

let hompageAnimations = new HomepageAnimations();





