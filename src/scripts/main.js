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

  // friends div init
  $("#friends-div").css(
    "max-height",
    $(document).innerHeight() -
      $("#profile-div").outerHeight(true) -
      $(".nav-pan").outerHeight(true) -
      $(".friends-pan").outerHeight(true) -
      $("#add-friend-div").outerHeight(true) +
      "px"
  );
  // friends div loading/creating
  for (let i = 0; i < 6; i++) {
    $("#friends-div").append(
      "<div class='border mb-3 friends' id='friend_" +
        i +
        "'><img class='rounded-circle fr-img' src='imgs/default.jpg' alt='photo' width='" +
        ($(".add-friend").innerWidth() / 4 - 20) +
        "px' height='" +
        ($(".add-friend").innerHeight() - 20) +
        "px'/></div>"
    );
  }
});
