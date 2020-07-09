$(function () {
    console.log("Connection..");

    // 윈도우 (browse) 창의 정보(height 값)를 추출해서 section의 height설정

    var ht = $(window).height();
    // console.log("window height: " + ht);

    /* $('section').height('250');
    var test = $('section').height();
    console.log("current section height: " + test); */

    $('section').height(ht);

    // 윈도우 리사이즈 발생시
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

        $('html, body').stop().animate({
            "scrollTop": top
        }, 1400);

        /* var sec_ht = [];
        $('#wrap > section').each(function (index) {
            // console.log('section index: ' + index);

            sec_ht[index] = $(this).offset().top;
            // console.log('section: ' + ", height: " + sec_ht[index]);
        });

        $('html, body').stop().animate({
            "scrollTop": sec_ht[index]
        }, 1400); */



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

    /* $('.menu li').on('click', function () {
        $('.menu li').removeClass('on');
        $(this).addClass('on');
    }); */

    var sec_ht = [];
    $('#wrap > section').each(function (index) {

        sec_ht[index] = $(this).offset().top;
        // console.log('section: ' + ", height: " + sec_ht[index]);
    });

    $(window).on('scroll', function () {
        var ht = $(window).height();

        var win_scroll = $(window).scrollTop();

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
        /* $("section").on("mousewheel", function (event, delta) {

            //마우스 휠을 올렸을때	
            if (delta > 0) {
                //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
                var prev = $(this).prev().offset().top;
                //문서 전체를 prev에 저장된 위치로 이동
                $("html,body").stop().animate({
                    "scrollTop": prev
                }, 1400, "easeOutBounce");

                //마우스 휠을 내렸을때	 
            } else if (delta < 0) {
                //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
                var next = $(this).next().offset().top;
                //문서 전체를 next에 저장된 위치로 이동
                $("html,body").stop().animate({
                    "scrollTop": next
                }, 1400, "easeOutBounce");
            }

        }); */
        clear();
    });

});