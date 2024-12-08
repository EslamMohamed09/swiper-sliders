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
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: false, // Disable shadow for cleaner slides
      slideShadows: false, // Disable shadows
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });
});

