//tooltip//

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//FUNCION MOUSEENTER-LEAVE/MOUSEFADE-IN-OUT COLUMNAS//

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

$('.card1').mouseleave(function(){
  $('.card1').fadeIn();
});

$('.card2').click(function(){
  $('.card2').hide();
});

$('.card2').mouseleave(function(){
  $('.card2').fadeIn();
});

$('.card3').click(function(){
  $('.card3').hide();
});

$('.card3').mouseleave(function(){
  $('.card3').fadeIn();
});

$('.card4').click(function(){
  $('.card4').hide();
});

$('.card4').mouseleave(function(){
  $('.card4').fadeIn();
});

//ALERTA MENSAJE FORMULARIO//

$('.btn-info').click(function(){
  alert('Mensaje enviado')
})
