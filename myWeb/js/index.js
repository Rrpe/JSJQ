$(function(){
    console.log("Connection...");

    $(".headC").on("click", function(){
        console.log("clicked");
        $(".headB").slideToggle();
        // toggle
        // .slideDown(); .slideUp();
        //.fadeIn(); .fadeOut()
    });
});