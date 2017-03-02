$(document).ready(function(){
  $(".nav-img, #sidebar-wrapper").click(function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
    $("#main").toggleClass("half-black");
  });
});
