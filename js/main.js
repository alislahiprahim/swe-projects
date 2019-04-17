//navgation bar

$(window).scroll(function(){
    
    var wscroll = $(window).scrollTop();
    if (wscroll > 150)
        {
            $(".navbar").css("height","100");
            $(".contact h1").css("color","rgba(0,0,0,.3)");
        }
    else
        {
            $(".navbar").css("height","140");
            $(".contact h1").css("color","#fff");

        }
})

//scroll top button


$(".scrolltop").click(function(){
    
    $("body").animate({scrollTop:'0'},600)
})

$(window).scroll(function(){
    
    var bscroll = $(window).scrollTop();
    if (bscroll < 250)
        {
            $(".scrolltop").hide(300);
        }
    else
        {
            $(".scrolltop").show(300);

        }
})
