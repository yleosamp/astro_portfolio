import anime from "animejs";

function rectangle() {
  anime({
    targets: "#image-rectangle",
    borderRadius: ["200%", "35px"],
    duration: 900,
    scale: ["0%", "100%"],
    backgroundColor: "#d9d9d9",
    easing: "spring(1, 80, 10, 0)", // spring(1, 80, 10, 0)
  });

  observer.disconnect();
}

function video() {
  anime({
    targets: ".videos-images",
    duration: 900,
    scaleX: ["0%", "100%"],
    backgroundColor: "#d9d9d9",
    easing: "easeInOutCubic", // easeInOutCirc
  });

  observer2.disconnect();
}

/* === OBSERVANDO IMAGE === */

// Crie uma instância do IntersectionObserver
const options = {
  /* Configuração default.  */
  root: null,
  rootMargin: "0px",
  threshold: [0],
};

const image = document.querySelector("#image-rectangle");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // O elemento está visível na viewport
      // Execute a função e desconecte o observador
      rectangle();
    }
  });
}, options);

// Inicie a observação do elemento
observer.observe(image);

/* === OBSERVANDO VIDEO === */

const elementoObservado2 = document.querySelector(".texts.videostexts");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry2) => {
    if (entry2.isIntersecting) {
      // O elemento está visível na viewport
      // Execute a função e desconecte o observador
      video();
    }
  });
}, options);

// Inicie a observação do elemento
observer2.observe(elementoObservado2);

/* === TRACKING === */

/* TEXTO RGB */

// Adicione a classe `colors-demo` ao seu elemento `div.astro-svg`
const astroSvg = document.querySelector(".astro-svg");
astroSvg.classList.add("colors-demo");

// Adicione o código de animação
var colorsExamples = anime
  .timeline({
    endDelay: 1000,
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
  })
  .add({ targets: ".color-hex", background: "#FFF" }, 0)
  .add({ targets: ".color-rgb", background: "rgb(255,255,255)" }, 0)
  .add({ targets: ".color-hsl", background: "hsl(0, 100%, 100%)" }, 0)
  .add({ targets: ".color-rgba", background: "rgba(255,255,255, .2)" }, 0)
  .add({ targets: ".color-hsla", background: "hsla(0, 100%, 100%, .2)" }, 0)
  .add({ targets: ".colors-demo .el", translateX: 270 }, 0);

colorsExamples.add(
  {
    targets: ".colors-demo > .texts > h1",
    css: {
      color: (t, i, l) => {
        return `#${i % 2 == 0 ? "FFFFFF" : "6f00ff"}`;
      },
    },
    duration: 1000,
  },
  0
);
