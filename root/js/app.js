

  
  $(document).ready(function () {
    $(".nav-btn").on("click", function () {
      const target = $(this).data("target");
      
      // Hide all sections and show the selected one
      $(".section").not(target).hide(); // hide all
      $(target).fadeIn(500); // show the one clicked
    });
    });
  
    

