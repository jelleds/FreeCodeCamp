$(window).scroll(function(){
    var top=$(window).scrollTop();
        if(top > 100){
                $("#header").stop().animate({height: '5vh'}, "slow");
            }else{
                $("#header").stop().animate({height: '11vh'}, "slow");
        }
    })