$(function(){
    console.log("Connection.....")

    // article 개수 변수에 저장
    var arcNum = $("article").length;

    var secWid = arcNum*200;

    var totalWid = secWid+600;

    $("section").width(totalWid);
    $("html, body").height(secWid);

    // 스크롤 이벤트
    $(window).on("scroll", function(){
        // 윈도우(브라우저) 스크롤 값을 추출
        var scrollT = $(this).scrollTop();
        console.log("scrolling..!" + scrollT);
        $("section").stop().animate({
            "left": -(scrollT)
        }, 500)
    });

    // 0 artwork 01
    // 1001 artwork 06
    // 1998 artwork 11
    // 2998 artwork 16

    // 메인 콘텐츠 이벤트
    $("article > h2").on("click", function(e){
        e.preventDefault(); // 기본 동작(이벤트) 중지
        console.log("h2 click..");

        // .next():다음 .prev():이전 .eq(index):배열순서 .parent():부모 .children():자식 .siblings():같은레벨태그 => 직접 어셉스
        // this(h2)가 소속되어있는 .parent()(부모)의 index(순서)
        var index = $(this).parent().index();
        console.log("article index: " + index);

        $("article").removeClass("on");
        $(this).parent().addClass("on");

        // img url 초기화
        $("article > p > img").attr({
            "src": ""
        });

        // a href 값 변수에 저장
        // .children() = .find()
        var imgsrc = $(this).children("a").attr("href");

        // img url에 imgsrc 입력
        // .siblings() = 같은 자식 레벨에 있는 요소 찾기
        /* $("article > p > img").attr({
            "src": imgsrc
        }); */
        $(this).siblings("p").children("img").attr({
            "src": imgsrc
        })

        // 메인 컨텐츠 누를 때 마다 화면 왼쪽에 딱 맞게 펼쳐짐
        var posAc = index * 200;
        $("html, body").scrollTop(posAc);
        
    });

    $("span").on("click", function(){
        $("article").removeClass("on");
    });

    $("#menu li").on("click", function(){
        var i = $(this).index();
        var posM = 1000*i;

        $("html, body").scrollTop(posM);

        // $("#menu > li").removeClass("on");
        // $(this).addClass("on");

        $("#menu li, article").removeClass("on");
        $(this).addClass("on");
        
    });

});