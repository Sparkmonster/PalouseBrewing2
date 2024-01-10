$(document).ready(function(){
  $("#HomeLink").click(function(){
    $("#HomeLink").css("color", "#800080");
  });
  $("#BeersLink").click(function(){
    $("#BeersLink").css("color", "#800080");
  });
  $("#EventLink").click(function(){
    $("#OperationsLink").css("color", "#800080");
  });
  $("#AboutLink").click(function(){
    $("#WhoLink").css("color", "#800080");
  });
  $("#TermsLink").click(function(){
    $("#TermsLink").css("color", "#800080");
  });
  $(".navbar-brand").click(function(){
    $("navbar-brand").css("color", "black");
  });
  $("#HomeLink").mouseover(function(){
    $(this).css("color", "white");
    $(this).addClass("hover");
  });
  $("#HomeLink").mouseout(function(){
    $(this).css("color", "black");
    $(this).removeClass("hover");
  });
  $(".navbar-brand").mouseover(function(){
    $(this).css("color", "white");
    $(this).addClass("hover");
  });
  $(".navbar-brand").mouseout(function(){
    $(this).css("color", "black");
    $(this).removeClass("hover");
  });
  $("#BeersLink").mouseover(function(){
    $(this).css("color", "white");
    $(this).addClass("hover");
  });
  $("#BeersLink").mouseout(function(){
    $(this).css("color", "black");
    $(this).removeClass("hover");
  });
  $("#EventLink").mouseover(function(){
    $(this).css("color", "white");
    $(this).addClass("hover");
  });
  $("#EventLink").mouseout(function(){
    $(this).css("color", "black");
    $(this).removeClass("hover");
  });
  $("#AboutLink").mouseover(function(){
    $(this).css("color", "white");
    $(this).addClass("hover");
  });
  $("#AboutLink").mouseout(function(){
    $(this).css("color", "black");
    $(this).removeClass("hover");
  });
  $("#TermsLink").mouseover(function(){
    $(this).css("color", "white");
    $(this).addClass("hover");
  });
  $("#TermsLink").mouseout(function(){
    $(this).css("color", "black");
    $(this).removeClass("hover");
  });
});
