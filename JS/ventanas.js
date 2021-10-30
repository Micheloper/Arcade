$(document).ready(function () {

    $("section").each(function () {
      let $section = $(this);

    const frame = document.getElementById("Ttt-game");
    frame.hidden = true;
    const frame2 = document.getElementById("EA-game");
    frame2.hidden = true;
    const frame3 = document.getElementById("RPS-game");
    frame3.hidden = true;

      $section
        .on("click", function () {
          if (!$section.data("open")) {
            $section.data("open", true);
            $(".main").addClass("close");
            $section.addClass("expand");
            frame.hidden = false;
            frame2.hidden = false;
            frame3.hidden = false;
          }
        })
        .find("span.button")
        .on("click", function (e) {
          e.stopPropagation();
          $section.data("open", false);
          $(".main").removeClass("close");
          $section.removeClass("expand");
          frame.hidden = true;
          frame2.hidden = true;
          frame3.hidden = true;
        });
    });
  });