$(document).ready(function() {
  // $(function(){
  $('.slideshow-container > div:gt(0)').hide();
  setInterval(function() {
    $('.slideshow-container> div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('.slideshow-container');
  }, 8000);
  // });
});
