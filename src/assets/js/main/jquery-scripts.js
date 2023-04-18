// ===============================================
// 			Всплыващка
// ===============================================

$('.header__burger').click(function () {
    $('.header__mobile').slideToggle().css('display', 'flex');
    $('.burger').toggleClass('active')
    return false;
});


$(document).mouseup(function (e) {
    let popup = $('.header__wrapper');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.header__mobile').slideUp();
        $('.burger').removeClass('active')
    }
});