const startBtn = document.getElementById("startBtn");
const mission = document.getElementById("mission");

startBtn.addEventListener("click", () => {
  mission.classList.remove("hidden");
  mission.scrollIntoView({ behavior: "smooth" });
});

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const progressText = document.getElementById("progress");

checkboxes.forEach((box) => {
  box.addEventListener("change", updateProgress);
});

function updateProgress() {
  const total = checkboxes.length;
  const checked = document.querySelectorAll("input[type='checkbox']:checked").length;
  const percent = Math.round((checked / total) * 100);

  progressText.textContent = `Progresso: ${percent}%`;

  if (percent === 100) {
    progressText.textContent = "Progresso: 100% — missão diária concluída 🚀";
  }
}

const phrases = [
  "BROOO imagine gaming with this at 2AM 😭",
  "nahhh this setup is actually insane 💀",
  "yo this doesn’t even look real...",
  "wait… this room looks like a spaceship 🚀",
  "this is not a setup, this is a whole vibe.",
  "imagine turning your room into this 😮‍💨",
  "nahhh I need this in my setup right now."
];

const phraseBtn = document.getElementById("phraseBtn");
const phraseBox = document.getElementById("phraseBox");

phraseBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * phrases.length);
  phraseBox.textContent = phrases[random];
});