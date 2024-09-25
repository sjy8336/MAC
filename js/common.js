const gnbPM = document.querySelector('.gnb .product');
const subPM = document.querySelector('.gnb .product .sub');
const gnbMM = document.querySelector('.gnb .makeup_serv');
const subMM = document.querySelector('.gnb .makeup_serv .sub');
const gnbBM = document.querySelector('.gnb .brand');
const subBM = document.querySelector('.gnb .brand .sub');
$(subPM).hide();
$(subMM).hide();
$(subBM).hide();
$(gnbPM).on('mouseover', function(){
    $(subMM).hide();
    $(subBM).hide();
    $(subPM).stop(true).show(0);
})
$(subPM).on('mouseout', function(){$(subPM).stop(true).hide(0);})
$(gnbMM).on('mouseover', function(){
    $(subPM).hide();
    $(subBM).hide();
    $(subMM).stop(true).show(0);
})
$(subMM).on('mouseout', function(){$(subMM).stop(true).hide(0);})
$(gnbBM).on('mouseover', function(){
    $(subPM).hide();
    $(subMM).hide();
    $(subBM).stop(true).show(0);
})
$(subBM).on('mouseout', function(){$(subBM).stop(true).hide(0);})