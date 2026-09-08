window.onload = function () {

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  const testScreen =
    document.getElementById("testScreen");

  const startBtn =
    document.getElementById("startBtn");

  const questionNumber =
    document.getElementById("questionNumber");

  const questionText =
    document.getElementById("questionText");

  const answerA =
    document.getElementById("answerA");

  const answerB =
    document.getElementById("answerB");

  const answerC =
    document.getElementById("answerC");

  const answerD =
    document.getElementById("answerD");

  const questions = [

    {
      question:
        "2000年代初最受歡迎的即時通訊軟體是？",

      answers: [
        "MSN Messenger",
        "LINE",
        "Discord",
        "Telegram"
      ],

      correct: 0
    },

    {
      question:
        "Y2K 最著名的問題被稱為什麼？",

      answers: [
        "Millennium Bug",
        "Blue Screen",
        "Email Crash",
        "Internet Error"
      ],

      correct: 0
    }

  ];

  let currentQuestion = 0;

  let score = 0;

  function loadQuestion() {

    questionNumber.textContent =
      `第 ${currentQuestion + 1} 題 / ${questions.length} 題`;

    questionText.textContent =
      questions[currentQuestion].question;

    answerA.textContent =
      questions[currentQuestion].answers[0];

    answerB.textContent =
      questions[currentQuestion].answers[1];

    answerC.textContent =
      questions[currentQuestion].answers[2];

    answerD.textContent =
      questions[currentQuestion].answers[3];

  }

  function submitAnswer(answerIndex) {

    if (
      answerIndex ===
      questions[currentQuestion].correct
    ) {

      score++;

    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

      alert(
        `測驗結束\n得分：${score}/${questions.length}`
      );

      return;

    }

    loadQuestion();

  }

  startBtn.addEventListener(
    "click",
    function () {

      welcomeScreen.style.display =
        "none";

      testScreen.style.display =
        "grid";

      loadQuestion();

    }
  );

  answerA.addEventListener(
    "click",
    function () {
      submitAnswer(0);
    }
  );

  answerB.addEventListener(
    "click",
    function () {
      submitAnswer(1);
    }
  );

  answerC.addEventListener(
    "click",
    function () {
      submitAnswer(2);
    }
  );

  answerD.addEventListener(
    "click",
    function () {
      submitAnswer(3);
    }
  );

};
