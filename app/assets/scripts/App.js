import '../styles/styles.css'

import '../styles/styles.scss'

import Glider from './Glider'
import HomepageGSAP from './HomepageGSAP'
import HomepageAnimations from './HomepageAnimations'

//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}

new Glider();

new HomepageGSAP();

new HomepageAnimations();





