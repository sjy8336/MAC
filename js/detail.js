var subS = new Swiper(".sub_slide", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const buyS = new Swiper('.buy_slide', {
    loop: true,
    slidesPerView: 1,
    navigation:{
        prevEl:'.buy_slide .swiper-button-prev',
        nextEl:'.buy_slide .swiper-button-next',
    },
    thumbs: {
        swiper: subS,
    },
});
$('.color_list').hide();
$('.pink_list').show();
$('.color_tab li').on('click', function(e){
    e.preventDefault()
    $('.color_tab li').removeClass('on');
    $(this).addClass('on');
    const colornum = $(this).index();
    if(colornum == 0){
        $('.color_list').hide()
        $('.pink_list').stop(true).show()
        $('.pink_list li:first-child').addClass('on')
    }else if(colornum == 1){
        $('.color_list').hide()
        $('.red_list').stop(true).show()
        $('.red_list li:first-child').addClass('on')
    }else if(colornum == 2){
        $('.color_list').hide()
        $('.berry_list').stop(true).show()
        $('.berry_list li:first-child').addClass('on')
    }else if(colornum == 3){
        $('.color_list').hide()
        $('.orange_list').stop(true).show()
        $('.orange_list li:first-child').addClass('on')
    }else if(colornum == 4){
        $('.color_list').hide()
        $('.trend_list').stop(true).show()
        $('.trend_list div').addClass('on')
    }else{
        $('.color_list').hide()
        $('.neutral_list').stop(true).show()
        $('.neutral_list li:first-child').addClass('on')
    }
})
$('.color_list li').on('click', function(e){
    e.preventDefault()
    $('.color_list li').removeClass('on')
    $(this).addClass('on')
})
$('.order li').on('click', function(e){
    e.preventDefault()
    $('.order li').removeClass('on');
    $(this).addClass('on');
})