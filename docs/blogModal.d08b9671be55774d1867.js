(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(o,l,e){"use strict";function n(o,l){for(var e=0;e<l.length;e++){var n=l[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}e.r(l),e.d(l,"default",(function(){return t}));var t=function(){function o(){!function(o,l){if(!(o instanceof l))throw new TypeError("Cannot call a class as a function")}(this,o),this.injectBlogHTML(),this.blogModal=document.querySelector(".blog-modal"),this.blogCloseButtons=document.querySelectorAll(".close-blog-modal"),this.events()}var l,e,t;return l=o,(e=[{key:"events",value:function(){var o=this;this.blogCloseButtons.forEach((function(l){l.addEventListener("click",(function(l){return o.closeBlogModal(l)}))}))}},{key:"openBlogModal",value:function(o){o.preventDefault(),this.blogModal.classList.add("blog-modal--is-visible")}},{key:"closeBlogModal",value:function(o){"close"==o.target.dataset.click&&this.blogModal.classList.remove("blog-modal--is-visible")}},{key:"injectBlogHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        \x3c!-- Form Modal --\x3e\n            <div class="blog-modal close-blog-modal" data-click="close">\n                <div class="blog-modal__inner">\n                <div class="wrapper wrapper--modal">\n                    <div class="blog-modal__close-button close-blog-modal" data-click="close">+</div>\n                    <h2 class="blog-modal__title"><svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 43 59" class="form-modal__svg">\n                    <style>\n                    .st1{fill:#53c48b}\n                    </style>\n                    <g id="recent-work-lines_1_">\n                    <path class="st1" d="M16 11h11v48H16zM32 0h11v59H32zM0 21h11v38H0z"/>\n                    </g>\n                </svg>Design blog coming soon!</h2>\n                    <p class="blog-modal__subtitle"> If you have questions about this project, please email me at <a href="mailto:seanmk011289@gmail.com" class="form-modal__link">seanmk011289@gmail.com</a> or click the button below!</p>\n                    <a href="mailto:seanmk011289@gmail.com"><button class="btn btn--primary">SHOOT AN EMAIL</button></a>\n                </div>\n            </div>\n            </div>\n        ')}}])&&n(l.prototype,e),t&&n(l,t),o}()}}]);