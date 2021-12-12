$(document).ready(function(){


let bodyElm = document.querySelector("body");

//cursor blinking style

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
       cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;");
   });


//  scroll arrow
if( bodyElm.classList.contains('index-body')){

const arrowDown = document.getElementById('triangle-down');
const frame = document.querySelector('.yellow-outline');

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

}
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

// horizontal scroll

let subpageWidth = $(".subpage").width();
let timelineWidth = $(".timeline").width();
let docWidth = $(document).width();

 // 2172
console.log(subpageWidth) //2172
console.log(timelineWidth)//3040.78
console.log(docWidth)//1920

console.log(timelineWidth - docWidth)


if( bodyElm.classList.contains('doradztwo')){



const scrollContainer = document.querySelector(".subpage");
const timeline = document.querySelector(".timeline");


scrollContainer.addEventListener("wheel", (evt) => {

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

  //  console.log(timeline.scrollLeft) //0
//  console.log(scrollContainer.scrollLeft)
//  console.log(timelineWidth - docWidth)


  if(scrollContainer.scrollLeft >= (timelineWidth - docWidth)){
    console.log("now")
    scrollContainer.scrollLeft == 0;
    document.querySelector(".main").scrollBottom += evt.deltaX;
evt.preventDefault();
  }


  });

//  console.log(  "timeline scrollLeft" + scrollContainer.scrollLeft) //850.5
  //console.log(  "scrollX" + scrollContainer.scrollX) // undefined
  //console.log( "pageoffset" + window.pageXOffset)  // 0
//  console.log(  "window inner width" + window.innerWidth ) // 2030
//  console.log(  "window outer width" + window.outerWidth ) // 2026
//  console.log("elems width" + scrollContainer.offsetWidth)//2026
//  console.log("client width" + scrollContainer.clientWidth)//2026





};





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

// facebook plugin








});
