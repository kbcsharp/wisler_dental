$(document).ready(function() {
  $('.wrap-aside').addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
    });
  $('.wrap-aside-four').addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounceInLeft",
    offset: 100
  });
});
