const menuToggler = document.querySelector(".fa-hamburger");
const hamburgerMenu = document.querySelector(".hamburger_menu");

console.log(menuToggler);
console.log(hamburgerMenu);
console.log("Hello World!");

menuToggler.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hamburger_open");
    hamburgerMenu.style.transition = "all .4s ease";
})


window.addEventListener("scroll", () => {
    if(window.scrollY > 85) {
        hamburgerMenu.classList.remove("hamburger_open");
    }
})



// For the shopping cart
const cartToggle = document.querySelector(".fa-shopping-cart");
const shoppingCart = document.querySelector(".cart_wrapper");
cartToggle.addEventListener("click", () => {
    shoppingCart.classList.add("shopping_cart_open_styling");
})
console.log(cartToggle);

// Closing the shopping cart
const cartClose = document.querySelector(".cart_wrapper .close_cart");
cartClose.addEventListener("click", () => {
    shoppingCart.classList.remove("shopping_cart_open_styling");
    shoppingCart.classList.add("shopping_cart_close_styling");
})






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
});
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
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    fadeEffect: {
        crossFade: true
    },
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
    dynamicBullets: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true
    },
    grid: {
        rows: 2,
        columns: 3
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        invert: true,
    }
});
