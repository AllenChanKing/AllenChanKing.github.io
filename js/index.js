$(function(){
    var video = document.getElementById('video');
    var bgm = document.getElementById('bgm');
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: false,
        speed:800,
        onInit: function(swiper){
            // swiper初始化完成关闭加载动画
            $(".spinner").delay(2000).fadeOut();
        },
        onSlideChangeStart: function(swiper){
            // 非第一屏时将视频暂停
            if(swiper.activeIndex>0){
                video.pause();
                $(".cover").fadeIn();
            }
        },

    });
    
    // 动态设置视频高度
    $(video).height($(window).height());

    // 点击播放按钮 播放视频 隐藏播放按钮
    $(".cover").on('click',function(){
        var _this = this;
        video.play();
        $(_this).fadeOut();
    });

    // 点击视频 暂停播放 显示播放按钮
    $("#video").on('click',function(){
        var _this = this;
        video.pause();
        $(".cover").fadeIn();
    });

    // 监听视频结束，当视频播放结束显示视频播放按钮
    video.addEventListener("ended",function(){
        $(".cover").fadeIn();
    });

    // 点击音乐图标暂停/播放音乐
    $(".disk").on('click',function(){
        var _this = this;
        if(bgm.paused){
            bgm.play();
            $(_this).removeClass("paused");
        }else{
            bgm.pause();
            $(_this).addClass("paused");
        }
    });


        
})