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
const promP = document.querySelector('.prom_slider .swiper-button-prev');
const promN = document.querySelector('.prom_slider .swiper-button-next');
const promSetin = document.querySelector('.prom_txt .setin_txt');
const promLover = document.querySelector('.prom_txt .lover_txt');
/* promP.addEventListener('click', function(){
    promP = !promP
    if(promP == false){
        promLover.style.display='inline';
        promSetin.style.display='none';
    }else{
        promLover.style.display='none';
        promSetin.style.display='inline';
    };
}); */
