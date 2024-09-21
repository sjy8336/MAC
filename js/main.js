const mvS = new Swiper('.mv_in', {
    loop: true,
    autoplay:{delay:3500},
    scrollbar: {el: '.mv_in .swiper-scrollbar'},
});
const bestS = new Swiper('.best_s', {
    slidesPerView: 5,
    spaceBetween: 40,
    navigation:{
        prevEl:'.best .swiper-button-prev',
        nextEl:'.best .swiper-button-next',
    },
    scrollbar: {el: '.best .swiper-scrollbar'},
});
const newS = new Swiper('.new_s', {
    loop: true,
    slidesPerView: 1,
    navigation:{
        prevEl:'.new_in .swiper-button-prev',
        nextEl:'.new_in .swiper-button-next',
    },
});
const promS = new Swiper('.prom_s', {
    loop: true,
    slidesPerView: 1,
    navigation:{
        prevEl:'.prom_in .prom_slider .swiper-button-prev',
        nextEl:'.prom_in .prom_slider .swiper-button-next',
    },
});