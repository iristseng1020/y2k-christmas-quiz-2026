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
    }

  ];

  questionNumber.textContent =
    "第 1 題 / 15 題";

  questionText.textContent =
    questions[0].question;

  answerA.textContent =
    questions[0].answers[0];

  answerB.textContent =
    questions[0].answers[1];

  answerC.textContent =
    questions[0].answers[2];

  answerD.textContent =
    questions[0].answers[3];

};
