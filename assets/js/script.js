// CODE FOR HAMBURGER STARTS HERE
$(document).ready(function(){
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".navigation").toggleClass("active");
    if ($(this).hasClass("active")) $("html, body").css({ overflow: "hidden" });
    else $("html, body").css({ overflow: "auto" });
  });
});
// CODE FOR HAMBURGER ENDS HERE
