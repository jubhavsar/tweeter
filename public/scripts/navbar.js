$(document).ready(function() {
  $(document).scroll(function () {
      var scroll = $(this).scrollTop();
      var topDist = $("#main-container").position();
      if (scroll > topDist.top) {
          $('nav').css({"position":"fixed","top":"0"});
      } else {
          $('nav').css({"position":"absolute","top":"0"});
      }
  });
});