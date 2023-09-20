const rectangle = document.getElementById("image-rectangle");
const homePage = document.getElementById("app");
const backBtn = document.getElementById("buttonBack");

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
  }, 1000);
});
