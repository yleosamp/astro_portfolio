import anime from "animejs";

function rectangle() {
  anime({
    targets: "#image-rectangle",
    borderRadius: ["200%", "35px"],
    duration: 400,
    scale: ["0%", "100%"],
    backgroundColor: "#d9d9d9",
    easing: "spring(1, 80, 10, 0)",
  });

  observer.disconnect();
}

function video() {
  anime({
    targets: ".videos-images",
    duration: 600,
    scaleX: ["0%", "100%"],
    backgroundColor: "#d9d9d9",
    easing: "easeInOutCirc",
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

const elementoObservado2 = document.querySelector("#video-images");

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
