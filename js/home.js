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

const assembleUserInfo = (user) => {
  if (user == "none") {
    document.getElementById("player-header").innerHTML =
      "<h1>Ocorreu um erro :c</h1>";
    return;
  }
  const {
    nickname,
    image,
    points,
    rebounds,
    assists,
    steals,
    blocks,
    overall,
  } = user;
  userHtml = `
    <div class="playerImage">
      <img
        src="${image}"
      />
    </div>
    <div class="playerInfo">
      <div>
        <h2>${nickname}</h2>
        <div class="row">
          <p>${points} pontos</p>
          <p>${rebounds} rebotes</p>
          <p>${assists} assistências</p>
          <p>${steals} roubos</p>
          <p>${blocks} bloqueios</p>
        </div>
      </div>
      <h2 class="overall">${overall} geral</h2>
    </div>
  `;
  document.getElementById("player-header").innerHTML = userHtml;
};

const fetchUser = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id") || 1;
    const response = await fetch(`../php/getUser.php?id=${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    const user = await response.json();
    assembleUserInfo(user);
  } catch (e) {
    console.log(e);
  }
};

window.onload = async () => {
  console.log("asdasdasd");
  await fetchUser();
  console.log("onload");
};
