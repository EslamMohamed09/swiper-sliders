var swiper1 = new Swiper(".section1 .swiper1-container", {
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

var swiper2 = new Swiper(".section2 .swiper2-container", {
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

const swiper3 = new Swiper('.section3 .swiper3', {
  effect:'cube',
  grabCursor:true,
  speed:1000,
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


const swiper4 = new Swiper(".swiper4-container", {
  effect:"coverflow",
  initialSlide:3,
  centeredSlides:true,
  loop:true,
  speed:900,
  grabCursor:true,
  allowTochMove:false,
  coverflowEffect:{
    rotate:-10,
    stretch:-45,
    depth:90,
    modifier:1,
    slideShadows:true,
  },
  mousewheel:{
    thresholdDelta:50,
    sensitivity:1,
  },
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  }, 
  breakpoints:{
    0:{slidesPerView:1,
       spaceBetweem:20,
    },
    600:{slidesPerView:3},
    1200:{slidesPerView:5,},
  },
  autoplay:{
    delay:2000,
    pauseOnMouseEnter:true,
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


const swiper5 = new Swiper(".swiper5-container", {
  effect:"slide",
  direction:"horizontal",
  longSwipesRatio:0.01,
  initialSlide:4,
  grabCursor:true,
  loop:false,
  speed:900,
  centeredSlides:true,
  slidesPerView:"auto",
  spaceBetween:0,
  slideToClickedSlide:false,
  freeMode:true,
  freeModeMomentum:true,
  mousewheel:{
    forceToAxis:true,
    invert:false,
    thresholdDelta:20,
    sensitivity:0.8,
    releaseOnEdges:true,
  },
  autoplay:{
    delay:3000,
    pauseOnMouseEnter:true,
  },
});


const textSliderBlock = new Swiper(".section6 .text-block", {
  effect:"slide",
  direction:"vertical",
  speed:1000,
  longSwipesRatio:0.01,
  grabCursor:true,
  // mousewheel:{
  //   releaseOnEdges:true,
  //   forceToAxis:true,
  // },
  navigation:{
    prevEl:".swiper-button-prev",
    nextEl:".swiper-button-next",
  },
});


const imageSliderBlock = new Swiper(".section6 .image-block", {
  effect:"fade",
  allowTouchMove:false,
});

textSliderBlock.controller.control = imageSliderBlock;



const textContainerBanner = new Swiper(".section7 .text-block", {
  effect:"slide",
  direction:"vertical",
  speed:1000,
  longSwipesRatio:0.01,
  grabCursor:true,
  mousewheel:{
    releaseOnEdges:true,
    forceToAxis:true,
  },
  navigation:{
    prevEl:".section7 .swiper-button-prev",
    nextEl:".section7 .swiper-button-next",
  },
});


const imageContainerBanner = new Swiper(".section7 .image-block", {
  effect:"fade",
  allowTouchMove:false,
});

textContainerBanner.controller.control = imageContainerBanner;
imageContainerBanner.controller.control = textContainerBanner;


const swiper8 = new Swiper(".section8 .swiper", {
   effect:"cards",
   grabCursor:true,
   initialSlide:2,
   loop:true,
   rotate:true,
   mousewheel:{
    invert:false,
   },
});

const swiper9 = new Swiper(".section9 .swiper", {
  effect:'cube',
  grabCursor:true,
  loop:true,
  speed:1000,
  cubeEffect: {
    shadow:false,
    slideShadows:true,
    shadowOffset:10,
    shadowScale:0.94,
  },
  autoplay: {
    delay:2400,
    pauseOnMouseEnter:true,
  }
});

const swiper10 = new Swiper(".section10 .swiper", {
  grabCursor:true,
  initialSlide:true,
  centeredSlides:true,
  centeredSlides:true,
  slidesPerView:"auto",
  spaceBetween:10,
  loop:false,
  speed:1000,
  freeMode:false,
  freeMode:false,
  mousewheel: {
    thresholdDelta:30
  },
  pagination: {
    el:".swiper-pagination",
    clickable:true,
  },
  autoplay: {
    delay:2600,
    pauseOnMouseEnter:true,
  }
});

const swiper11 = new Swiper(".section11 .swiper", {
  effect:"slide",
  speed:900,
  loop:true,
  navigation: {
    prevEl:".prev-btn",
    nextEl:".next-btn",
  },
});

const swiper12 = new Swiper(".section12 .swiper", {
  slidesPerView:1,
  spaceBetween:10,
  speed:400,
  preventClicks:true,
  noSwiping:true,
  freeMode:false,
  breakpoints:{
   10: {
    slidesPerView:1,
    spaceBetween:20,
   },
   400: {
    slidesPerView:2,
    spaceBetween:20,
   },
   950: {
    slidesPerView:3,
    spaceBetween:30,
   },
   1200: {
    slidesPerView:4,
    spaceBetween:30,
   },
   1400: {
    slidesPerView:5,
    spaceBetween:30,
   },
  },
  navigation:{
    prevEl:".section12 .arrows .prev-btn",
    nextEl:".section12 .arrows .next-btn",
  }
});

const swiper13 = new Swiper(".section13 .swiper", {
  effect:"slide",
  grabCursor:true,
  speed:500,
  loop:true,
});

const swiperSection14 = document.querySelector('.section14 .swiper');
const favbtnsSection14 = document.querySelectorAll('.section14 .fav');

const swiper14 = new Swiper(".section14 .swiper", {
  spaceBetween:30,
  slidesPerView:"auto",
  loop:true,
  speed:6000,
  freeMode:true,
  // allowTouchMove:false,
  autoplay:{
    delay:0,
  }
});

swiperSection14.addEventListener("mouseenter", function(){
  const swiperTranslate = swiper14.getTranslate();
  swiper14.setTranslate(swiperTranslate);
  swiper14.autoplay.stop();
});

swiperSection14.addEventListener("mouseleave", function(){
  swiper14.slideTo(swiper14.activeIndex, 3000, false);
  swiper14.autoplay.start();
});

favbtnsSection14.forEach((favbtn)=>{
  favbtn.addEventListener("click", () => {
    favbtn.classList.toggle("active");
    favbtn.classList.toggle("pulse");
  });
});

const swiper15 = new Swiper(".section15 .swiper", {
  grabCursor:true,
  initialSlide:4,
  centeredSlides:true,
  slidesPerView:"auto",
  spaceBetween:14,
  freeMode:false,
  autoplay:{
    delay:5000,
  },
  on:{
    click(event){
      swiper1.slideTo(this.clickedIndex);
    },
  },
});

const swiper16 = new Swiper(".section16 .swiper", {
  effect:"coverflow",
  grabCursor:true,
  centeredSlides:true,
  speed:900,
  spaceBetween:300,
  slidesPerView:"auto",
  coverflowEffect:{
    rotate:0,
    stretch:0,
    depth:200,
    modifier:1,
    slidesShadows:false,
  },
  mousewheel:{
    invert:false,
    thresholdDelta:50,
    sensitivity:1,
  },
  pagination: {
    el:".swiper-pagination",
    clickable:true,
  }
});

const swiper17 = new Swiper(".section17 .swiper", {
  slidesPerView:4,
  loop:true,
  speed:500,
  navigation: {
    prevEl:".section17 .arrows .prev-btn",
    nextEl:".section17 .arrows .next-btn",
  },
});

const starBtnSec17 = document.querySelector(".section17 .user .star");
const followBtnSec17 = documentBtn = document.querySelector(".section17 .user .follow-btn");

starBtnSec17.addEventListener("click", () => {
  if(starBtnSec17.classList.contains("active")){
     starBtnSec17.classList.remove("active");
  } else {
    starBtnSec17.classList.add("active");
  }
});

followBtnSec17.addEventListener("click", () => {
  if(followBtnSec17.classList.contains("active")){
     followBtnSec17.classList.remove("active");
     followBtnSec17.textContent = 'follow';
  } else {
    followBtnSec17.classList.add("active");
    followBtnSec17.textContent = 'following';
    addingconfetti();
  }
});


async function addingconfetti(){
  const jsConfetti = new JSConfetti();
  await jsConfetti.addConfetti({
     confettiColors: ["#6f3fbc", "#59e10b", "#d3e10b", "#e10b6f", "#fff"],
     confettiRadius:4,
     confettiNumber:400,
  });
}

