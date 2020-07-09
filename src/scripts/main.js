$(document).ready(function () {
  // nav-slider init
  $(".nav-slider").width($(".active").width());
  $(".nav-slider").css(
    "left",
    $(".active").outerWidth(true) / 2 - $(".nav-slider").outerWidth(true) / 2
  );
  $(".nav-slider").css("top", $(".active").outerHeight(true));

  // handling navs (highlight etc)
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

  // friends-wrapper init
  $(window).resize(function () {
    $(".menu__friends" && "#friends-wrapper").css(
      "height",
      $(window).innerHeight() -
        parseInt($(".menu").css("padding-bottom")) -
        $(".menu__nav--pages").outerHeight(true) -
        $(".menu__profile").outerHeight(true) -
        $(".menu__nav--friends").outerHeight(true) -
        $(".menu__add-friend").outerHeight(true) +
        "px"
    );
  });
  $(".menu__friends" && "#friends-wrapper").css({
    minHeight: $(".wrapper").outerHeight(true) * 1.5,
    height:
      $(window).innerHeight() -
      parseInt($(".menu").css("padding-bottom")) -
      $(".menu__nav--pages").outerHeight(true) -
      $(".menu__profile").outerHeight(true) -
      $(".menu__nav--friends").outerHeight(true) -
      $(".menu__add-friend").outerHeight(true) +
      "px",
  });

  // friends div loading/creating
  $.ajax({
    url: "includes/friends.html",
    success: function (response) {
      for (let i = 0; i < 6; i++) $("#friends-wrapper").append(response);
      $(this)
        .find($(".img"))
        .css(
          "width",
          $(".menu__add-friend .wrapper").innerWidth() / 4 - 25 + "px"
        );
      $(this)
        .find($(".img"))
        .css(
          "height",
          $(".menu__add-friend .wrapper").innerHeight() - 15 + "px"
        );
      $(".friend").hover(
        function () {
          $(this).find(".add").css("visibility", "visible");
        },
        function () {
          $(this).find(".add").css("visibility", "hidden");
        }
      );
    },
  });

  $("#add-email").width($(".wrapper").width() - $(".wrapper").width() / 3);
});
