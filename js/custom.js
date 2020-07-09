$(document).ready(function () {

    $("#header").load("header.html"); /* Header load */
    $("#footer").load("footer.html"); /* Footer load */

    $( ".menu_icon" ).on( "click", function() { /* menu open */
        $('.menu_overlay').fadeIn();
    });
    $( ".close_overlay_view span" ).on( "click", function() { /* menu close  */
        $('.menu_overlay').fadeOut();
    });
    $('.home_banner, #the-trinity, #our_respon_slider, #tcb-testimonial-carousel2').owlCarousel({ /* home top slider */
        loop:true,
        items:1,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:8000
    });
    $('#tcb-testimonial-carousel1').owlCarousel({ /* testimonaial slider js for home page */
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:8000,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    $('#our_awards').owlCarousel({ /* Our Awards slider js for about us page */
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    $('.celebration-slider').owlCarousel({ /* Life at Prompt slider */
        loop:true,
        items:1,
        margin:10,
        nav:true,
        dots:false,
        autoplay:false,
        autoplayTimeout:8000
    });
    $('.all_screen').owlCarousel({
        center: true,
        items:1,
        loop:true,
        autoplay:true,
        margin:10,
        responsive:{
            992:{
                items:1 
            }
        }
    });
    $('#bmc_smart_box').owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2 
            }
        }
    });
    
    $('#blog_time_view').owlCarousel({ /* blog_time_view slider js for about us page */
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
    
    
    
    // $('#our-aim, #the-trinity, #our_respon_slider').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     autoPlay: true,
    //     margin: 10,
    //     responsiveClass: true,
    //     pagination: true,
    //     dots: true
    // });

    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
    $('.tab_view .btn').click(function(){
        $('.tab_view .btn').removeClass("active");
        $(this).addClass("active");
    });

    /*portfolio script*/
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#portfolio-gallery").fadeTo(100, 0.1);
        $("#portfolio-gallery .portfolio-card").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#portfolio-gallery").fadeTo(300, 1);
        }, 300);
    });
    $('.tab_view .btn').click(function(){
        $('.tab_view .btn').removeClass("active");
        $(this).addClass("active");
    });


});

$(window).scroll(function() { /* header sticky on page scroll */
    if ($(this).scrollTop() > 100){  
        $('.header_view').addClass("sticky");
    }
    else{
        $('.header_view').removeClass("sticky");
    }
});


$(window).on('scroll', function () { /* page top scroll js  start */
    if ($(this).scrollTop() > 100) {
        $('.scroll-to-up').fadeIn();
    } else {
        $('.scroll-to-up').fadeOut();
    }
});
$('.scroll-to-up').on("click", function () {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
    return false;
});

$(window).on('load', function () { /* page loader js start */
    //$(".preloader").fadeOut(5000);
    $(".preloader").fadeOut("slow");
});  

 