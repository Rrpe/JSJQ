$(function () {
    console.log("Connection...")

    $(".slideshow").each(function (index) {

        // 1. 슬라이드 개수 파악
        var $slides = $(this).find("img");
        var slideCount = $slides.length

        // 2. 슬라이드 인덱스 번호 0으로 설정
        var currentIndex = 0;

        // 3. 첫번 째 슬라이드 표시
        $slides.eq(currentIndex).fadeIn(3000);

        // 슬라이드 쇼 기능 함수 호출
        setInterval(showNextSilde, 2000);
        //setInterval(function(함수정의, 호출), ms(반복호출시간));


        // 다음 슬라이드를 표시하는 함수
        function showNextSilde() {
            var nextIndex = (currentIndex + 1) % slideCount;
            console.log("cur: " + currentIndex + ", next: " + nextIndex);

            // 현재 슬라이드 숨기기
            $slides.eq(currentIndex).fadeOut(3000);

            // 다음 슬라이드 표시
            $slides.eq(nextIndex).fadeIn(3000);

            // 현재 슬라이드 번호 갱신
            currentIndex = nextIndex;

            // if(currentIndex == 4) {
            //     currentIndex = -1;
            // }
        };

        // 4. 함수 호출
        // showNextSilde(console.log("currentIndex : " + currentIndex));
        // showNextSilde(console.log("currentIndex : " + currentIndex));
        // showNextSilde(console.log("currentIndex : " + currentIndex));

    });

});