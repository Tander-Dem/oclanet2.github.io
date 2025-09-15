$(function() {
  let header=$("#header");
  let header__top=$("#header__top");
  let headerH=header.height();
  let scrollPos=$(window).scrollTop();

$(window).on("scroll", function(){
  scrollPos=$(this).scrollTop();
  if (scrollPos>headerH){
    header__top.addClass("fixed");
  }
  else{
    header__top.removeClass("fixed");
  }
});
});



const slider = document.querySelector('.slider');
slider.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY * 2;
});
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev_button');
    const nextButton = document.querySelector('.next_button');
    prevButton.addEventListener('click', () => {
      slider.scrollBy({ left: -130 });
    });

    nextButton.addEventListener('click', () => {
      slider.scrollBy({ left: 130 });
    });
});

$( ".open-close-btn" ).on('click touchstart', function(e) {
    // prevent default anchor click 
    e.preventDefault();
    $(".overlay").toggleClass("overlay-open");
    $("#hamburger-icon").toggleClass("hamburger-open");
});
