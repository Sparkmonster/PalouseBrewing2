$(document).ready(function(){
  $("#artevent1").show(); //all articles hidden Here
  $("#artevent2").hide();
  $("#artevent3").hide();

  $("#event1link").click(function(){
    $("#artevent1").show(); //show 1st article
    $("#artevent2").hide();
    $("#artevent3").hide();
  });
  $("#event2link").click(function(){
    $("#artevent2").show(); //show 2nd article
    $("#artevent1").hide();
    $("#artevent3").hide();
  });
  $("#event3link").click(function(){
    $("#artevent3").show(); //show 3rd article
    $("#artevent1").hide();
    $("#artevent2").hide();
  });
  //similar action to document.getElementById('#link').addEventListener('click', function(e)){ do things()}
});
