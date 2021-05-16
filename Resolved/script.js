var startButton = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var ScorePage = document.querySelector("#end-page");
var container = document.getElementById("question-window");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var time;
var qCount = 0;
var score = 0;
var incorrect = 0;

startButton.addEventListener("click", startQuiz);
var questions = [
  {
    questionText: "What year was Coronavirus discovered?",
    options: ["A. 2021", "B. 2020", "C. 2019", "D. 2018"],
    answer: "C. 2019",
  },
  {
    questionText: "Finish the following sentence. You wear a mask over your...",
    options: [
      "A. head",
      "B. mouth and chin",
      "C. nose and mouth",
      "D. below your chin",
    ],
    answer: "C. nose and mouth",
  },
  {
    questionText: "What is the recommended distance for social distancing?",
    options: ["A. 2 feet", "B. 4 feet", "C. 6 feet", "D. 8 feet"],
    answer: "C. 6 feet",
  },
  {
    questionText: "Which of the following has the CDC recommended avoiding?",
    options: [
      "A. Crowded areas",
      "B. Rest stops",
      "C. Ventailated areas",
      "D. Rideshare services",
    ],
    answer: "A. Crowded areas",
  },
  {
    questionText: "Use hand sanitizer with at least ___% alcohol",
    options: ["A. 60", "B. 40", "C. 20", "D. 10"],
    answer: "A. 60",
  },
];
//Start button clicked
function startQuiz() {
  //stop displaying the welcome screen
  // startPage.style.display = "none";
  // display the questions
  // container.style.display = "block";
  //Set the time and condition if its correct or not
  timeInterval();
  //populate question
  displayPrompts();
  //Get the usersInput, do work depending on the input
  getUserInput();
}

//Timer function
function timeInterval() {
  time = setInterval(timer, 1000);
  var timeLeft = 60;

  function timer() {
    // if the wrong answer is clicked, take 2 seconds away from the count
    if (incorrect === 1) {
      timeLeft -= 2;
      incorrect--;
    }
    if (timeLeft < 0) {
      timeLeft = 0;
    } else if (timeLeft > 0) {
      document.getElementById("timer-txt").innerHTML = timeLeft + " sec";
      document.getElementById("score").innerHTML = "Score: " + score;
      timeLeft--;
    } else {
      clearInterval(time);
      document.getElementById("timer-txt").innerHTML = "Time Remaining: 0 sec";
      document.getElementById("final-score").innerHTML = "Score: " + score;
      container.style.display = "none";
      // Load ScorePage when questions completed
      ScorePage.style.display = "block";
    }
  }
}
//Display questions and options via the id tags
function displayPrompts() {
  var title = document.querySelector("#question-title");
  var text = document.querySelector("#question-text");
  //question count function
  title.textContent = "question: " + (qCount + 1);
  text.textContent = questions[qCount].questionText;
  //loop
  for (i = 0; i < 4; i++) {
    var button = document.querySelector("#answer" + (i + 1));
    console.log(button);
    button.textContent = questions[qCount].options[i];
  }
  qCount++;
}
//Check answer value
function getUserInput() {
  answer1.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    console.log(actualAnswer);
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });
  answer2.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    //Check answer value
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });
  answer3.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    //Check answer value
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });
  answer4.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    //Check answer value
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });
}
