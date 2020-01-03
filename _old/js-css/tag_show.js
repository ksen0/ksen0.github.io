
 $( document ).ready(function() {

    $(".question").attr("value",function(){
        return $(this).text()
    })

    $(".question").html("&nbsp;")

    $( ".question" ).hover(function() {
        look_for = $(this).attr("value")
      $( ".question" ).css( "background-color", function(){
        if ($(this).attr("value") == look_for){
            $(".status").text(look_for)
            return "red";
        }
        return "#bbb";
      } );
    });

});
