$(function(){
    console.log('jQuery Connect')

    var duration = 300;
    var $images = $('#images p');

    // 첫번 째 사진
    $images.filter(':nth-child(1)')
    .on('mouseover', function(){
        $(this).find('strong, span').stop(true).animate({
            'opacity': 1,
        }, duration);
    })
    .on('mouseout', function(){
        $(this).find('strong, span').stop(true).animate({
            'opacity': 0,
        }, duration);
    });

    // 두번 째 사진
    $images.filter(':nth-child(2)')
    .on('mouseover', function(){
        $(this).find('strong').stop(true).animate({
            'opacity': 1,
            'left': '0%'
        }, duration);
        $(this).find('span').stop(true).animate({
            'opacity': 1
        }, duration);
    })
    .on('mouseout', function(){
        $(this).find('strong').stop(true).animate({
            'opacity': 0,
            'left': '-200px'
        }, duration);
        $(this).find('span').stop(true).animate({
            'opacity': 0
        }, duration);
    });

    // 세번 째 사진
    $images.filter(':nth-child(3)')
    .on('mouseover', function(){
        $(this).find('strong').stop(true).animate({
            'bottom': '0px'
        }, duration);
        $(this).find('span').stop(true).animate({
            'opacity': 1
        }, duration);
        $(this).find('img').stop(true).animate({
            'top': '-20px',
        }, duration);
    })
    .on('mouseout', function(){
        $(this).find('strong').stop(true).animate({
            'bottom': '-80px'
        }, duration);
        $(this).find('span').stop(true).animate({
            'opacity': 0
        }, duration);
        $(this).find('img').stop(true).animate({
            'top': '0px',
        }, duration);
    });

});

/* 

임시 기억장소 (메모리 공간 / 메모리 할당)
변수, 배열, 객체
변수 : 단일 기억장소
배열, 객체 : 여러 기억장소


find() : 각 요소의 하위 요소를 선택
filter() : 각 요소를 선택

ex)
$('div .text')라는 요소를 가진 객체
var $find = $('div').find('.text');

$('div.text')라는 요소를 가진 객체
var $filter = $('div').filter('.text');



*/