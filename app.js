const welcomeScreen =
  document.getElementById("welcomeScreen");

const testScreen =
  document.getElementById("testScreen");

const playerNameInput =
  document.getElementById("playerName");

const nameError =
  document.getElementById("nameError");

const welcomeMessage =
  document.getElementById("welcomeMessage");

const startBtn =
  document.getElementById("startBtn");

const backBtn =
  document.getElementById("backBtn");

function startQuizTest() {
  const playerName =
    playerNameInput.value.trim();

  if (!playerName) {
    nameError.textContent =
      "請先輸入姓名。";

    playerNameInput.focus();
    return;
  }

  nameError.textContent = "";

  welcomeMessage.textContent =
    `歡迎 ${playerName}！`;

  welcomeScreen.classList.add("hidden");
  testScreen.classList.remove("hidden");
}

function returnToWelcome() {
  testScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
  playerNameInput.focus();
}

startBtn.addEventListener(
  "click",
  startQuizTest
);

backBtn.addEventListener(
  "click",
  returnToWelcome
);

playerNameInput.addEventListener(
  "keydown",
  function (event) {
    if (event.key === "Enter") {
      startQuizTest();
    }
  }
);
