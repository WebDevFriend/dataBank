import $ from "jquery";

$( function() {

// left-sidebar tabs---------------------
    $(".content-wrap").css({
        display: "none",
        opacity: "1"
    });
    $(".content-object img").css({
        opacity: "1"
    });
    $("#directory").css({
        display: "block"
    });
    $(".left-sidebar__menu a").click(function(e) {
        e.preventDefault(),
            $(".left-sidebar__menu .active").removeClass("active"),
            $(this).addClass("active");

        var i = $(this).attr("href");
        $(".content-wrap").not(i).css({
            display: "none"
        }),
            $(i).fadeIn()
    })
    
});