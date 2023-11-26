$(".ahashlink").click( function() {

    var location = $(this).attr("href");
    var offset = $(location).offset().top;
    $("body").scrollTop(offset+100px);
    return false;
});