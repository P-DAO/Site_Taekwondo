const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    }
});

const btnTop = document.getElementById("btnTop");

window.onscroll = function () {
    // Affiche le bouton après avoir scrollé de 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
};

btnTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
