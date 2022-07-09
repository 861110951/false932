// <!-- 封装swiper方法 参数要有：
// 1）轮播的区域：  内容应该为一个数组 数组中的每一项为每次轮播的内容（DOM元素）
//     list: [dom, dom]
// 2) 尺寸： width, height
// 3) 轮播的方式： type:  'animation'(从左到右的轮播) 'fade' (淡入淡出的轮播)
// 4）是否自动轮播： autoChange: true （自动轮播） false （不自动轮播）
// 5）自动轮播时间： autoTime
// 6) 是否展示小圆点: showSpotBtn : true （展示） false（不展示
// 7）是否展示左右按钮：  showChangeBtn: 'always', 'hover', 'hidden'
// 8) 小圆点的位置： spotPosition： 'left'， 'right', 'center'
// -->
$('.plugin').swiper({
    list:$('.plugin-item'),
    type:'fade',
    autoChange: true,
    autoTime:2000,
    showSpotBtn: true,
    showChangeBtn: 'always',
    spotPosition: 'center'
})
