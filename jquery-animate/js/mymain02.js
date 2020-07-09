$(function(){
    console.log("jQuery Ok")

    // 스타일 속성이 1개일 경우
    // $('#typo').css('color', '#ebc000');
    // $('#typo .inner').css('transform', 'rotate(10deg)');
    // $('.page-main > div:nth-child(1) .inner').css('opacity', 0.5);
    // $('.copyright').css('color', '#ff0000')

    // 스타일 속성이 2개 이상일 경우 : css( {'name': 'value', ... } );
    /* $('#typo').css({
        'color': 'red',
        'background-color': '#ae5e9b',
        'font-size': '50px'
    }) */

    /* $('#typo').css({
        color: 'red',
        backgroundColor: '#ae5e9b',
        fontSize: '50px'
    });
 */

    // 실햄시점 Test
    // .on: 이벤트 처리 시 실행 시점을 만듦
    /* $('#typo').on('dblclick', function(){
        $('#typo .inner').css('color', 'blue');
        alert('현재시간은'+Date()+'입니다');
    });

    $('#typo').click(function(){
        $('#typo .inner').css('color', 'purple');
    });

    $('#typo').keyup(function(){
        $('#typo .inner').css('color', 'yellow');
    }) */

    // var x;
    // x = Attr(script);

    // $('#typo').on('mouseover', function(){
    //     $('#typo').css({
    //         'color': '#ebc000',
    //         'background-color': '#ae5e9b'
    //     })
    //     // alert(Date());
    // });

    // $('#typo').on('mouseout', function(){
    //     $('#typo').css({
    //         'color': '#f5f5f5',
    //         'background-color': '#555555'
    //     })
    //     // alert(Date());
    // });

    // $('#typo').on('dblclick', function(){
    //     alert('x');

    // });

    // 메소드 체인
    // $('선택자').메서드A().메서드B().메서드C()......
    // var x = '#typo';

    // $(x)
    // .css({
    //     'font-size': '12px'
    // })
    // .on('mouseenter', function(){
    //     $(this).css({
    //         'color': '#ebc000',
    //         'background-color': '#ae5e9b'
    //     });
    // })
    // .on('mouseleave', function(){
    //     $(this).css({
    //         'color': '',
    //         'background-color': ''
    //     });
    // });


    // 애니메이션 : .animate();
    // .animate({스타일속성}, 수행시간, 가속함수 ||(자주사용), 애니메이션 동작 후 수행할 내용);

    /* $('#typo .inner')
    .on('mouseover', function(){
        $(this).stop().animate({
            'font-size': '50px'
            // 'color': '#ebc000',
            // 'background-color': '#ae5e9b'
        }, 2000);
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            'font-size': '100px'
            // 'color': '#f5f5f5',
            // 'background-color': '#555555'
        }, 2000);
    }); */

    $('#typo .inner')
    .css({
        'top': '-100px'
    })
    .on('click', function(){
        $(this).animate({
            'top': '100px',
            'color': 'blue'
        }, 1500, 'linear', function(){
            $(this).animate({
                'top': '0px',
                'color': '#f5f5f5'
            }, 500);
        });
    });

});


/* 

$('선택자(ID)).css('스타일 속성', '속성 값');

실행 시점
1. 대상: $("속성 이름 & ID 이름 & Class 이름")
2. 실행시점: 이벤트 동작 ('click', ...)
3. 수행할 내용: function(){}

주요 이벤트 타입
mouseover, mouseenter : 요소에 마우스 포인터를 올려놓았을 때
mouseout, mouseleave : 요소에 마우스 포인터가 벗어났 때
mousedown : 요소에 클릭할 때
mouseup : 요소에 클릭했다가 땔 때
mousemove : 요소 안에서 마우스 포인터를 움직일 때
click : 요소를 클릭했을 때
dblclick : 요소를 두번클릭 했을 때
keydown : 요소에 초점을 맞춘 상태에서 키보드의 키를 눌렀을 때
keyup : 요소에 초점을 맞춘 상태에서 키보드의 키를 땔 때
focus : 요소에 포커스가 일치했을 때
blur : 요소가 포커스를 잃었을 때
change : 입력 내용이 변경되었을 때 ( textarea, input, select, radio, checkbox 등)
resize : 요소의 크기를 다시 설정했을 때 
scroll : 요소를 스크롤 햿을 때
*/