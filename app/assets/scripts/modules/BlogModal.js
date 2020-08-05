export default class BlogModal {
    constructor() {
        this.injectBlogHTML()

        //Blog Modal Selectors
        this.blogModal = document.querySelector('.blog-modal');
        this.blogCloseButtons = document.querySelectorAll('.close-blog-modal');

        this.events();
    }

    events() {

        this.blogCloseButtons.forEach(blogCloseButton => {
            blogCloseButton.addEventListener("click", (e) => this.closeBlogModal(e));
        })
        
    }

    openBlogModal(e) {
        e.preventDefault();
        this.blogModal.classList.add('blog-modal--is-visible')
    }

    closeBlogModal(e) {
        if(e.target.dataset.click == "close") {
            this.blogModal.classList.remove('blog-modal--is-visible')
        }
    }

    injectBlogHTML() {
        document.body.insertAdjacentHTML("beforeend", `
        <!-- Form Modal -->
            <div class="blog-modal close-blog-modal" data-click="close">
                <div class="blog-modal__inner">
                <div class="wrapper wrapper--modal">
                    <div class="blog-modal__close-button close-blog-modal" data-click="close">+</div>
                    <h2 class="blog-modal__title"><svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 43 59" class="form-modal__svg">
                    <style>
                    .st1{fill:#53c48b}
                    </style>
                    <g id="recent-work-lines_1_">
                    <path class="st1" d="M16 11h11v48H16zM32 0h11v59H32zM0 21h11v38H0z"/>
                    </g>
                </svg>Design blog coming soon!</h2>
                    <p class="blog-modal__subtitle"> If you have questions about this project, please email me at <a href="mailto:seanmk011289@gmail.com" class="form-modal__link">seanmk011289@gmail.com</a> or click the button below!</p>
                    <a href="mailto:seanmk011289@gmail.com"><button class="btn btn--primary">SHOOT AN EMAIL</button></a>
                </div>
            </div>
            </div>
        `)
    }
}