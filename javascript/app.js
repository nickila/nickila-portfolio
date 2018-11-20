$(document).ready(function () {

    $(".heading").on("click", function() {
        $(this).parent().toggleClass("col-md-12");
        //$(this).html("");
        $(this).parent().siblings().toggleClass("hide");
        
    });
    $(".titleHeader").on("click", function() {
        $(".section").removeClass("col-md-12 hide");
        $(".onClick").addClass("hide");
        $(".onLoad").removeClass("hide");
    })
    $("#portHeader").on("click", function() {
        $(this).siblings().toggleClass("hide");
    });
    $("#aboutHeader").on("click", function() {
        $(this).siblings().toggleClass("hide");
    });
    $(".btn").on("click", function(event) {
        event.preventDefault();
        $("form").html("");
        $(".message").append("your message has been submitted.<br /><br />thank you.")
    })

});