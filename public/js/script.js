$(document).ready(function () {
    new WOW().init();
    
})
$(function(){
    var $gotop = $('#gotop') ,
        goSpeed = 800 ;
     
    $gotop.click(function(e) {
        $('html , body').animate({scrollTop:0} , goSpeed);
    });

    $('#gotop').mouseenter (function(){
        $(this).addClass('animate__animated animate__headShake');
        $('.gt').addClass('animate__animated animate__bounceInUp');
        $(this).css('box-shadow', '0px 6px 13px 0px rgba(9,9,82,1)');
    });

    $('#gotop').mouseleave (function(){
        $(this).removeClass('animate__animated animate__headShake ');
        $('.gt').removeClass('animate__animated animate__bounceInUp');
        $(this).css('box-shadow', 'none');
    });
///////////nav以下//////////// 
    $('.lk01').mouseenter (function(){
        $('#ca').addClass('choose');
        $('#nw01').css('font-weight','bold');
    });
    $('.lk01').mouseleave (function(){
        $('#ca').removeClass('choose');
        $('#nw01').css('font-weight','normal');
    });

    $('.lk02').mouseenter (function(){
        $('#cb').addClass('choose');
        $('#nw02').css('font-weight','bold');
    });
    $('.lk02').mouseleave (function(){
        $('#cb').removeClass('choose');
        $('#nw02').css('font-weight','normal');
    });

    $('.lk03').mouseenter (function(){
        $('#cc').addClass('choose');
        $('#nw03').css('font-weight','bold');
    });
    $('.lk03').mouseleave (function(){
        $('#cc').removeClass('choose');
        $('#nw03').css('font-weight','normal');
    });



});
