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


  // Riddle Section
/* mini puzzle */

$('#riddle-form').on('submit', function (e) {
  e.preventDefault();
  const guess = $('#answer').val().trim().toLowerCase();
  const $result = $('#puzzle-result');

  if (guess === 'echo') {
    $result
      .text('🎉 Correct! Use code ECHO10 at checkout for 10% off.')
      .css('color', '#f75280')   // bright pink
      .show();
  } else {
    $result
      .text('❌ Not quite. Try again!')
      .css('color', 'red')
      .show();
  }
});



$('#riddle-form').on('submit', function (e) {
  e.preventDefault();

  const correct = ($('#puzzle').data('answer') || activeRiddle.answer)
                 .toLowerCase();
  const guess   = $('#answer').val().trim().toLowerCase();

  if (guess === correct) {
      $('#puzzle-result')
         .text('🎉 Correct! Use code ECHO10 at checkout')
         .css('color', '#f75280')
         .show();
      $('#book-btn').show();
  } else {
      $('#puzzle-result')
         .text('❌ Not quite. Try again!')
         .css('color', 'red')
         .show();
      $('#book-btn').hide();
  }
});
