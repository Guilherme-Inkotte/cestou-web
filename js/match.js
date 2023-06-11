infoButton = document.getElementById("info-button");
playersButton = document.getElementById("players-button");
statsButton = document.getElementById("stats-button");
info = document.getElementById("info");
players = document.getElementById("players");
stats = document.getElementById("stats");

infoButton.addEventListener("click", (e) => {
  e.preventDefault();
  infoButton.classList.add("selected");
  info.classList.remove("hidden");
  playersButton.classList.remove("selected");
  players.classList.add("hidden");
  statsButton.classList.remove("selected");
  stats.classList.add("hidden");
});

playersButton.addEventListener("click", (e) => {
  e.preventDefault();
  infoButton.classList.remove("selected");
  info.classList.add("hidden");
  playersButton.classList.add("selected");
  players.classList.remove("hidden");
  statsButton.classList.remove("selected");
  stats.classList.add("hidden");
});

statsButton.addEventListener("click", (e) => {
  e.preventDefault();
  infoButton.classList.remove("selected");
  info.classList.add("hidden");
  playersButton.classList.remove("selected");
  players.classList.add("hidden");
  statsButton.classList.add("selected");
  stats.classList.remove("hidden");
});

