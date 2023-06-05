myMatchesButton = document.getElementById("my-matches");
publicMatchesButton = document.getElementById("public-matches");
courtsButton = document.getElementById("courts");

myMatchesButton.addEventListener("click", (e) => {
  e.preventDefault();
  myMatchesButton.classList.add("selected");
  publicMatchesButton.classList.remove("selected");
  courtsButton.classList.remove("selected");
});

publicMatchesButton.addEventListener("click", (e) => {
  e.preventDefault();
  myMatchesButton.classList.remove("selected");
  publicMatchesButton.classList.add("selected");
  courtsButton.classList.remove("selected");
});

courtsButton.addEventListener("click", (e) => {
  e.preventDefault();
  myMatchesButton.classList.remove("selected");
  publicMatchesButton.classList.remove("selected");
  courtsButton.classList.add("selected");
});
