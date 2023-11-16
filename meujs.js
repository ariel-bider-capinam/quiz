const questions = [
    {
      question: "Quando o Corinthians foi fundado?",
      answers: [
        { text: "1910", correct: true },
        { text: "1920", correct: false },
        { text: "1930", correct: false },
        { text: "1940", correct: false }
      ]
    },
    {
      question: "Qual estádio é conhecido como a casa do Corinthians?",
      answers: [
        { text: "Maracanã", correct: false },
        { text: "Arena da Baixada", correct: false },
        { text: "Arena Corinthians", correct: true },
        { text: "Morumbi", correct: false }
      ]
    },
    {
        question: "Em que ano o Corinthians foi bicampeão mundial?",
        answers: [
          { text: "2015", correct: false },
          { text: "2007", correct: false },
          { text: "2012", correct: true },
          { text: "2000", correct: false }
        ]
      },
      {
        question: "Quantos Paulista o Corinthians tem?",
        answers: [
          { text: "30", correct: true },
          { text: "39", correct: false },
          { text: "35", correct: false },
          { text: "27", correct: false }
        ]
      },
      
    
  ];
  
  let currentQuestion = 0;
  
  const questionContainer = document.getElementById("question-container");
  const answerContainer = document.getElementById("answer-container");
  const resultContainer = document.getElementById("result-container");
  const resultMessage = document.getElementById("result-message");
  
  function startGame() {
    currentQuestion = 0;
    resultContainer.classList.add("hidden");
    nextQuestion();
  }
  
  function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    document.getElementById("question").innerText = currentQuestionData.question;
  
    answerContainer.innerHTML = "";
    currentQuestionData.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerText = answer.text;
      button.addEventListener("click", () => selectAnswer(index));
      answerContainer.appendChild(button);
    });
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestionData = questions[currentQuestion];
    if (currentQuestionData.answers[selectedIndex].correct) {
      currentQuestion++;
      nextQuestion();
    } else {
      showResultMessage("Você errou! Reinicie o jogo.");
    }
  }
  
  function showResult() {
    const score = currentQuestion;
    if (score === questions.length) {
      showResultMessage("Parabéns! Você é um bom corintiano.");
    } else {
      showResultMessage("Você errou. Reinicie o jogo.");
    }
  }
  
  function showResultMessage(message) {
    resultMessage.innerText = message;
    resultContainer.classList.remove("hidden");
  }
  
  function restartGame() {
    resultContainer.classList.add("hidden");
    startGame();
  }
  
  startGame();
  