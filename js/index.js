// 初始化wow.js

// 引入导航
$('.shortcut').load('./false932/shortcut/index.html');

// 引入底部
$('.footer-main').load('./false932/footer/index.html');

// 侧边栏
$('.aside').load('./false932/aside/index.html');

function Variable(){
    this.scroll = 700,
    this.contact = 750,
    this.navshow = function(){
        $('.shortcut').addClass('navshow');        
    },
    this.sideshow = function(){
        $('.side-contact').addClass('Show');
    }
}
var con = new Variable();
// 监听滚动条
$(window).scroll(function(){
    console.log($(window).scrollTop());
    // 判断滚动条
    if(  $(window).scrollTop() >= con.scroll){
        //显示导航背景
            con.navshow();
        // 显示右侧联系菜单
            con.sideshow();
    }  
    else if(  $(window).scrollTop() <= con.scroll){
        $('.shortcut').removeClass('navshow');
        $('.side-contact').removeClass('Show');
    }  
})
