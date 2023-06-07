myMatchesButton = document.getElementById("my-matches-button");
publicMatchesButton = document.getElementById("public-matches-button");
courtsButton = document.getElementById("courts-button");
myMatches = document.getElementById("my-matches");
publicMatches = document.getElementById("public-matches");
courts = document.getElementById("courts");

myMatchesButton.addEventListener("click", (e) => {
  e.preventDefault();
  myMatchesButton.classList.add("selected");
  myMatches.classList.remove("hidden");
  publicMatchesButton.classList.remove("selected");
  publicMatches.classList.add("hidden");
  courtsButton.classList.remove("selected");
  courts.classList.add("hidden");
});

publicMatchesButton.addEventListener("click", (e) => {
  e.preventDefault();
  myMatchesButton.classList.remove("selected");
  myMatches.classList.add("hidden");
  publicMatchesButton.classList.add("selected");
  publicMatches.classList.remove("hidden");
  courtsButton.classList.remove("selected");
  courts.classList.add("hidden");
});

courtsButton.addEventListener("click", (e) => {
  e.preventDefault();
  myMatchesButton.classList.remove("selected");
  myMatches.classList.add("hidden");
  publicMatchesButton.classList.remove("selected");
  publicMatches.classList.add("hidden");
  courtsButton.classList.add("selected");
  courts.classList.remove("hidden");
});

