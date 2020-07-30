
import Glide from '@glidejs/glide';

export default class Glider {
    constructor() {
        //DOM Selectors

    this.events();

    }

    events() {
        new Glide('.glide',{
            type: 'carousel',
            startAt: 0,
        }).mount()
    }

}