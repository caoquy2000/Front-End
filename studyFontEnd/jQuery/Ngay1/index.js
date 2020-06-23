$(document).ready(function(){
   
    // $(".btn").click(function(){
    //     $("p").css("background-color", "red");
    // });


    // $("p").on("click", function(){
    //     $(this).hide(1000);
    // });

    // $("p").on({
    //     mouseenter: function(){
    //         $(this).hide();
    //     },
    //     mouseleave: function(){
    //         $(this).hide();
    //     }
    // });

    // $(".btn").click(function(){
    //     // $("p").toggle(1000);
    //     // $(".haha").fadeOut();
    //     // $(".haha").fadeOut("slow");
    //     // $(".haha").fadeOut(3000);
    //     $(".haha").fadeToggle();
    // });

    // $(".btn-slide").click(function(){
    //     $(".slideDemo").slideToggle();
    // });


    // $(".btn-animate").click(function(){
    //     $(".animateDemo").animate({
    //         left: '150px',
    //         height: '+=150px',
    //         width: '+=150px',
    //         // height: 'toggle',
    //     },"fast");
        
    // });

    // $(".start").click(function(){
    //     $(".demoStop").slideDown(5000);
    // });
    // $(".stop").click(function(){
    //     $(".demoStop").stop();
    // });

    // $(".start").click(function(){
    //     $(".demoStop").hide("slow",function(){
    //         alert("thằng này tàng hình rồi");
    //     });
    // });
    // $(".stop").click(function(){
    //     $(".demoStop").stop();
    // });

    // Chaining
    $(".start").click(function(){
        $(".demoStop").slideUp(2000).slideDown(2000).fadeOut(1000);
    });

});


// $("selector").action();


// event: click
/*  dblclick
    mouseenter
    mouseleave
    hover

        keypress
        keydown
        keyup

            submit
            change
            focus
            blur:focus
                load
                resize
                scroll
                upload
*/ 

// effect: show hide


// Sliding

