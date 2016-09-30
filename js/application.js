$(document).ready(function(){
  $(".cell").click( function(event) {
    // debugger;
    var selectClasses = $(this).attr("class").split(" ");
    var selectRightDiagonal = selectClasses.pop();
    var selectLeftDiagonal = selectClasses.pop();
    var selectRow = selectClasses.pop();
    var selectCol = selectClasses.pop();

    $("." + selectRightDiagonal).children(".queen").removeClass("active").fadeOut();
    $("." + selectLeftDiagonal).children(".queen").removeClass("active").fadeOut();
    $("." + selectRow).children(".queen").removeClass("active").fadeOut();
    $("." + selectCol).children(".queen").removeClass("active").fadeOut();

    $(this).children(".queen").addClass("active").fadeIn();

    if ( $(".active").length === 8 ) {
      $(".winner-message").show();
    } else {
      $(".winner-message").hide();
    }

  })
});
