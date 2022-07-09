// logo移入移出效果
$('.l-side .title-bg').hover(function () {
    $('.title-bg').addClass('blue-bg');
}, function () {
    $('.title-bg').removeClass('blue-bg');
})
// logo 点击
$('.title-bg').click(function () {
    window.location.href = '../index.html'
})
// 导航栏下拉的显示
// var productTime = null;
$('.r-side .product').mouseenter(function () {
    $('.pro-item').addClass('show')
}).mouseleave(function () {
        $('.pro-item').removeClass('show')
})

