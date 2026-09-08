window.onload = function () {

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  const testScreen =
    document.getElementById("testScreen");

  const startBtn =
    document.getElementById("startBtn");

  alert(
    "welcomeScreen=" +
    (welcomeScreen !== null) +
    "\n" +
    "testScreen=" +
    (testScreen !== null)
  );

};
