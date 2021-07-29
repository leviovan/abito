var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  
  thumbs: {
    swiper: swiper,
  },
});

const menuBtn= document.querySelector(".button-hamburger");
const menu=  document.querySelector(".nav-panel");
const closedBtn=  document.querySelector(".closed-navbar");

menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('open-menu')
})
closedBtn.addEventListener('click',()=>{

  menu.classList.remove('open-menu');
})
