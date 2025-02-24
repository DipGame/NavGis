document.addEventListener("DOMContentLoaded", function () {

    let swiperPopular = new Swiper(".swiperPopular", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        // centeredSlides: true,
        // loop: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        breakpoints: {
            1610: {
                slidesPerView: 4,
                spaceBetween: 15
            },
        }
    });

    let swiperPride = new Swiper(".swiperPride", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
            el: ".swiperPride-pagination",
            clickable: true, // Включение кликабельности пагинации
        },
    });

    if (document.querySelector('.swiperTabs')) {
        const swiperTabs = document.querySelectorAll('.swiperTabs');

        // Проходим по каждому контейнеру и инициализируем свайпер
        swiperTabs.forEach(container => {
            new Swiper(container, {
                slidesPerView: 'auto',
                spaceBetween: 20,
            });
        });
    }

    if (document.querySelector('.swiperStages')) {
        const swiperStages = document.querySelectorAll('.swiperStages');

        // Проходим по каждому контейнеру и инициализируем свайпер
        swiperStages.forEach(container => {
            new Swiper(container, {
                slidesPerView: 'auto',
                spaceBetween: 10,
            });
        });
    }
    if (document.querySelector('.swiperProd')) {
        const swiperProd = document.querySelectorAll('.swiperProd');

        // Проходим по каждому контейнеру и инициализируем свайпер
        swiperProd.forEach(container => {
            new Swiper(container, {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiperProd_cont .swiper-button-next",
                    prevEl: ".swiperProd_cont .swiper-button-prev",
                },
            });
        });
    }

    let swiperElementPrew = new Swiper(".swiperElementPrew", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    let swiperEquipment = new Swiper(".swiperEquipment", {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiperEquipment_cont .swiper-button-next",
            prevEl: ".swiperEquipment_cont .swiper-button-prev",
        },
    });

    let swiperElement = new Swiper(".swiperElement", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiperElementPrew,
        },
        speed: 1500,            // added(slide speed)
        effect: 'fade',
    });

    console.log('addSwiper.js finish work');

});