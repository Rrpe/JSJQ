$(function () {
    console.log("Connect...");

    $(".slideshow").each(function () {
        // 변수 설정 (태그요소를 변수에 보관)
        var $slideShow = $(this);
        var $slideGroup = $slideShow.find(".slideshow-slides");
        var $slide = $slideGroup.find(".slide");
        var $nav = $slideShow.find(".slideshow-nav");
        var $indicator = $slideShow.find(".slideshow-indicator");

        // 일반 변수
        var slideCount = $slide.length,
            indicatorHTML = "",
            currentIndex = 0,
            duration = 500,
            easing = "easeInOutExpo",
            interval = 3000,
            timer;

        // 각 슬라이드 위치 및 html요소 생성 및 삽입
        $slide.each(function (index) {
            $(this).css({
                "left": 100 * index + "%"
            });

            // a 태그 생성
            indicatorHTML += '<a href="#">' + index + "</a>";

        });

        // .html() : 태그요소로 입력
        // .text() : 글자로 입력
        // $indicator.text(indicatorHTML);
        $indicator.html(indicatorHTML);


        // ----------------------- // 
        // 기능별로 함수 정의
        // ----------------------- // 

        // 화면 표시 (슬라이드 표시)기능
        function goToSlide(index) {
            $slideGroup.animate({
                "left": -100 * index + "%"
            }, duration, easing);

            // 전역 변수에 지역 변수 값 저장
            currentIndex = index;

            // 화면 상태(위치) 함수 호출
            updateNav();
        }

        // 화면 상태(위치)에 따른 네비게이션 및 인디게이트 업데이트
        function updateNav() {
            var $navPrev = $nav.find(".prev");
            var $navNext = $nav.find(".next");

            // 첫번째 슬라이드 이면 왼쪽 버튼 감추기
            if (currentIndex == 0) {
                $navPrev.addClass("disabled");
            } else {
                $navPrev.removeClass("disabled");
            }

            // 마지막 슬라이드 이면 오른쪽 버튼 감추기
            if (currentIndex == slideCount - 1) {
                $navNext.addClass("disabled");
            } else {
                $navNext.removeClass("disabled");
            }

            // 현재 슬라이드 인덱스 번호와 인디게이트 인덱스 번호 매칭
            $indicator.find("a").removeClass("active").eq(currentIndex).addClass("active");
        }

        // 기능별 작동하는 함수
        // 화살표 a링크의 click이벤트 시 
        $nav.on("click", "a", function(e){
            e.preventDefault(); // 내장된 이벤트 중지

            if ($(this).hasClass("prev")) {
                goToSlide(currentIndex-1);
            } else {
                goToSlide(currentIndex+1);
            }
        });

        // 인디게이트 클릭 시 해당 슬라이드 표시
        $indicator.on("click", "a", function(e){
            e.preventDefault();

            if (!$(this).hasClass("active")) {
                goToSlide($(this).index());
            }
        });

        // 타이머 시작 함수
        function startTimer() {

            // 일정한 시간마다 반복하여 호출하는 함수 callback함수
            // setInterval(function(){...}, 1000)
            // setInterval(goToslide, 1000);
            timer = setInterval(function(){
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, 3000);
        }

        // 타이머 종료 함수
        function stopTimer() {
            // 타이머 중지 함수
            clearInterval(timer);
        }

        // 마우스 오버(중지) 및 아웃(작동)
        $slideShow.on({
            mouseenter: stopTimer,
            mouseleave: startTimer

            // mouseover: function() {},
            // mouseout: function() {}
        });

        // 화면(슬라이드)장면 전환
        goToSlide(currentIndex);

        // 타이머 작동
        startTimer();

    });

}); // load()

/* myindex에 slideshow-slides에 있는 a href="./"가 적용된 image등 하이퍼링크를 클릭 시 ./는 자기 폴더에서 index.html 을 먼저 찾아 페이지를 전환 시킴. 없으면 폴더 확인 창이 등장함. */