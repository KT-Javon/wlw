$(function(){
    //获取要定位元素距离浏览器顶部的距离
    var navH = $(".logonav").offset().top;
    // console.log(navH);
    //滚动条事件
    $(window).scroll(function(){
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        // console.log(scroH);
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if(scroH>=navH){
            $(".logonav").css({"position":"sticky","top":0});
        }else if(scroH<navH){
            $(".logonav").css({"position":"static"});
        }
     })
});