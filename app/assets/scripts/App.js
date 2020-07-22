import '../styles/styles.css'

import HeroAnimations from './HeroAnimations'

//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}

new HeroAnimations();


