window.onload = function () {

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
      ]
    },

    {
      question:
        "Y2K最著名的電腦問題稱為什麼？",

      answers: [
        "Millennium Bug",
        "Blue Screen",
        "Dot Crash",
        "Windows Error"
      ]
    }

  ];

  let currentQuestion = 0;

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

  function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

      alert("題目結束");

      return;
    }

    loadQuestion();
  }

  answerA.addEventListener("click", nextQuestion);
  answerB.addEventListener("click", nextQuestion);
  answerC.addEventListener("click", nextQuestion);
  answerD.addEventListener("click", nextQuestion);

  loadQuestion();

};
