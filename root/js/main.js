$(document).ready(function () {
  // Generalized click event for all nav buttons using data-target
  $(".nav-btn").on("click", function () {
    const target = $(this).data("target"); // e.g. "#how-to-play"

    $(".section").not(target).hide(); // hide all except the target
    $(target).fadeIn(500);            // show the target with fade
  });

  // Example specific buttons if you want hard-coded ones:
  $(".btn1").on("click", function () {
    $(".section").not("#how-to-play").hide();
    $("#how-to-play").fadeIn(500);
  });

  $(".btn2").on("click", function () {
    $(".section").not("#map").hide();
    $("#map").slideDown(500);
  });

  $(".btn3").on("click", function () {
    $(".section").not("#homebig").hide();
    $("#homebig").fadeIn(500);
  });
});
