

  
//   $(document).ready(function () {
//     $(".nav-btn").on("click", function () {
//       const target = $(this).data("target");
      
//       // Hide all sections and show the selected one
//       $(".section").not(target).hide(); // hide all
//       $(target).fadeIn(500); // show the one clicked
//     });
//     });
  
    

// Global variables
const defaultSection = "#homebig";

// Reusable function to show only the selected section
function showOnlySection(target) {
  $(".section").hide();           // Hide all
  $(target).fadeIn(500);          // Show selected with fade
}

  