$(document).ready(function() {
  $('.circle').mouseenter(function() {
    $('.circle').fadeTo('fast', 1);
  });
  $('.circle').mouseleave(function() {
    $('.circle').fadeTo('fast', 0.5);
  });
});
