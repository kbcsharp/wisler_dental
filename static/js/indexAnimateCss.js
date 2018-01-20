$(document).ready(function() {
  $('.wrap-aside').addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    });
  $('.wrap-aside-four').addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounceInLeft",
    offset: 100
    });
  $('.h4-note').addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInDown",
    offset: 100
    });
});
