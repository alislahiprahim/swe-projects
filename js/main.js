//navgation bar

$(window).scroll(function(){
    
    var wscroll = $(window).scrollTop();
    if (wscroll > 150)
        {
            $(".navbar").css("height","100");
            $(".contact h1").css("color","rgba(0,0,0,.3)");
             $(".navbar-nav2 i").css("color","rgba(42, 42, 42, 0.7)");
        }
    else
        {
            $(".navbar").css("height","140");
            $(".contact h1").css("color","#fff");

            $(".navbar-nav2 i").css("color","rgba(0,0,0,1)");
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


// room home slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
