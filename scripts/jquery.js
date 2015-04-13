$(document).ready(function() {
  $('.circle').mouseleave(function() {
    $('.circle').fadeTo('fast', 0.5);
  });
  $('.circle').hover(function() {
    $(this).fadeTo('fast', 2);
  });
  $('.circle').click(function(){
      $(this).fadeTo('fast', 0);
  });

});



// $(document).ready(function() {
//   $('.bomb').click(function(){
//     $('img').display();
//   });
// });
