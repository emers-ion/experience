$(document).ready(function() {
  $('.circle').mouseleave(function() {
    $('.active').fadeTo('fast', 0.5);
  });
  $('.active').mouseenter(function() {
    $(this).fadeTo('fast', 2);
  });
  $('.active').click(function(){
      $(this).fadeTo('fast', 0);
      $(this).removeClass("active");
  });
  $('.bomb').click(function(){
    $('.error1').css({
      display: "block",
    });
  });
  $('.okay1').click(function(){
    $('.error2').css({
      display: "block",
    });
  });
  $('.error2').click(function(){
    $(".error2").mousemove(function(e){
      $('.error2').css({
        'top': e.clientY - 20, 'left': e.clientX - 20, display:"block"
      });
});

  });
  $('.head-photo-container').click(function(){
    $('.death').css({
      display: "block",
    });
  });
});



// $(document).ready(function() {
//   $('.bomb').click(function(){
//     $('img').display();
//   });
// });
