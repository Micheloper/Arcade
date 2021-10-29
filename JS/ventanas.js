$(document).ready(function () {

    $("section").each(function () {
      let $section = $(this);

    const frame = document.getElementById("Ttt-game");
    frame.hidden = true;

      $section
        .on("click", function () {
          if (!$section.data("open")) {
            $section.data("open", true);
            $(".main").addClass("close");
            $section.addClass("expand");
            frame.hidden = false;
          }
        })
        .find("span.button")
        .on("click", function (e) {
          e.stopPropagation();
          $section.data("open", false);
          $(".main").removeClass("close");
          $section.removeClass("expand");
          frame.hidden = true;
        });
    });
  });