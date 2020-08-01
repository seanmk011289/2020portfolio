import '../styles/styles.css'

import '../styles/styles.scss'

import Glider from './modules/Glider'
import HomepageGSAP from './modules/HomepageGSAP'
import HomepageAnimations from './modules/HomepageAnimations'

new Glider();
new HomepageGSAP();
new HomepageAnimations();

//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}







