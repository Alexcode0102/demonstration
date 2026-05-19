const toggles = document.querySelectorAll(".toggle");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    details.classList.toggle("open");

    button.textContent = details.classList.contains("open")
      ? "Ocultar detalhes"
      : "Ver detalhes";
  });
});

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    mobileMenu.setAttribute("aria-hidden", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });
}

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

if (checkboxes && checkboxes.length > 0 && progressBar && progressText) {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });
  // inicializa barra
  updateProgress();
} else if (checkboxes && checkboxes.length > 0) {
  // evita erros se progressBar/progressText não existirem
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {});
  });
}

function updateProgress() {
  if (!progressBar || !progressText) return;
  const total = checkboxes.length || 1;
  const checked = document.querySelectorAll("input[type='checkbox']:checked").length;
  const percent = Math.round((checked / total) * 100);

  progressBar.style.width = `${percent}%`;
  progressText.textContent = `Progresso: ${percent}%`;

  if (percent === 100) {
    progressText.textContent = "Progresso: 100% — missão do dia concluída 🚀";
  }
}

const hooks = [
  "BROOO imagine gaming with this at 2AM 😭",
  "nahhh this setup is actually insane 💀",
  "yo this doesn’t even look real...",
  "wait… this room looks like a spaceship 🚀",
  "this is not just a setup, this is a whole vibe.",
  "imagine turning your room into this 😮‍💨",
  "nahhh I need this in my setup right now.",
  "this would make any room look 10x better.",
  "POV: your setup finally looks expensive."
];

const ideas = [
  "Antes e depois de um setup comum virando setup futurista.",
  "Vídeo mostrando um produto como se fosse item secreto de um quarto premium.",
  "POV de madrugada usando o produto com luz baixa e música forte.",
  "Comparação: quarto normal vs quarto com estética premium.",
  "Vídeo estilo reação: mostrando o produto como se fosse absurdo demais.",
  "Storytelling curto: 'eu queria montar meu setup dos sonhos, então comecei por isso...'",
  "Vídeo com cortes rápidos mostrando detalhes, textura, luz e ambiente.",
  "Conteúdo de nostalgia: algo que lembra infância, mas com estética moderna."
];

const hookBtn = document.getElementById("hookBtn");
const hookResult = document.getElementById("hookResult");
const ideaBtn = document.getElementById("ideaBtn");
const ideaResult = document.getElementById("ideaResult");

if (hookBtn && hookResult) {
  hookBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * hooks.length);
    hookResult.textContent = hooks[random];
  });
}

if (ideaBtn && ideaResult) {
  ideaBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * ideas.length);
    ideaResult.textContent = ideas[random];
  });
}
 