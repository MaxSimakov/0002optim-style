// Для открытия блока с поисковиком
$(document).ready(function() {
    $(".closeSearchForm,.openSearchForm").click(function() {
        $(".searchWrapper").toggleClass("active");
        return false;
    });
});
$(document).click(function(e) {
    if ($(e.target).closest('.searchWrapper').length) {
        return;
    }
    $(".searchWrapper").removeClass('active');
});
// Для плавающего меню
jQuery(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 240) {
            $('.capContainer').addClass('fixed');
        } else if ($(this).scrollTop() < 140) {
            $('.capContainer').removeClass('fixed');
        }
    });
});
// вызов модального окна
$(document).ready(function() {
    $(".modalbox").fancybox();
});