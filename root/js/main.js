alert("dance")


$(document).ready(function () {
  //  Navigation button for homepage
  $(".nav-btn").on("click", function () {
    const target = $(this).data("target"); // e.g. "#how-to-play"

    $(".section").not("#how-to-play").hide();// hide all except the selected one
    $("#how-to-play").fadeIn(500);            // show the target with fade
  });

})


$(document).ready(function () {
    $(".nav-btn").on("click", function () {
      const target = $(this).data("target"); // gets "#map"
      $(".section").not(target).hide();
      $(target).fadeIn(500); // shows the map section
    });
  });
  
  