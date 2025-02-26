console.clear();

function MenuHover__init() {
  $(".top-bar__menu-1 > ul > li").hover(
    function () {
      $(this).addClass("on");
      $(this).siblings().find("> a").css("color", "#999");
    },
    function () {
      $(this).removeClass("on");
      $(".top-bar__menu-1 > ul > li > a").css("color", "");
    }
  );
}

MenuHover__init();
