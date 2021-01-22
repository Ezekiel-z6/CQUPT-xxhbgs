window.onload = function(){
  // Toggle
  $(".toggle").click(function (e) {
    e.preventDefault();
    $(".head").toggleClass("show");
    $(".toggle").toggleClass("show");
  });
}