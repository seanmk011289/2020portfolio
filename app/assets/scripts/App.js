import '../styles/styles.css'

import '../styles/styles.scss'


import HeroAnimations from './HeroAnimations'

import Glider from './Glider'

//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}

new Glider();

new HeroAnimations();




