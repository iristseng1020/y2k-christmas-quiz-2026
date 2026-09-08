window.onload = function () {

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  const testScreen =
    document.getElementById("testScreen");

  const startBtn =
    document.getElementById("startBtn");

  startBtn.addEventListener(
    "click",
    function () {

      welcomeScreen.classList.add("hidden");

      testScreen.classList.remove("hidden");

    }
  );

};
