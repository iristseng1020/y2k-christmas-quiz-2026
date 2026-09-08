window.onload = function () {

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  const testScreen =
    document.getElementById("testScreen");

  const startBtn =
    document.getElementById("startBtn");

  alert("JS OK");

  startBtn.addEventListener(
    "click",
    function () {

      alert("按鈕成功");

      welcomeScreen.style.display = "none";

      testScreen.style.display = "flex";

    }
  );

};
