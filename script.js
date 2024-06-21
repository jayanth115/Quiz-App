const questions = [
    {
        question: "Who is the Minister of Home Affairs in the 2024 Council of Ministers?",
        answers: [
            {text:"Shri Narendra Modi" , correct: false},
            {text:"Shri Amit Shah" , correct: true},
            {text:"Shri Rajnath Singh" , correct: false},
            {text:"Shri Nitin Gadkari" , correct: false},
        ]
    },
    {
        question: "Who is the Minister of Defence in the 2024 Council of Ministers?",
        answers: [
            {text:"Dr. Subrahmanyam Jaishankar" , correct: false},
            {text:"Shri Amit Shah" , correct: false},
            {text:"Shri Rajnath Singh" , correct: true},
            {text:"Shri Nitin Gadkari" , correct: false},
        ]
    },
    {
        question: "Who is the Minister of Finance and Corporate Affairs in the 2024 Council of Ministers?",
        answers: [
            {text:"Dr. Subrahmanyam Jaishankar" , correct: false},
            {text:"Shri Amit Shah" , correct: false},
            {text:"Shri Rajnath Singh" , correct: false},
            {text:"Smt. Nirmala Sitharaman" , correct: true},
        ]
    },
    {
        question: "Who is the Minister of External Affairs in the 2024 Council of Ministers?",
        answers: [
            {text:"Dr. Subrahmanyam Jaishankar" , correct: true},
            {text:"Shri Amit Shah" , correct: false},
            {text:"Shri Nitin Gadkari" , correct: false},
            {text:"Smt. Nirmala Sitharaman" , correct: false},
        ]
    },
    {
        question: "Who is the Minister of Road Transport and Highways in the 2024 Council of Ministers?",
        answers: [
            {text:"Dr. Subrahmanyam Jaishankar" , correct: false},
            {text:"Shri Amit Shah" , correct: false},
            {text:"Shri Nitin Gadkari" , correct: true},
            {text:"Smt. Nirmala Sitharaman" , correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();