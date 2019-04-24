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
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});









