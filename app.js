window.onload = function () {
  
console.log("JS開始");
 
  const welcomeScreen = document.getElementById("welcomeScreen");
  const testScreen = document.getElementById("testScreen");
  const startBtn = document.getElementById("startBtn");
  const playerNameInput = document.getElementById("playerName");
  const nameError = document.getElementById("nameError");

  const questionNumber = document.getElementById("questionNumber");
  const questionText = document.getElementById("questionText");

  const answerA = document.getElementById("answerA");
  const answerB = document.getElementById("answerB");
  const answerC = document.getElementById("answerC");
  const answerD = document.getElementById("answerD");

  const imageAnswers =
  document.getElementById("imageAnswers");

const imageA =
  document.getElementById("imageA");

const imageB =
  document.getElementById("imageB");

const imageC =
  document.getElementById("imageC");

const imageD =
  document.getElementById("imageD");

const imageAnswerA =
  document.getElementById("imageAnswerA");

const imageAnswerB =
  document.getElementById("imageAnswerB");

const imageAnswerC =
  document.getElementById("imageAnswerC");

const imageAnswerD =
  document.getElementById("imageAnswerD");

  const questions = [
    {
      question: "下列哪個曾經是台灣最熱門的部落格平台？",
      answers: [
        "無名小站",
        "痞客邦",
        "方格子",
        "Threads"
      ],
      correct: 0
    },
    {
      question: "下列哪個不是當年常見的即時通訊軟體？",
      answers: [
        "MSN",
        "Teams",
        "ICQ",
        "奇摩即時通"
      ],
      correct: 1
    },
    {
      question: "當年許多人透過哪種方式下載歌曲？",
      answers: [
        "Apple Music",
        "Spotify",
        "MP3 檔案",
        "YouTube Music"
      ],
      correct: 2
    },
    {
      question: "在 Y2K 時期的台灣，哪一個入口網站同時提供搜尋、新聞、拍賣等服務？",
      answers: [
        "Yahoo!奇摩",
        "ChatGPT",
        "Google",
        "Copilot"
      ],
      correct: 0
    },
    {
      question: "下列哪個節目最符合 Y2K 年代？",
      answers: [
        "原子少年",
        "全明星運動會",
        "夜市王",
        "超級星光大道"
      ],
      correct: 3
    },
    {
      question: "當時購買手機鈴聲常見的方式是？",
      answers: [
        "App Store 購買",
        "傳簡訊下載",
        "Spotify 訂閱",
        "YouTube 下載"
      ],
      correct: 1
    },
    {
      question: "哪一套作業系統最能代表 Y2K？",
      answers: [
        "Windows 11",
        "macOS Sonoma",
        "Windows XP",
        "ChromeOS"
      ],
      correct: 2
    },
    {
      question: "「Y2K」一詞最初與哪個議題密切相關？",
      answers: [
        "網路泡沫",
        "AI 革命",
        "NFT 熱潮",
        "千禧蟲問題"
      ],
      correct: 3
    },
    {
      question: "在 MSN、Yahoo!即時通盛行的年代，你認得 MSN Messenger 的標誌嗎？請選出正確答案。",
      answers: [
        "Twitter",
        "KakaoTalk",
        "WhatsApp",
        "MSN Messenger"
      ],
      correct: 3,
      images: [
  "images/q9_a.png",
  "images/q9_b.png",
  "images/q9_c.png",
  "images/q9_d.png"
],
      imageQuestion: true
    },
    {
      question: "曾被譽為全球最早期即時通訊軟體之一的 ICQ，其經典標誌是哪一個？",
      answers: [
        "ICQ",
        "Skype",
        "Discord",
        "fromm"
      ],
      correct: 0,
      images: [
  "images/q10_a.png",
  "images/q10_b.png",
  "images/q10_c.png",
  "images/q10_d.png"
],
      imageQuestion: true
    },
    {
      question: "下列哪一支手機被譽為 Y2K 時代最具代表性的經典手機之一？請選出 Nokia 3310。",
      answers: [
        "Motorola Razr V3",
        "Nokia 3310",
        "Sony Ericsson",
        "PHS（SANYO）"
      ],
      correct: 1,
        images: [
  "images/q11_a.png",
  "images/q11_b.jpg",
  "images/q11_c.png",
  "images/q11_d.png"
],
      imageQuestion: true
    },
    {
      question: "以下哪位「不是」F4 成員？",
      answers: [
        "言承旭",
        "吳建豪",
        "汪東城",
        "朱孝天"
      ],
      correct: 2
    },
    {
      question: "以下哪一個網路平台成立最早？",
      answers: [
        "MySpace",
        "批踢踢",
        "無名小站",
        "Facebook"
      ],
      correct: 1
    },
    {
      question: "以下哪個偶像團體最晚成立？",
      answers: [
        "S.H.E.",
        "5566",
        "飛輪海",
        "七朵花"
      ],
      correct: 2
    },
    {
      question: "Y2K 時期流行的「LKK」，是形容怎樣的人？",
      answers: [
        "老氣、過時的人",
        "很有錢的人",
        "很帥很漂亮的人",
        "很聰明的人"
      ],
      correct: 0
    }
  ];

  let currentQuestion = 0;
  let score = 0;
  let startTime = 0;
  let playerName = "";

  function loadQuestion() {
  const question = questions[currentQuestion];

  questionNumber.textContent =
    `第 ${currentQuestion + 1} 題 / ${questions.length} 題`;

  questionText.textContent = question.question;

  if (question.imageQuestion) {
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    answerD.style.display = "none";

    imageAnswers.classList.remove("hidden");
    imageAnswers.style.display = "grid";

    imageA.src = question.images[0];
    imageB.src = question.images[1];
    imageC.src = question.images[2];
    imageD.src = question.images[3];
  } else {
    imageAnswers.style.display = "none";

    answerA.style.display = "block";
    answerB.style.display = "block";
    answerC.style.display = "block";
    answerD.style.display = "block";

    answerA.textContent = question.answers[0];
    answerB.textContent = question.answers[1];
    answerC.textContent = question.answers[2];
    answerD.textContent = question.answers[3];
  }
}

  function submitAnswer(answerIndex) {
    if (answerIndex === questions[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {
      testScreen.style.display = "none";

document.getElementById("resultScreen").style.display = "grid";

document.getElementById("resultName").textContent =
  `玩家：${playerName}`;

const elapsedSeconds =
  Math.floor(
    (Date.now() - startTime) / 1000
  );

document.getElementById("resultScore").textContent =
  `答對：${score}/${questions.length}｜耗時：${elapsedSeconds} 秒`;
      
return;
      
    }

    loadQuestion();
  }

  startBtn.addEventListener("click", function () {

    playerName = playerNameInput.value.trim();

    if (!playerName) {
      nameError.textContent = "請先輸入姓名";
      playerNameInput.focus();
      return;
    }

    nameError.textContent = "";
    currentQuestion = 0;
    score = 0;
    startTime = Date.now();

welcomeScreen.style.display = "none";

testScreen.style.display = "grid";

loadQuestion();

});

answerA.addEventListener("click", function () {

submitAnswer(0);

});

answerB.addEventListener("click", function () {

submitAnswer(1);

});

answerC.addEventListener("click", function () {

submitAnswer(2);

});

answerD.addEventListener("click", function () {

submitAnswer(3);

});

  imageAnswerA.addEventListener("click", function () {
  submitAnswer(0);
});

imageAnswerB.addEventListener("click", function () {
  submitAnswer(1);
});

imageAnswerC.addEventListener("click", function () {
  submitAnswer(2);
});

imageAnswerD.addEventListener("click", function () {
  submitAnswer(3);
});
  
};
