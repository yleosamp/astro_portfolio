import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const rectangle = document.getElementById("image-rectangle");
const homePage = document.getElementById("app");
const backBtn = document.getElementById("buttonBack");
const projectButton = document.querySelector(
  ".projetos .projects .texts.projectos button"
);

gsap.registerPlugin(ScrollTrigger);

function imagesCarouselScroll() {}

rectangle.addEventListener("click", () => {
  $("#app").css("animation", "fadeOut");
  $("#app").css("animation-duration", "1s");

  $("html, body").animate(
    {
      scrollTop: $("nav").offset().top,
    },
    400
  );

  setTimeout(() => {
    $("#app").css("display", "none");
    $("#portfolio").css("display", "flex");
    $("#portfolio").css("flex-direction", "column");

    // animation:
    $("#portfolio").css(
      "animation",
      "slideInUp cubic-bezier(0, 0.7, 0.26, 0.98)"
    );
    $("#portfolio").css("animation-duration", "2s");

    $("#portfolio .designs .head").css("animation", "fadeInRight");
    $("#portfolio .designs .head").css("animation-duration", "2s");
  }, 1000);

  setTimeout(() => {
    gsap.to("#imagesCarousel", {
      scrollTrigger: {
        trigger: ".header.carrossel",
        endTrigger: ".header.banner",
        //markers: true,
        scrub: 1,
      },
      x: 900,
      duration: 5,
    });
  }, 2000);
});

projectButton.addEventListener("click", () => {
  $("#app").css("animation", "fadeOut");
  $("#app").css("animation-duration", "1s");

  $("html, body").animate(
    {
      scrollTop: $("nav").offset().top,
    },
    400
  );

  setTimeout(() => {
    $("#app").css("display", "none");
    $("#portfolio").css("display", "flex");
    $("#portfolio").css("flex-direction", "column");

    // animation:
    $("#portfolio").css(
      "animation",
      "slideInUp cubic-bezier(0, 0.7, 0.26, 0.98)"
    );
    $("#portfolio").css("animation-duration", "2s");

    $("#portfolio .designs .head").css("animation", "fadeInRight");
    $("#portfolio .designs .head").css("animation-duration", "2s");
  }, 1000);

  setTimeout(() => {
    gsap.to("#imagesCarousel", {
      scrollTrigger: {
        trigger: ".header.carrossel",
        endTrigger: ".header.banner",
        //markers: true,
        scrub: 1,
      },
      x: 900,
      duration: 5,
    });
  }, 2000);
});

backBtn.addEventListener("click", () => {
  $("#portfolio").css("animation", "fadeOut");
  $("#portfolio").css("animation-duration", "1s");

  $("html, body").animate(
    {
      scrollTop: $("nav").offset().top,
    },
    400
  );

  setTimeout(() => {
    $("#portfolio").css("display", "none");
    $("#app").css("display", "flex");
    $("#app").css("animation", "animate__backInRight");
    $("#app").css("animation-duration", "1s");
  }, 1000);
});
