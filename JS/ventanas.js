$(document).ready(function () {
    $("section").each(function () {
      let $section = $(this);
      $section
        .on("click", function () {
          if (!$section.data("open")) {
            $section.data("open", true);
            $(".main").addClass("close");
            $section.addClass("expand");
          }
        })
        .find("span.button")
        .on("click", function (e) {
          e.stopPropagation();
          $section.data("open", false);
          $(".main").removeClass("close");
          $section.removeClass("expand");
        });
    });
  });