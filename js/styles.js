$(document).ready(function () {
  $(".block4hidden, .block4showing").click(function () {
    $(".block4showing").toggle();
    $(".block4hidden").toggle();
  });
  $(".block4bhidden, .block4bshowing").click(function () {
    $(".block4bshowing").toggle();
    $(".block4bhidden").toggle();
  });
  $(".block4chidden, .block4cshowing").click(function () {
    $(".block4cshowing").toggle();
    $(".block4chidden").toggle();
  });
  $("#work1").hover(function(){
    $(this).css("background-color", "#FFB6C1");
    }, function(){
    $(this).css("background-color", "white");
  });
    $("#hovers2").hover(function(){
      $(this).css("background-color", "#FFB6C1");
      }, function(){
      $(this).css("background-color", "white");
  });
    $("#hovers3").hover(function(){
      $(this).css("background-color", "#FFB6C1");
      }, function(){
      $(this).css("background-color", "white");
  });
      $("#submit").click(function () {
        alert("Your message has been received!")
      })
  })