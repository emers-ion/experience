$(document).ready(function() {
  var cherryBomb = document.getElementById("cherrybomb");
  var play = function () {
    console.log(cherryBomb);
    cherryBomb.play();
  };

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
    play();
  });
  $('.okay1').click(function(){
    $('.error2').css({
      display: "block",
    });
  });
  $('.error2').click(function(){
    $(".error2").mousemove(function(e){
      $('.error2').css({
        'top': e.clientY - 50, 'left': e.clientX - 100, display:"block"
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
