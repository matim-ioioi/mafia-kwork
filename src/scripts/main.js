$(document).ready(function () {
  $(".nav-slider").width($(".active").width());
  $(".nav-slider").css(
    "left",
    $(".active").outerWidth(true) / 2 - $(".nav-slider").outerWidth(true) / 2
  );
  $(".nav-slider").css("top", $(".active").outerHeight(true));

  $(".nav-menu").hover(function () {
    var offsetItemLeft = $(this).position().left;
    var offsetItemTop = $(this).position().top;
    $(".nav-slider").css(
      "left",
      offsetItemLeft +
        $(this).outerWidth(true) / 2 -
        $(".nav-slider").outerWidth(true) / 2
    );
    $(".nav-slider").css("top", offsetItemTop + $(this).outerHeight(true));
  });
  $(".nav-menu").mouseout(function () {
    $(".nav-slider").css(
      "left",
      $(".active").outerWidth(true) / 2 - $(".nav-slider").outerWidth(true) / 2
    );
    $(".nav-slider").css("top", $(".active").outerHeight(true));
  });
});
