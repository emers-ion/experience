$(document).ready(function() {
  $('.circle').mouseleave(function() {
    $('.circle').fadeTo('fast', 0.5);
  });
  $('.circle').mouseenter(function() {
    $(this).fadeTo('fast', 2);
  });

});

// $(document).ready(function() {
//   $('.bomb').click(function(){
//     $('img').display();
//   });
// });
