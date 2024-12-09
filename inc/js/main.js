var swiper1 = new Swiper(".swiper-section1 .swiper1-container", {
  effect:"coverflow",
  grabCursor:true,
  centeredSlides:true,
  initialSlide:5,
  speed:600,
  preventClicks:true,
  slidesPerView:"auto",
  coverflowEffect:{
    rotate:0,
    stretch:110,
    depth:350,
    modifier:1,
    slideShadow:true,
  },
  on:{
    click(event){
        swiper1.slideTo(This.clickedIndex);
    },
  },
  pagination:{
      el:".swiper-pagination",
      clickable:true,
  },
});

var swiper2 = new Swiper(".swiper-section2 .swiper2-container", {
    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    initialSlide:3,
    speed:600,
    preventClicks:true,
    slidesPerView:"auto",
    coverflowEffect:{
      rotate:0,
      stretch:170,
      depth:450,
      modifier:1,
      slideShadow:true,
    },
    on:{
      click(event){
          swiper2.slideTo(this.clickedIndex);
      },
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper3 = new Swiper('.swiper3', {
    effect:'cube',
    grabCursor:true,
    cubeEffect:{
      shadow:false,
      slideShadows:false,
      shadowOffset:0,
      shadowScale:0.8,
      perspective:1000,
      modifier:1,
    },
    loop:true,
    autoplay:{
      delay:4000,
      disableOnInteraction:false,
    },
    pagination:{
      el:'.swiper-pagination',
      clickable:true,
    },
    navigation:{
      prevEl:'.swiper-button-prev',
      nextEl:'.swiper-button-next',
    },
  });
});

const swiper4 = new Swiper(".swiper4-container", {
  initialSlide:3,
  centeredSlides:true,
  loop:true,
  speed:900,
  grabCcrsor:true,
  allowTochMove:false,
  effect:"coverflow",
  coverflowEffect: {
    rotate:-10,
    stretch:-45,
    depth:90,
    modifier:1,
    slideShadows:true,
  },
  mousewheel: {
    thresholdDelta:50,
    sensitivity:1,
  },
  pagination: {
    el:".swiper-pagination",
    clickable:true,
  }, 
  breakpoints:{
    0:{slidesPerView:1,
       spaceBetweem:20,
    },
    600: {slidesPerView:3},
    1200: {slidesPerView:5,},
  },
});


function flipActiveSlide(slidesElement, activeSlideElement){
  const slides = document.querySelectorAll(slidesElement);
  const activeSlide = document.querySelector(activeSlideElement);
  const button = activeSlide.querySelector("button");

  if(button){
    button.addEventListener("click", (event)=>{
      event.stopPropagation();
      activeSlide.classList.add("flipped");
    });
  }

  slides.forEach((slide) => {
    slide.addEventListener("click", function(){
      if(slide.classList.contains("flipped")){
         slide.classList.remove("flipped");
      }
    });
  });

}

flipActiveSlide(".swiper4-container .swiper-slide", ".swiper4-container .swiper-slide-active");

const swiper5TextSlider = new Swiper(".swiper-section5 .text-swiper5-container", {
  effect: "slide",
  direction:"vertical",
  speed:1000,
  longSwipesRatio:0.01,
  grabcursor:true,
  watchSlidesProgress:true,
  mousewheel:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiperbutton-prev",
  },
});

const swiper5ImageSlider = new Swiper(".image-swiper5-container", {
  effect:"fade",
  allowTouchMove:false,
});

swiper5TextSlider.controller.control = imageSlider;