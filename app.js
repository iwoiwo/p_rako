$(document).ready(function(){




let bodyElm = document.querySelector("body");

//cursor blinking style

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
       cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;");
   });


//  scroll arrow


const arrowDown = document.getElementById('triangle-down');
//const frame = document.querySelector('.yellow-outline');

let didScroll = false;
window.onscroll = () => didScroll = true;
setInterval(() => {
    if( ( didScroll ) ||  ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) ) {
        didScroll = false;
        arrowDown.style.opacity='0'
          }else{
      arrowDown.style.opacity='1'
    }
}, 150);


// scroll to id

if( $('a[href^="#front-page"]') || $('a[href^="#second-page"]') || $('a[href^="#about-page"]') || $('a[href^="#contact-page"]') ){

      $('a[href^="#"]').click(function(event) {
        event.stopPropagation();
        var target = $(this.getAttribute('href'));
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000, 'swing');
});
}

// burger opening menu

$("#burger").click(function (e) {

e.stopPropagation();
$('.main-menu').removeClass('animated-menu-back');
$('.main-menu').addClass('animated-menu');
$("#burger").css('display', 'none')


$('.main').click(function (e) {
  e.stopPropagation();
  $('.main-menu').removeClass('animated-menu');
  $('.main-menu').addClass('animated-menu-back');
  $("#burger").css('display', 'block');
});

$(window).scroll(function(e) {
  $('.main-menu').removeClass('animated-menu');
  $('.main-menu').addClass('animated-menu-back');
  $("#burger").css('display', 'block');
});

});

// animation background

$('body').scroll(function() {

let scrollTop = $window.scrollTop();

$('.bg0').css('transform', 'translateY(' + -(scrollTop / 2) + 'px)');

});


// timeline bio


      $('#left-arrow').click(function() {
          console.log('clicked');
          let positionLeft =  $('#scroll-container').scrollLeft();
          event.preventDefault();
         $('#scroll-container').animate({
           scrollLeft: positionLeft + 350 + "px"
         }, 1000, 'swing');
      });

      $('#right-arrow').click(function() {
          console.log('clicked');
          let positionRight =  $('#scroll-container').scrollLeft();
          event.preventDefault();
         $('#scroll-container').animate({
           scrollLeft: positionRight - 350 + "px"
         }, 1000, 'swing');
      });









});
