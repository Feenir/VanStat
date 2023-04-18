const heroBig = new Swiper(".hero-big", {
    slidesPerView: 1,
});

let lerp = (a, b, t) => a * (1 - t) + b * t;

const heroText = new Swiper(".hero-text", {
    slidesPerView: 1,
    pagination: {
        el: ".hero__text-pagination",
        type: "progressbar",
    },


    navigation: {
        nextEl: ".text-slider-next",
        prevEl: ".text-slider-prev",
    },
    on: {
        afterInit(swiper) {
            swiper.progressIconEl = swiper.el.querySelector(
                ".swiper-progressbar-icon-text"
            );
        },
        progress(swiper, progress) {
            if (swiper.progressIconEl) {
                const fractions = swiper.slides.length - swiper.params.slidesPerView + 1;
                const t = lerp(1 / fractions, 1, progress);
                swiper.progressIconEl.style.left = `calc(${t * 100}% - 4px)`;
            }

        }
    },
    thumbs: {
        swiper: heroBig,
    },
    watchSlidesProgress: true

});

function sliderNumber(mySliderAllSlides, mySliderCurrentSlide, currentSlider) {

    mySliderAllSlides.innerHTML = String(currentSlider.slides.length).padStart(2, '0');
    mySliderCurrentSlide.innerHTML = String(++currentSlider.realIndex).padStart(2, '0');

    if (currentSlider.slidesPerView > 2) {
        mySliderAllSlides.innerHTML = String(currentSlider.slides.length - 3).padStart(2, '0');
    }

    currentSlider.on('slideChange', function () {
        let currentSlide = ++currentSlider.realIndex;
        mySliderCurrentSlide.innerHTML = String(currentSlide).padStart(2, '0');
    });
}

const teamSwiperSlide = document.querySelector('.team-swiper')


let heroSliderAllSlides = document.querySelector('.hero__total');
let heroSliderCurrentSlide = document.querySelector('.hero__current');
sliderNumber(heroSliderAllSlides, heroSliderCurrentSlide, heroText)

function sliderActive() {
    const casesSlider = document.querySelectorAll('.cases-swiper');
    const casesNext = document.querySelectorAll('.cases-slider-next');
    const casesPrev = document.querySelectorAll('.cases-slider-prev');
    const casesPagination = document.querySelectorAll('.cases__text-pagination');
    const casesAllSlides = document.querySelectorAll('.cases__total');
    const casesCurrentSlide = document.querySelectorAll('.cases__current');

    for (let i = 0; i < casesSlider.length; i++) {
        casesSlider[i].classList.add('cases-swiper-' + i);
        casesNext[i].classList.add('cases-slider-next-' + i);
        casesPrev[i].classList.add('cases-slider-prev-' + i);
        casesPagination[i].classList.add('cases__text-pagination-' + i);

        const casesSwiper = new Swiper('.cases-swiper-' + i, {
            spaceBetween: 10,
            pagination: {
                el: ".cases__text-pagination-" + i,
                type: "progressbar",
            },
            navigation: {
                nextEl: ".cases-slider-next-" + i,
                prevEl: ".cases-slider-prev-" + i,
            },
            on: {
                afterInit(swiper) {
                    swiper.progressIconEl = swiper.el.querySelector(
                        ".swiper-progressbar-icon-cases"
                    );
                },
                progress(swiper, progress) {
                    if (swiper.progressIconEl) {
                        const fractions =
                            swiper.slides.length - swiper.params.slidesPerView + 1;
                        const t = lerp(1 / fractions, 1, progress);
                        swiper.progressIconEl.style.left = `calc(${t * 100}% - 4px)`;
                    }
                }
            },
            breakpoints: {
                319: {
                    slidesPerView: 1.1,

                },
                561: {
                    slidesPerView: 2,
                },
                769: {
                    slidesPerView: 3,
                },
                1080: {
                    slidesPerView: 4,
                },
            }

        });
        sliderNumber(casesAllSlides[i], casesCurrentSlide[i], casesSwiper)
    }
}

sliderActive()

const teamSlider = new Swiper(".team-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: ".team__text-pagination",
        type: "progressbar",
    },
    breakpoints: {
        319: {
            slidesPerView: 1.1,

        },
        561: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
        },
        1080: {
            slidesPerView: 4,
        }
    },

    navigation: {
        nextEl: ".team-slider-next",
        prevEl: ".team-slider-prev",
    },
    on: {
        afterInit(swiper) {
            swiper.progressIconEl = swiper.el.querySelector(
                ".swiper-progressbar-icon-team"
            );
        },
        progress(swiper, progress) {
            if (swiper.progressIconEl) {
                const fractions = swiper.slides.length - swiper.params.slidesPerView + 1;
                const t = lerp(1 / fractions, 1, progress);
                swiper.progressIconEl.style.left = `calc(${t * 100}% - 4px)`;
            }
        },
        init() {
            updateClasses(this);
        },
        slideChange() {
            updateClasses(this);
        },
    },
});

function updateClasses({$el, slides, activeIndex}) {
    $el.find('.swiper-slide-nth-next').removeClass('swiper-slide-nth-next');
    slides.eq(activeIndex).next().next().addClass('swiper-slide-nth-next');

    $el.find('.swiper-slide-nth-next1').removeClass('swiper-slide-nth-next1');
    slides.eq(activeIndex).next().next().next().addClass('swiper-slide-nth-next1');
}


let teamSliderAllSlides = document.querySelector('.team__total');
let teamSliderCurrentSlide = document.querySelector('.team__current');
sliderNumber(teamSliderAllSlides, teamSliderCurrentSlide, teamSlider)

const reviewsSlider = new Swiper(".reviews-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: ".reviews__text-pagination",
        type: "progressbar",
    },

    breakpoints: {
        319: {
            slidesPerView: 1.1,


        },
        561: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
        },
        1080: {
            slidesPerView: 4,
        }
    },

    navigation: {
        nextEl: ".reviews-slider-next",
        prevEl: ".reviews-slider-prev",
    },
    on: {

        afterInit(swiper) {
            swiper.progressIconEl = swiper.el.querySelector(
                ".swiper-progressbar-icon-reviews"
            );
        },
        progress(swiper, progress) {
            if (swiper.progressIconEl) {
                const fractions = swiper.slides.length - swiper.params.slidesPerView + 1;
                const t = lerp(1 / fractions, 1, progress);
                swiper.progressIconEl.style.left = `calc(${t * 100}% - 4px)`;
            }
        }
    },


});

if (document.documentElement.clientWidth < 560) {
    reviewsSlider.removeSlide(0);
}


let reviewsSliderAllSlides = document.querySelector('.reviews__total');
let reviewsSliderCurrentSlide = document.querySelector('.reviews__current');
sliderNumber(reviewsSliderAllSlides, reviewsSliderCurrentSlide, reviewsSlider)







