$(document).ready(function(){
  $(".cell").click( function(event) {
    // debugger;
    var selectClasses = $(this).attr("class").split(" ");
    var selectRightDiagonal = selectClasses.pop();
    var selectLeftDiagonal = selectClasses.pop();
    var selectRow = selectClasses.pop();
    var selectCol = selectClasses.pop();

    $("." + selectRightDiagonal).children(".queen").fadeOut();
    $("." + selectLeftDiagonal).children(".queen").fadeOut();
    $("." + selectRow).children(".queen").fadeOut();
    $("." + selectCol).children(".queen").fadeOut();
    $(this).children(".queen").fadeIn();

  })
});
