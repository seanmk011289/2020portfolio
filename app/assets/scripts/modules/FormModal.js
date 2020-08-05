export default class FormModal {

    constructor() {

        this.injectFormHTML()

        //Form Modal Selectors
        this.formModal = document.querySelector('.form-modal')

        // this.formOpenButtons = document.querySelectorAll('.open-form-modal')

        this.formCloseButtons = document.querySelectorAll('.close-form-modal')


        this.events()
    }

    events() {

        // this.formOpenButtons.forEach(formOpenButton => {
        //     formOpenButton.addEventListener("click", (e) => this.openFormModal(e));
        // })

        this.formCloseButtons.forEach(formCloseButton => {
            formCloseButton.addEventListener("click", (e) => this.closeFormModal(e));
        })
        
    }
    

    openFormModal(e) {
        e.preventDefault();
        this.formModal.classList.add('form-modal--is-visible')
    }

    closeFormModal(e) {
        if(e.target.dataset.click == "close") {
            this.formModal.classList.remove('form-modal--is-visible')
        }
    }



    injectFormHTML() {
        document.body.insertAdjacentHTML("beforeend", `
        <!-- Form Modal -->
            <div class="form-modal close-form-modal" data-click="close">
                <div class="form-modal__inner">
                <div class="wrapper wrapper--modal">
                    <div class="form-modal__close-button close-form-modal" data-click="close">+</div>
                    <h2 class="form-modal__title"><svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 43 59" class="form-modal__svg">
                    <style>
                    .st1{fill:#53c48b}
                    </style>
                    <g id="recent-work-lines_1_">
                    <path class="st1" d="M16 11h11v48H16zM32 0h11v59H32zM0 21h11v38H0z"/>
                    </g>
                </svg>Contact form coming soon!</h2>
                    <p class="form-modal__subtitle"> If you'd like to contact me, please email me at <a href="mailto:seanmk011289@gmail.com" class="form-modal__link">seanmk011289@gmail.com</a> or click the button below!</p>
                    <a href="mailto:seanmk011289@gmail.com"><button class="btn btn--primary">LET'S GET STARTED</button></a>
                </div>
            </div>
            </div>
        `)
    }


    
}