import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const nextBtn = document.querySelector("#nextBtn .next");
const backBtn = document.querySelector("#nextBtn .back");

gsap.registerPlugin(ScrollTrigger);

export { imagesCarouselScroll };

function imagesCarouselScroll() {
  gsap.to("#imagesCarousel", {
    scrollTrigger: {
      trigger: ".header.carrossel",
      endTrigger: ".header.banner",
      //markers: true,
      scrub: 1,
    },
    x: -900,
    duration: 5,
  });
}

nextBtn.addEventListener("click", () => {
  gsap.to("#nextPhoto", {
    x: -400,
    duration: 1,
  });
});

backBtn.addEventListener("click", () => {
  gsap.to("#nextPhoto", {
    x: 400,
    duration: 1,
  });
});
