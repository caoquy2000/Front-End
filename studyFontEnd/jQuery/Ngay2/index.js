$(document).ready(function(){
    let a ;
    // demo get
    // $(".sub").click(function(){
    //     // alert("Text lấy được là: " + $(".demoText").text());
    //     // a = $(".demoText").html();
    //     // alert("html: " + a);
    //     // alert("val: " + $("#test").val());
    //     // alert("style: "+ $(".demoText").attr("style"));
    //     // $(".demoText").css("color","blue");
    // });

    // demo set
    // $(".sub").click(function(){
    //     // $(".demoText").text("Hello dit me may");
    //     // $(".demoText").html("<p>Hello <strong>dit</strong> me may</p>");
    //     $("#test").val("Ma may");

    // });


    // callBack trong set
    // $("#btn1").click(function(){
    //     $("#test1").text(function(i,origText){
    //         return "Old text: " + origText + "hello world index : " + i ;
    //     });

    //     $("#test2").html(function(i,origText){
    //         return "Old text: " + origText + "<b>hello</b> world index : " + i ;
    //     });
    // });

    // $("#btn2").click(function(){


    //     $("#test2").html(function(i,origText){
    //         return "Old text: " + origText + "<b>hello</b> world index : " + i ; 
    //     });
    // });

    // $("#btn1").click(function(){
    //     $("p").append(" Hello he he");
    //     // $("p").prepend(" Hello he he");

    // });
    // $("#btn2").click(function(){
    //     $("ol").append("<li>Hello</li>");
    //     // $("p").prepend(" Hello he he");
        
    // });

    // Add Several 
    // $("#btn1").click(function(){
    //     $("img").before("<b>Before</b>");
    // })
    // $("#btn2").click(function(){
    //     $("img").after("<p class='hello'>AFTER</p>");
    // })


    // Jquery Dimensions
    $("button").click(function(){
        var txt="";    //pool
        txt += "Width of div" + $("#div1").width() + "</br>";
        txt += "height of div" + $("#div1").height() + "</br>";

        txt += "Width of document" + $(document).width() + "</br>";
        txt += "height of document" + $(document).height() + "</br>";

        txt += "Width of window" + $(window).width() + "</br>";
        txt += "height of window" + $(window).height() + "</br>";
    
        $("#div1").html(txt);
        $("#div1").width(500).height(500);
    });
    
});

function appendText(){
    var txt1 = "<p>Text</p>"; // create text With html

    var txt2 = $("<p></p>").text("Text"); //tạo text with jquery

    var txt3 = document.createElement("p");
    txt3.innerHTML="Text"; //text with doom
    $("body").append(txt1,txt2,txt3);
};

