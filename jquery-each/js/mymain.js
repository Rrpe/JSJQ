$(function () {
    console.log("Connect..")

    var duration = 300;

    // $('#buttons2 button').each().on().on();
    $('#buttons2 button').each(function (index) {
            console.log('button을 순차적으로 호출함.' + index);

            var pos = index * 40 - 40;
            console.log('pos: ' + pos);

            $(this).css({
                'top': pos
            });
        })
        .on('mouseenter', function () {
            console.log($(this).index());

            // 지역변수
            var btn = $(this).stop(true).animate({
                'background-color': '#ff0',
                'color': '#333'
            }, duration);

            btn.find('img:nth-child(1)').stop(true).animate({
                'opacity': 0
            }, duration);
            btn.find('img:nth-child(2)').stop(true).animate({
                'opacity': 1
            }, duration);

        })
        .on('mouseleave', function () {
            console.log($(this).index());

            // 지역변수
            var btn = $(this).stop(true).animate({
                'background-color': '#fff',
                'color': '#01b169'
            }, duration);

            btn.find('img:nth-child(1)').stop(true).animate({
                'opacity': 1
            }, duration);
            btn.find('img:nth-child(2)').stop(true).animate({
                'opacity': 0
            }, duration);

        });

    /* $('#buttons2 button')
    .on('mouseenter', function(){
        console.log($(this).index());
        $(this).stop(true).animate({
            'background-color': '#ff0'
        }, 400);
    })
    .on('mouseleave', function(){
        $(this).stop(true).animate({
            'background-color': '#fff'
        }, 400);
    }); */

});

/* 

.each(function(index, item){...})
$.each(객체, function(index, item){...});
객채에 포함된 각 요소에 개별적인 작업을 실행하는 메서드

1. 일괄처리
2. 기준점을 정의 할 경우

.index(): 객체 순서를 알려줌

*/