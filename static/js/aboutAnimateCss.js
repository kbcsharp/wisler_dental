$(document).ready(function() {
  $('.bio').addClass("hidden").viewportChecker({
    classToAdd: "visible animated zoomIn",
    });
  $('.bio-content').addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeIn",
    });
});
