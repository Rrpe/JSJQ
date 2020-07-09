$(function(){
    console.log("connect complete..")

    var duration = 300;

    var aside = $('.page-main > aside');
    var asideButton = aside.find('button');

    asideButton.on('click', function(){
        console.log('button click..');
        
        var att = $(this).attr('class');
        console.log('button class의 속성값 변경 전: '+att);

        $(this).attr('class', '속성값을 바꾸기');
        console.log('button class의 속성값 변경 후: '+att);

        aside.toggleClass('open');
        if (aside.hasClass('open')) {
            aside.stop().animate({
                'left': '-70px'
            }, duration);

            // 이미지 변경
            asideButton.find('img').attr('src', 'img/btn_close.png');
        } else {
            aside.stop().animate({
                'left': '-350px'
            }, duration);

            // 이미지 변경
            asideButton.find('img').attr('src', 'img/btn_open.png');
        }
    });


    // asideButton.on('click', function(){
    //     $('#add').addClass('on');
    //     $('#remove').removeClass('test');
    //     $('#toggle1').toggleClass('ok');
    //     $('#toggle2').toggleClass('ok');
    //     var test = $('#has').hasClass('ok');
    //     console.log("hasClass result: "+test)
    // })
});

/* 

addClass()
    : class 속성값을 추가

removeClass()
    : class 속성값을 삭제

hasClass()
    : class 속성값 유무판단(true/false)

toggleClass()
    : class 속성값 있으면 삭제, 없으면 추가(addClass()+removeClass()+hasClass())

attr(), attr(속성, 속성값)
    : 선택자의 속성값 추출 및 변경

*/