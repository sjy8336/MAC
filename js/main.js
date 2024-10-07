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
const bestImg = document.querySelectorAll('.bst_list img')
const newS = new Swiper('.new_s', {
    loop: true,
    slidesPerView: "auto",
    navigation:{
        prevEl:'.new_in .swiper-button-prev',
        nextEl:'.new_in .swiper-button-next',
    },
});
const promS = new Swiper('.prom_s', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 50,
    navigation:{
        prevEl:'.prom_slider .swiper-button-prev',
        nextEl:'.prom_slider .swiper-button-next',
    },
});
const prod_tab = document.querySelectorAll('.prod .prod_tab li');
/* console.log(prod_tab); */
$(prod_tab).on('click', function(e){
    e.preventDefault()
    $(prod_tab).removeClass('on');
    $(this).addClass('on');
})