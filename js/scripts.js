$(function() {
    $("img#cat").click(function() {
      $("ul#first").prepend("<li>Meow!</li>");
      $("#first").css("color", "blue");
      $("ul#first").children("li").first().click(function() {
        $(this).remove();
    });
  });
    $("img#dog").click(function() {
      $("ul#second").prepend("<li>Woof!!!</li>");
      $("#second").css("color", "red");
      $("ul#second").children("li").first().click(function() {
        $(this).remove();
    });
  });
});
