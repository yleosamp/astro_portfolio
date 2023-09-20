// <=== FUNÇÕES ===>

// === TEXTO DOS PROJETOS ===

function showProjectsText() {
  const text = document.querySelector(".texts.projectos");

  text.classList.add("animated");

  observer.disconnect();
}

// === TEXTO DOS VÍDEOS ===

function showVideosText() {
  const text = document.querySelector(".texts.videostexts");

  text.classList.add("animated");

  observer.disconnect();
}

// <=== INTERSECTION OBSERVER ===>

// === OBSERVANDO PROJETOS ===

// Crie uma instância do IntersectionObserver
const options = {
  /* Configuração default.  */
  root: null,
  rootMargin: "0px",
  threshold: [0], // Vai disparar quando o elemento estiver parcialmente na tela. Se fosse 1 seria apenas com todo elemento na tela
};

const image = document.querySelector("#image-rectangle");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // O elemento está visível na viewport
      // Execute a função e desconecte o observador
      showProjectsText();
    }
  });
}, options);

// Inicie a observação do elemento
observer.observe(image);

// === OBSERVANDO VÍDEOS ===

const elementoObservado2 = document.querySelector(".texts.videostexts");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry2) => {
    if (entry2.isIntersecting) {
      // O elemento está visível na viewport
      // Execute a função e desconecte o observador
      showVideosText();
    }
  });
}, options);

// Inicie a observação do elemento
observer2.observe(elementoObservado2);
