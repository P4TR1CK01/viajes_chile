//ALERTA MENSAJE FORMULARIO//

$('.btn-info').click(function(){
  alert('Mensaje enviado')
})

//FUNCION MOUSEENTER-MOUSELEAVE COLIMNAS//

$('.row1').mouseenter(function(){
  $('.row1').fadeOut();
});

$('.row1').mouseleave(function(){
  $('.row1').fadeIn();
});

$('.row2').mouseenter(function(){
  $('.row2').fadeOut();
});

$('.row2').mouseleave(function(){
  $('.row2').fadeIn();
});

$('.row3').mouseenter(function(){
  $('.row3').fadeOut();
});

$('.row3').mouseleave(function(){
  $('.row3').fadeIn();
});

//FUNCION HIDE CARS//

$('.card1').click(function(){
  $('.card1').hide();
});

$('.card2').click(function(){
  $('.card2').hide();
});

$('.card3').click(function(){
  $('.card3').hide();
});

$('.card4').click(function(){
  $('.card4').hide();
});

$('.card').dblclick(function(event){
  event.stopPropagation();
  $(this).show();
});
