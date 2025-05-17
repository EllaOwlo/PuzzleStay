$(document).ready(function () {
  //  Navigation button click using data-target
  $(".nav-btn").on("click", function () {
    const target = $(this).data("target"); // e.g. "#how-to-play"

    $(".section").not(target).hide(); // hide all except the selected one
    $(target).fadeIn(500);            // show the target with fade
  });

}