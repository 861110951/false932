// 电话
$('.piecePhone').mouseenter(function(){
    $('.piecePhone').addClass('enterphone');
}).mouseleave(function(){
    $('.piecePhone').removeClass('enterphone');
})

// 微信
$('.wechat').hover(function(){
    $('.wechat').addClass('qhover');
},function(){
    $('.wechat').removeClass('qhover');
})

// 返回顶部
$('.pieceback').click(function(){
    $('html,body').animate({scrollTop:0},'slow');
})