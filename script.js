const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const quizQs = quizData[currentQuiz];
  questionEl.textContent = quizQs.question;
  a_text.textContent = quizQs.a;
  b_text.textContent = quizQs.b;
  c_text.textContent = quizQs.c;
  d_text.textContent = quizQs.d;
}

function deselectAnswers() {
  answerEls.forEach((el, i) => {
    el.checked = false;
  });
}

function getSelected() {
  answerEls.forEach((el, i) => {
    if (el.checked) {
      if (el.id === quizData[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;
    }
  });
}

loadQuiz(quizData[currentQuiz]);

submitBtn.addEventListener("click", (e) => {
  getSelected();
  deselectAnswers();

  if (currentQuiz < quizData.length) {
    loadQuiz(quizData[currentQuiz]);
  } else {
    quiz.innerHTML = `
    <div>
     <h2 id="question">Quiz is finished</h2>
     <h2 id="question">Your score is : ${score}</h2>
    </div>`;
  }
});
