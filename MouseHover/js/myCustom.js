$(function(){
    console.log("Connection..");


    $("article").on("mouseenter", function(){
        // .get(0) : 첫번 째 요소를 가져감
		var vid = $(this).find("video").get(0);
        // .currentTime = n; : 비디오 관련 재생시 n초부터 시작
        vid.currentTime = 0;    
        vid.play();	

        $(this).stop().animate({
            "width": "35%"
        }, 1000, function(){
            $(this).find("h3").stop().animate({
                "right": "10px"
            }, 400);
            $(this).find("p").stop().animate({
                "right": "10px"
            }, 800);
            $(this).find("video").stop().animate({"opacity":"0.9"},1200);	
        });
    }).on("mouseleave", function(){
        
        var vid = $(this).find("video").get(0);
		vid.pause();
        
        $(this).find("video").stop().animate({
            "opacity":"0"
        }, 2000);	
        $(this).stop().animate({
            "width": "12%"
        }, 700);
        $(this).find("h3, p").stop().animate({
            "right": "-310px"
        }, 400);
    });

});