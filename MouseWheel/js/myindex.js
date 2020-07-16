$(function () {
    console.log("Connection..");

    // 윈도우 (browse) 창의 정보(height 값)를 추출해서 section의 height설정

    var ht = $(window).height();
    // console.log("window height: " + ht);

    /* $('section').height('250');
    var test = $('section').height();
    console.log("current section height: " + test); */

    $('section').height(ht);

    // 윈도우 리사이즈 발생시 (페이지 크기 변경 시)
    // 크기 조절 시 자동으로 맞춰줌
    $(window).on('resize', function () {
        console.log('resize..');

        var htt = $(this).height();
        // console.log("window resize hegiht: " + ht);
        $('section').height(htt);

    });

    // 메뉴(카테고리 항목) 버튼 클릭 시 페이지 전환
    /* $('html, body').stop().animate({
        "scrollTop": (ht*2)
    }, 1000); */

    // 레이아웃의 높이가 각각 다를때
    // var arr_ht = [0, 800, 1300, 1800];

    $('.menu li').on('click', function () {
        var index = $(this).index();
        var top = index * ht;

        /* $('html, body').stop().animate({
            "scrollTop": top
        }, 1400); */

        var sec_ht = [];
        $('#wrap > section').each(function (index) {
            // console.log('section index: ' + index);

            sec_ht[index] = $(this).offset().top;
            // console.log('section: ' + ", height: " + sec_ht[index]);
        });

        $('html, body').stop().animate({
            "scrollTop": sec_ht[index]
        }, 1400);



        /* $('html, body').stop().animate({
            "scrollTop": top
        }, 1000, "easeOutBounce"); */

        /* 3번째 방식 : 
        $('선택자').offset().top;
         : 문서의 맨위에서 부터 떨어진 거리
        $('선택자').offset().left;
         : 문서의 맨오른쪽에서 부터 떨어진 거리 */
        // var h1 = $('section:nth-child(3)').offset().top;
        // console.log('.offset().top: ' + h1)

        /* $('.menu li').removeClass('on');
        $(this).addClass('on'); */
    });

    var sec_ht = [];
    $('#wrap > section').each(function (index) {

        sec_ht[index] = $(this).offset().top;
        // console.log('section: ' + ", height: " + sec_ht[index]);
    });

    $(window).on('scroll', function () {
        var ht = $(window).height();

        var win_scroll = $(window).scrollTop();

        // 좌측 메뉴바 각 레이아웃 범위 변경 시 마다 글자 크기 확대
        for (var i = 0; i < 4; i++) {
            // if (win_scroll >= ht*i && win_scroll < ht*(i+1)) {
            if (win_scroll >= sec_ht[i] && win_scroll < sec_ht[i + 1]) {
                $('.menu li').removeClass('on');
                $('.menu li').eq(i).addClass('on');
            } else if (win_scroll >= sec_ht[i]) {
                $('.menu li').removeClass('on');
                $('.menu li').eq(i).addClass('on');
            }
        }
        
        /* 
        // 사용하기 어려운 방식
        // 마지막 section 높이 구함
        var test2 = $("#wrap section:last-child").height();

        // 배열 추가
        // 배열 요소의 마지막 인덱스 번호 추출
        var last_index = sec_ht.length-1;
        // 마지막 section의 범위 추출하기 위해 임의로 배열 요소 하나 추가
        // ex) 배열 요소 4개로 구성되있으면 push를 통해 5개로 됨
        sec_ht.push(sec_ht[last_index]+test2);
        // sec_ht의 length값은 4. -1하는 이유는 sec_ht[4-1]을 만들기 위함. push를 통해 sec_ht[4]에
        */

        /*  
        // 쌩 노가다 방식
        if (win_scroll >= sec_ht[0] && win_scroll < sec_ht[1]) {
             $('.menu li').removeClass('on');
             // $('.menu li:nth-child(1)').addClass('on');
             $('.menu li').eq(0).addClass('on');
             // console.log('첫번째 section 입니다.');
         } else if (win_scroll >= sec_ht[1] && win_scroll < sec_ht[2]) {
             $('.menu li').removeClass('on');
             // $('.menu li:nth-child(2)').addClass('on');
             $('.menu li').eq(1).addClass('on');
             // console.log('두번째 section 입니다.');
         } else if (win_scroll >= sec_ht[2] && win_scroll < sec_ht[3]) {
             $('.menu li').removeClass('on');
             // $('.menu li:nth-child(3)').addClass('on');
             $('.menu li').eq(2).addClass('on');
             // console.log('세번째 section 입니다.');
         } else if (win_scroll >= sec_ht[3] && win_scroll < (sec_ht[3] + 1000)) {
             $('.menu li').removeClass('on');
             // $('.menu li:nth-child(4)').addClass('on');
             $('.menu li').eq(3).addClass('on');
             // console.log('네번째 section 입니다.');
         } 
         */

        // jquery.mousewheel.min.js 필요
        // Mouse Wheel Event
        // .eq(index), .prev(): 이전 index 배열, .next(): 다음 index 배열
        $("section").on('mousewheel', function(event, delta) {
            // var i = $(this).index();
            // console.log("mouse wheel index: " + i);
            // var prev_index = $(this).prev().index();
            // var next_index = $(this).next().index();
            // var curr_index = $(this).index();

            var curr_index = $(this).index();
            var len = $("section").length;
            if (delta < 0) {
                // 마우스 휠 내릴때 -1
                var down = $(this).next().offset().top;
                console.log("down: " + down);

                if (curr_index < len-1) {

                    $("html, body").stop().animate({
                        "scrollTop": down
                    }, 1400, "easeOutBounce");
                }

            } else if (delta > 0) {
                // 마우스 휠 올릴때 +1
                var up = $(this).prev().offset().top;
                console.log("up: " + up);

                if (curr_index > 0) {
                    $("html, body").stop().animate({
                        "scrollTop": up
                    }, 1400, "easeOutBounce");
                }
            }
        });

    });

});