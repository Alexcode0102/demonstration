const toggles = document.querySelectorAll(".toggle");

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    details.classList.toggle("open");

    button.textContent = details.classList.contains("open")
      ? "Ocultar detalhes"
      : "Ver detalhes";
  });
});

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgress);
});

function updateProgress() {
  const total = checkboxes.length;
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

hookBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * hooks.length);
  hookResult.textContent = hooks[random];
});

ideaBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * ideas.length);
  ideaResult.textContent = ideas[random];
});