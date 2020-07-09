$(function(){
    console.log("Conection...")

    $('.btnMenu').on('click', function(){
        console.log('menu click');

        // 버튼 숨기기
        $(this).fadeOut();
        // $(this).slideUp();
        // $(this).hide();

        $('section').addClass('on');
        $('nav').addClass('on');
    });

    $('nav li').on('click', function(){
        console.log("menu item click");

        $('.btnMenu').fadeIn();
        $('section').removeClass('on');
        $('nav').removeClass('on');

        var i = $(this).index();
        console.log('li index: '+i);

        $('section > div').removeClass('on');
        $('section > div').eq(i).addClass('on');
    });
});


/* 

요소 보이기/숨기기
.fadeIn(), .fadeOut()   // opacity
.show(), .hide()    // display: none
.slideDown(), .slideUp()    // 

*/