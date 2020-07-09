$(function(){
    console.log("Connect Success!")

    const x = 300;

    // 첫번째 줄 버튼
    $("#buttons1 button:nth-child(1)")
    .on("mouseenter", function(){
        // console.log('mouserover');
        $(this).stop(true).animate({
            'background-color': '#AC58FA',
            'color': '#F5F5F5'
        }, x);
    })
    .on('mouseout', function(){
        // console.log('mouserout');
        $(this).stop(true).animate({
            'background-color': '#FFFFFF',
            'color': '#EBC000'
        }, x);
    });

    // 두번째 줄 버튼
    $("#buttons1 button:nth-child(n+5):nth-child(-n+8")
    .on("mouseenter", function(){
        $(this).stop(true).animate({
            'border-width': '12px',
            'color': '#AE5E9B'
        }, x, 'easeOutSine');
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            'border-width': '0px',
            'color': '#EBC000'
        }, x);
    });

    // 세번째 줄 버튼
    $("#buttons1 button:nth-child(9)")
    .on('mouseover', function(){
        $(this).find('>span').stop(true).animate({
            // 'width': '100%',
            'width': '100%'
        }, x, 'easeOutQuad');
    })
    .on('mouseout', function(){
        $(this).find('>span').stop(true).animate({
            'width': '0%'
        }, x);
    });

});

/* 

:nth-child(n) : 수열n은 인덱스 번호를 지칭
:nth-child(1) : 숫자 1은 위치를 의미
:nth-child(n+1) : (n+1) => n은 인덱스번호 + 1 => 계산결과는 위치

.find() => 현재요소에 기준으로 후손 및 자손 검색
: jQuery객체에 포함된 각 요소의 하위 요소 선택자를 통해 효과를 적용
ex)
var same1 = $('#buttons1 button > span');
var same2 = $('#buttons1 button).find('>span');
var same3 = $('#buttons1').find('button').find('>span');

*/