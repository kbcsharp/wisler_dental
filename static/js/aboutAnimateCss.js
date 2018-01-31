$(document).ready(function() {
  $('.bio').addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeIn",
    });
  $('.bio-content').addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInRight",
    });
});
