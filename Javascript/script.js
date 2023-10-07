// //Code for hamburger menu
// const selectElement = function(element) {
//     return document.querySelector(element);
// };
// let body = selectElement('body');


let menuToggler = document.getElementsByClassName('fa-hamburger');
let hamburgerMenu = document.getElementsByClassName('hamburger_menu');

menuToggler.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('open');
});









// For scroll-to-top button 
const scrollUp = document.querySelector(".scrollUp");
// let perfectBlend = document.querySelector(".parallax_2_inner");
window.addEventListener("scroll", () => {
    if(window.scrollY > 1200) {
        scrollUp.classList.add("scroll_up_active");
    }
    else {
        scrollUp.classList.remove("scroll_up_active");
    }
})
// document.querySelector('.subscribe').addEventListener('click', function() {
    //     const email = querySelector
    // })


    
    
    
 // For card slider(new arrivals section)
var swiper = new Swiper(".slide_content", {
    slidesPerView: 3,
    spaceBetween: 52,
    loop: true,
    // centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});
    



// For second slider/carousel(menu section)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
        rows: 2,
        columns: 3
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
