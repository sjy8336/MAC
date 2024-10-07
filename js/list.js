const prodTab = document.querySelectorAll('.tab li')
console.log(prodTab);
$(prodTab).on('click', function(e){
    e.preventDefault()
    $(prodTab).removeClass('on')
    $(this).addClass('on');
})