jQuery(function($){
    $.fn.extend({
        scrollToMe: function(){
            if($(this).length){
                var top = $(this).offset().top - 100;
                $('html,body').animate({scrollTop: top}, 300);
            }
        },
        scrollToJustMe: function(){
            if($(this).length){
                var top = jQuery(this).offset().top;
                $('html,body').animate({scrollTop: top}, 300);
            }
        }
    });
    
    $(".main-nav a").off("click").on("click", function(){
        var url = $(this).attr("href");
        if(url.indexOf("#") > -1) {
            $(url).scrollToMe();
            return false;
        }
    });
    
    var windowScroll_t;
    $(window).scroll(function(){
        clearTimeout(windowScroll_t);
        windowScroll_t = setTimeout(function(){
            if(jQuery(this).scrollTop() > 100){
                $('#totop').fadeIn();
            }else{
                $('#totop').fadeOut();
            }
        }, 500);
    });
    $('#totop').off("click").on("click",function(){
        $('html, body').animate({scrollTop: 0}, 600);
    });
    $(".nav>li a.open-child").off("click").on("click",function(){
        if(!$(this).parent().children("ul").hasClass("opened")) {
            $(this).parent().children("ul").addClass("opened").slideDown();
            $(this).children("i.fa").removeClass("fa-plus-square-o").addClass("fa-minus-square-o");
        } else {
            $(this).parent().children("ul").removeClass("opened").slideUp();
            $(this).children("i.fa").removeClass("fa-minus-square-o").addClass("fa-plus-square-o");
        }
    });
});